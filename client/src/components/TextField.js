//https://stackoverflow.com/questions/61054275/usestate-with-boolean-value-in-react
import React, { useState , useEffect, useRef } from 'react'

function TextField() {
    const[isInEditMode , setIsInEditMode] = useState(false);
    const[fieldValue , setFieldValue] = useState("");
    
    const changeEditMode = () => {
        console.log("changeEditMode");
        console.log(isInEditMode);
        setIsInEditMode(!isInEditMode);
    }

    // to check updated state
    useEffect(() => {
      console.log(isInEditMode);
    }, [isInEditMode]);
    
    const inputFieldValue = useRef();

    const updateDetails = () => {
        console.log("updateDetails function")
        setIsInEditMode(!isInEditMode);
        console.log(inputFieldValue.current.name,inputFieldValue.current.value);
        setFieldValue(inputFieldValue.current.value);
    }

    function EditableInputField() {
      return (
        <div>
          <input
            type="text"
            name="email"
            defaultValue={fieldValue}
            ref={inputFieldValue}
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
            name="fullName"
            defaultValue={fieldValue}
            ref={inputFieldValue}
          ></input>
          <button onClick={changeEditMode}>cancel</button>
          <button onClick={updateDetails}>update</button>
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
