/* const { verifyUser } = require("./verifyUser.middleware");
const { verifyToken } = require("./verifyToken.middleware");
const isAuthenticated = require("./isAuthenticated.middleware");

//Routes
const indexRoutes = require("../routes/index.routes");
const authRoutes = require("../routes/auth.routes");
const protectedRoutes = require("../routes/protected.routes");

module.exports = (app) => {
  app.use("/", indexRoutes);
  app.use("/", indexRoutes);
  app.use("/auth", authRoutes);
  app.use("/protected", verifyToken, protectedRoutes);
};
 */
