const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const userData = req.body;

    const user = await authService.register(userData);

    // console.log("user", user);

    res.status(201).json({
      message: "User Registered Successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async(req, res) => {
  try{
const userData = req.body;

const {token, userId} = await authService.login(userData);

 res.status(200).json({
  message: 'User Logged In Successfully',
  token,
  userId
})
  } catch(error){
    res.status(500).json({message: error.message});
  }
}

module.exports = { register, login };
