import * as actionTypes from "./actionTypes";
import routes from "./routeconfig";

export const config = {
  routes,
};

export const getPriorityRole = (admin) => {
  return admin ? "Admin" : "User";
};

export { actionTypes };
