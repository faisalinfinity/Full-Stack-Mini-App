const jwt = require("jsonwebtoken");
const userModel = require("../Model/UserModel");
const AuthorizationMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  try {
    var decoded = jwt.verify(token, "faisal");
    console.log(decoded); // bar
  } catch (error) {
    res.status(400).send(error.message);
  }

  if (decoded) {
    let user = await userModel.find({ email: decoded.email });

    if (user.length) {
      next();
    } else {
      res.status(404).send("You are not Authorized to Access this!");
    }
  } else {
    res.status(404).send("You are not Authorized to Access this!");
  }
};

module.exports = AuthorizationMiddleware;
