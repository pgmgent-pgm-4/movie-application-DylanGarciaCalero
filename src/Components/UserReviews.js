import React from "react";
import { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { Link } from "react-router-dom";

const UserReviews = ({ userid }) => {

    const [postedReviews, setPostedReviews] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                let allreviews = [];
                await db.collection("reviews")
                .where("user", "==", userid.email)
                .get()
                .then((item) => {
                    item.forEach((doc) => {
                        allreviews.push(doc.data())
                    })
                })
                console.log(allreviews);
                setPostedReviews(allreviews)
            } catch(err) {
                console.error(err)
            }
        }
        getReviews()
    }, []);

    let path = "/series/";

  return (
    <>
        <h2>Your reviews:</h2>
        <ul>
            {   postedReviews.sort((a, b) => b.createdAt - a.createdAt),
                postedReviews.map((review, index) => (
                <li>
                    <Link to={path+review.movieid}>See Review</Link>
                    <p>Your score: {review.score}</p>
                    <p>Your review: {review.review}</p>
                </li>
            ))}
        </ul>
    </>
  );
};

export default UserReviews;