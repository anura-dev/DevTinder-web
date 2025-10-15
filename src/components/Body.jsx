import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    if (userData) return;
    try {
      //gives the info of loggedInUser
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <NavBar />
      {/*Children route will render in Outlet*/}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
