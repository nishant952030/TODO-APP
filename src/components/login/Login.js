import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./login.css";
import image from '../../imgs/pngwing 1.png'
import email from '../../imgs/authentication.png'
import password from '../../imgs/wrong-password.png'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const MacbookAir = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Get the navigate function from React Router
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

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            // After successful login, navigate to the "signup/TodoApp" route
            navigate("/signup/TodoApp");
        } catch (error) {
            console.error(error);
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
                        <h1>Login</h1>
                        <div className="input-elements">
                            <div className="email-div">
                                <img src={password}></img>
                                <input type="email" placeholder="username" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="password-div">
                                <img src={email}></img>
                                <input type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <button type="button" onClick={signIn}>Login</button>
                            <h6>Not yet registered?<span><a className="sign-up" href="signup">Sign Up</a></span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MacbookAir;
