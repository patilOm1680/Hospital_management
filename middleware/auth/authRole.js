export const authRole = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      const userRole = req.user.role;

    //   console.log(userRole);

    // const isPresent=false;
    // for (const role of allowedRoles) {
    //     if(userRole===role){
    //         isPresent=true;
    //         return;
    //     }
    // }
    // if(!isPresent){
    //     return res.status(403).json({
    //       message: `Access denied. Role '${userRole}' not authorized.`,
    //     });
    // }

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          status:403,
            success:false,
          message: `Access denied. Role '${userRole}' not permitted.`,
        });
      }

      next();

    } catch (error) {
        return res.status(500).json({
            status:500,
            message:"Something went wrong !",
            error:error.message
        })
    }
  };
};
