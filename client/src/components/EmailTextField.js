//https://stackoverflow.com/questions/61054275/usestate-with-boolean-value-in-react
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function TextField() {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const [data, setData] = useState({
    "email": ""
  });

  const changeEditMode = () => {
    console.log("changeEditMode");
    console.log(isInEditMode);
    setIsInEditMode(!isInEditMode);
  };

  // to check updated state
  useEffect(() => {
    console.log(isInEditMode);
  }, [isInEditMode]);

  const inputEmailFieldValue = useRef();

  const updateDetails = () => {
    console.log("updateDetails function");
    console.log(
      inputEmailFieldValue.current.name,
      inputEmailFieldValue.current.value
    );
    setFieldValue(inputEmailFieldValue.current.value);
    setData({...data,
      [inputEmailFieldValue.current.name]: inputEmailFieldValue.current.value,
    });
  };
  const handleEdit = async () => {
    console.log("handleEdit function");
    setIsInEditMode(!isInEditMode);
    console.log("Data", data);
    try {
      console.log("before editUser api function.........");
      return await axios.put(
        `http://localhost:8080/6414659d04ff6ea5dc624078`,
        data
      );
      // console.log("LOL , Hogayaaa");
    } catch (error) {
      console.log(error);
    }
  };

  function EditableInputField() {
    return (
      <div>
        <input
          type="text"
          name="email"
          defaultValue={fieldValue}
          ref={inputEmailFieldValue}
        ></input>
        <button onClick={changeEditMode}>cancel</button>
        <button onClick={updateDetails}>update</button>
        {isInEditMode ? "isInEditMode : TRUE" : "isInEditMode : FALSE"}
      </div>
    );
  }

  function DisplayText() {
    return (
      <div onDoubleClick={changeEditMode}>
        {fieldValue}
        {isInEditMode ? "isInEditMode : TRUE" : "isInEditMode : FALSE"}
      </div>
    );
  }

  return (
    <>
      {isInEditMode ? (
        <div>
          <input
            type="text"
            name="email"
            defaultValue={fieldValue}
            ref={inputEmailFieldValue}
            onChange={updateDetails}
          ></input>
          <button onClick={changeEditMode}>cancel</button>
          <button onClick={() => handleEdit(fieldValue)}>update</button>
          {isInEditMode ? "isInEditMode : TRUE" : "isInEditMode : FALSE"}
        </div>
      ) : (
        <div onDoubleClick={changeEditMode}>
          {fieldValue}
          {isInEditMode ? "isInEditMode : TRUE" : "isInEditMode : FALSE"}
        </div>
      )}
    </>
  );
}

export default TextField;
