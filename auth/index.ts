import Cookies from "js-cookie";

export const Auth = () => {
  if (Cookies.get("token") && Cookies.get("nama")) {
    return true;
  }

  return false;
};
