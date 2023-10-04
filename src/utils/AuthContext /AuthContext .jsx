import React, { createContext, useState } from "react";
import { apiGet, apiPost } from "../api/axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from "axios";

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [areasOfInterests, setAreasOfInterests] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  const LoginConfig = async (data) => {
    try {
      const response = await apiPost("/users/login", data);
      const signature = response.data.signature;

      localStorage.setItem("signature", signature);
      localStorage.setItem("user", response.data.areaOfInterest || "backend");
      localStorage.setItem("userType", response.data.userType);
      if (response.status === 200) {
        setLoading(false);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setLoading(false);
      if (err.response?.data?.Error === "Internal server Error") {
        toast.error("Something went wrong, please hang on");
      } else {
        toast.error(err.response?.data?.Error || "Something went wrong");
      }
    }
  };

  const loggedInUser = async () => {
    const { data } = await apiGet("/users/profile");
    setUser(data.userDetails);
    setLoading(false);
  };

  const checkIsPaid = async (id) => {
    try {
      const response = await apiGet(`/users/student/courses/${id}`);
      if (response.data.message === "course found") {
        setIsPaid(true);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <dataContext.Provider
      value={{
        LoginConfig,
        loggedInUser,
        setLoading,
        user,
        loading,
        error,
        areasOfInterests,
        setAreasOfInterests,
        isPaid,
        setIsPaid,
        checkIsPaid,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
