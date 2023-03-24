const userModel = require("../Model/UserModel");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Login = async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.find({ email: email });

  if (user.length == 0) {
    return res.status(404).send("User not register");
  }

  let hash = user[0].password;

  //Comparing hash password with the entered one
  bcrypt.compare(password, hash, function (err, result) {
    if(err){
      return res.json({msg:err.message})
    }

    if (result) {
      return res.send({
        msg: "Logged In Successful",
        token: jwt.sign({ userID: user[0]._id }, "faisal", { expiresIn: 60 * 60 }),
      });
    }
    return res.status(404).send("Incorrect password ");
  });
};

const Register = async (req, res) => {
  const { email, password } = req.body;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      return res.status(400).send(err.message);
    }
    let newUser = new userModel({ email: email, password: hash });
    await newUser.save();
  });

  res.status(200).send("New User has been registered");
};

module.exports = {
  Login,
  Register,
};
