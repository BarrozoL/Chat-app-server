const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { verifyUser } = require("./verifyUser.middleware");
const { verifyToken } = require("./verifyToken.middleware");
const isAuthenticated = require("./isAuthenticated.middleware");

//Routes
const indexRoutes = require("../routes/index.routes");
const userRoutes = require("../routes/user.routes");
const protectedRoutes = require("../routes/protected.routes");

module.exports = (app) => {
  app.use(
    cors({
      origin: process.env.ORIGIN || "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(logger("dev"));
  app.use(express.json());

  //Routes
  app.use("/", indexRoutes);
  app.use("/auth", userRoutes);
  app.use("/protected", verifyToken, protectedRoutes);
};
