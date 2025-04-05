const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");

const talkRoute = require("./3d.route");
const chatRoute = require("./chat.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },

  {
    path: "/talk",
    route: talkRoute,
  },
  {
    path: "",
    route: chatRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
