import React from "react";
import '../Assets/Tile.css';
//import '../Assets/LogIn.css';

export default function LogIn() {
    return (
        <div class="buffer-narrow">
            <div class="tile">
                <form action="http://127.0.0.1:5000/login" method = "POST">
                    Username: 
                    <input type = "text" name = "username" /><br/><br/>
                    Password: 
                    <input type = "password" name= "password" /><br/><br/>
                    <input type = "submit" value = "submit" /><br/>
                </form>
            </div>
        </div>
    );
}