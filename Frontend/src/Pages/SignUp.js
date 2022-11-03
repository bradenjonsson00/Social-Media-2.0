import React from "react";
import '../Assets/Tile.css';

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export default function SignUp() {
    if(getCookie("reloadMe") == "true") {//reloads page once
        document.cookie = "reloadMe=false";
        window.location.reload()
    }

    return (
        <div class="buffer-narrow">
            <div class="tile">
                <form action="http://127.0.0.1:5000/signup" method = "POST">
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