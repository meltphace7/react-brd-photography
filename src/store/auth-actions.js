import { authActions } from "./auth-slice";
import hostURL from "../hosturl";

// GETS CART AND LOGS IN USER IF TOKEN IS DETECTED
export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token === "null") {
        return;
      }
      console.log("CART_ACTIONS-FETCH USERS CART");
      const response = await fetch(`${hostURL}/admin/check-admin`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!response.ok) {
        throw new Error("User not admin");
      }
      const responseData = await response.json();
      if (responseData.isAdmin) {
        dispatch(authActions.adminLogin());
      }
    } catch (err) {
      console.log(err);
    }
  };
};
