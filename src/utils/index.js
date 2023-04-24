import * as actionTypes from "./actionTypes";
import routes from "./routeconfig";

export const config = {
  routes,
};

export const getPriorityRole = (admin) => {
  return admin ? "Admin" : "User";
};

export const validateData = (data) => {
  for (let key in data) {
    const dataItem = data[key];
    if (!dataItem) {
      return false;
    }
  }
  return true;
};

export { actionTypes };
