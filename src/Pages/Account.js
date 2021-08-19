import React from "react";
import { useAuth } from '../firebase/Auth'
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import UserReviews from "../Components/UserReviews";
import UserWishList from "../Components/userWishlist";
import "../Css/account.scss";

const Account = () => {

    const {currentUser} = useAuth()
  return (
    <>
        <Nav/>
        <div className="account__introduction">
          <h2>Hello {currentUser.email}!</h2>
          <h3>This is your profile!</h3>
        </div>
        <div className="account__dashboard">
          <div className="account__reviews">
            <UserReviews userid={currentUser}/>
          </div>
          <div className="account__wishlist">
            <UserWishList userid={currentUser}/>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default Account;