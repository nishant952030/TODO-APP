import React, { useEffect, useState } from "react";
import "./signup.css";
import { Navigate, useNavigate } from "react-router-dom";
import image from '../../imgs/pngwing 1.png'
import email from '../../imgs/authentication.png'
import password from '../../imgs/wrong-password.png'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const Signup = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: firstName + " " + lastName,
                
            });
            navigate("TodoApp")

            console.log("User signed up successfully:", userCredential.user);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    }


    return (
        <div className="login-main-div">
            <svg width={windowSize.width} height={windowSize.height} xmlns="http://www.w3.org/2000/svg">
                <circle cx={windowSize.width / (6)} cy={windowSize.width / (6.67)} r={windowSize.width / (4)} fill="#3754BB" />
                <circle cx="100%" cy="100%" r={windowSize.width / (6)} fill="#3754BB" />
            </svg>
            <div className="login-box">
                <div className="img-user-pass">
                    <div className="img">
                        <img src={image} />
                    </div>
                    <div className="vertical-line" />
                    <div className="user-details">
                        <h1 className="sign-up-heading">Sign Up</h1>
                        <div className="input-elements">
                            <input className="input-name" type="text"
                                placeholder="First Name"
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }} ></input>
                            <input className="input-name" type="text"
                                placeholder="Last Name"
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }} ></input>
                            <div className="email-div">
                                <img src={password}></img>
                                <input type="email" placeholder="username" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="password-div">
                                <img src={email}></img>
                                <input type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <button type="button" onClick={signUp}>Sign Up</button>
                             </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;
