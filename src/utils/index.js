import * as actionTypes from "./actionTypes";
import routes from "./routeconfig";

export const config = {
  routes,
};

export const getPriorityRole = (admin) => {
  return admin ? "Admin" : "User";
};

export const validateData = (data) => {
  for (let i = 0; i < data.length; i++) {
    const itemData = data[i];
    if (!itemData) {
      return false;
    }
    const keys = Object.keys(itemData);

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j];
      const value = itemData[key];

      if (!value) {
        return false;
      }
    }
  }
  return true;
};

export { actionTypes };
