import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../firebase/Auth';
import { db } from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import "../Css/review.scss";

const Review = ({ id }) => {

    const {currentUser} = useAuth();

    const [score, setScore] = useState('');
    const [review, setReview] = useState('');
    const [name, setName] = useState('');

    const [postedReviews, setPostedReviews] = useState([]);
    const [form, setForm] = useState([]);

    let author = "";

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setForm(e);
        
        if (!name) {
            author = "anonymous"
        } else {
            author = name
        }

        db.collection("reviews").add({
            name: author,
            user: currentUser.email,
            score: score,
            review: review,
            movieid: id,
            createdAt: Date.now()
        })
    }

    useEffect(() => {
        // FETCHING THE DATA
        async function getReviews() {
            try {
                let allreviews = [];
                await db.collection("reviews")
                .where("movieid", "==", id)
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
    }, [form]);

    let date = "";

    return (
        <div className="review__container">
                    {!!currentUser
                        ?   <div>
                                <form className="review__form" onSubmit={onHandleSubmit}>
                                    <label htmlFor="name"> Your displayed name: </label>
                                    <input name="name" type="text" id="name" placeholder="Your name.." value={name} onChange={(e) => setName(e.target.value)} />
                                    
                                    <label htmlFor="score">What score would you give this movie?</label>
                                        <select name="score" onChange={(e) => setScore(e.target.value)} id="score">
                                        <option value=""></option>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                        <option value="4" >4</option>
                                        <option value="5" >5</option>
                                    </select> 

                                    <label htmlFor="review"> Review </label>
                                    <input name="review" type="text" id="review" placeholder="Your review.." value={review} onChange={(e) => setReview(e.target.value)} required/>
                                    <button type="submit">Post review</button>
                                </form>
                                <ul className="review__list">
                                    {   postedReviews.sort((a, b) => b.createdAt - a.createdAt),
                                        postedReviews.map((review, index) => (
                                        date = new Date(review.createdAt).toLocaleString(),
                                        <li key={index} className="review__list__item">
                                            <h2>{review.score}/5</h2>
                                            <h3>{review.review}</h3>
                                            <p>Posted by: <span>{review.name}</span></p>
                                            <p>At: {date}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        :   <div className="login__reviews">
                                <Link to="/login">Sign in to post reviews</Link>
                            </div>
                    }
        </div>
    );
};

export default Review;