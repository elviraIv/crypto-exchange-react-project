import React from "react";
import SavedCoin from "../components/SavedCoin";
import { UserAuth } from "../contex/AuthContext";
import { Navigate, useNavigate } from "react-router";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
          <div>
            <button
              className="border x-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
              onClick={logoutHandler}
            >
              Sign Out
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Watch List</h1>
            <SavedCoin />
          </div>
        </div>
      </div>
    );
  }else{
    return <Navigate to='/signin' />
  }
};

export default Account;
