import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;
    // console.log(authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        status:401,
        success:false,
        message: "Token not provided",
      });
    }

    const token = authHeader.split(" ")[1];

    // console.log(token);
    const userData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = userData;
    // console.log(req.user);
    next();

  } catch (err) {
    return res.status(401).json({
        status:401,
        success:false,
        message: "Invalid or expired token" 
    });
  }
};
