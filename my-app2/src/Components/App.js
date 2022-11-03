import React, { useEffect } from 'react';
import '../Assets/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Banner.js";
import Home from "../Pages/Home.js";
import LogIn from "../Pages/LogIn.js";
import SignUp from "../Pages/SignUp.js";
import SignOut from "../Pages/SignOut.js";
import NoPage from "../Pages/NoPage.js";

document.body.style = 'background: #8f886e;';

export default function App() {
    useEffect(() => {//generates doccument title
        document.title = 'Social Media 2.0';
    });
    
    return (
        <div>
            <BrowserRouter>
                <Banner/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="LogIn" element={<LogIn />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="SignOut" element={<SignOut />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}