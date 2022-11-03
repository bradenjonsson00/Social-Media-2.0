import {React, useEffect} from "react";
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

export default function SignOut() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    
    if(getCookie("reloadMe") == "true") {//reloads page once
        document.cookie = "reloadMe=false";
        window.location.reload()
    }

    return (
        <div class="buffer-narrow">
            <div class="tile">
                Signed out. Have a nice day :)
            </div>
        </div>
    );
} 