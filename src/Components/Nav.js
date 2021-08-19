import React from 'react';
import { Link } from "react-router-dom";
import "../Css/nav.scss";
import { useAuth } from '../firebase/Auth'
import { firebase } from "../firebase/firebaseConfig";

const Nav = () => {

    const {currentUser} = useAuth()

    return (
        <nav className="App__Nav">
            <ul className="App__NavList">
                <li>
                    {!!currentUser
                        ?<button onClick={() => firebase.auth().signOut()}>Sign out</button>
                        : <Link to="/login">Sign in</Link>
                    }
                </li>
                <li>
                    {!!currentUser
                        ? <Link to="/account"><p className="nav__user">{currentUser.email}</p></Link>
                        : <Link to="/signup">Sign up</Link>
                    }
                </li>
                <li className="nav__seperation">
                    |
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
                <li>
                    <Link to="/filter">
                        Filter
                    </Link>
                </li>
            </ul>
            <div className="filter__container">
                <p></p>
            </div>
            <div className="user__container">
                
            </div>
        </nav>
    );
};

export default Nav;