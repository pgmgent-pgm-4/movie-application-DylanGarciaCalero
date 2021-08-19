import React from 'react';
import { db } from '../firebase/firebaseConfig';
import { Link } from 'react-router-dom';
import { useAuth } from '../firebase/Auth'

const Wishlist = ({ id , image }) => {

    const image_baseurl = "https://image.tmdb.org/t/p/w500";
    const {currentUser} = useAuth();

    const addToWishlist = () => {

        db.collection("wishlist").add({
            movieid: id,
            movie_path: "/series/",
            user: currentUser.email,
            image_path: image_baseurl+image
        })
    }

    return (
        <div className="details__wishlist">
            {!!currentUser
                ?   <div><h3>Add to wishlist</h3>
                        <button type="submit" onClick={addToWishlist}>
                            Add to wishlist
                        </button>
                    </div>
                :   <div className="login__wishlist">
                        <Link to="/login">Sign in to add to wishlist</Link>
                    </div>
            }
        </div>
    );
};

export default Wishlist;