const { User} = require("../model/userSchema");

const addUser = async (request, response) => {
  console.log("add User",request.body);
  const newUser = new User(request.body);
  try {
    await newUser.save();
    response.status(201).json(newUser);
    // console.log(user);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getUser = async (request, response) => {
  try {
    console.log(request.params.id);
    const user = await User.findOne({ _id: request.params.id });
    // const user = await User.findById(request.params.id);
    response.status(200).json(user);
    console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editUser = async (request, response) => {
  console.log("editUserByID userCtrl");
  console.log(request.body);
  console.log(request.params);
  const { id } = request.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullName: request?.body?.fullName,
      },
      { new: true }
    );
    response.status(201).json(updatedUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = { addUser , getUser , getUsers,editUser };
