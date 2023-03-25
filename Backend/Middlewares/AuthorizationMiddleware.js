const jwt = require("jsonwebtoken");
const userModel = require("../Model/UserModel");
const AuthorizationMiddleware = async (req, res, next) => {
  const  token = req.headers.token.split(" ")[1];
  console.log(token)

  try {
    var decoded = jwt.verify(token, "faisal");
  } catch (error) {
    res.status(400).send(error.message);
  }

  if (decoded) {
    let user = await userModel.find({_id: decoded.userID });
     console.log(decoded)
    if (user.length) {
      req.body.userID=decoded.userID
      console.log(req)
      next();
    } else {
      res.status(404).send("You are not Authorized to Access this!");
    }
  } else {
    res.status(404).send("You are not Authorized to Access this!");
  }
};

module.exports = AuthorizationMiddleware;
