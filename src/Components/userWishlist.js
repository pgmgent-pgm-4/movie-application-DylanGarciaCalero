import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { Link } from "react-router-dom";

const UserWishList = ({ userid }) => {

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                let allreviews = [];
                await db.collection("wishlist")
                .where("user", "==", userid.email)
                .get()
                .then((item) => {
                    item.forEach((doc) => {
                        allreviews.push(doc.data())
                    })
                })
                console.log(allreviews);
                setWishList(allreviews)
            } catch(err) {
                console.error(err)
            }
        }
        getReviews()
    }, []);

  return (
    <>
        <h2>Your wishlist</h2>
        <ul>
            {   wishList.map((item, index) => (
                <li>
                    <Link to={item.movie_path+item.movieid}>
                    <img src={item.image_path} alt="movie_poster"/>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  );
};

export default UserWishList;