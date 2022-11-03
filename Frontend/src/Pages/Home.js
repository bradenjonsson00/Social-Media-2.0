import React from "react";
import '../Assets/App.css';
import Body from '../Components/Body.js'

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export default function Home() {
    let urlParam = window.location.search;
    var uname

    if(urlParam.length > 0) {
        uname = urlParam.split('=')[1];
        if(uname.length > 0){
            if(getCookie("username") === "") {
                document.cookie = "username="+uname;
                window.location.reload()
            }
        } else {
            alert("Log in error");
        }
    }

    document.cookie = "reloadMe=true";//used in the sign out page
    return (
        <div>
            <div>
                <Body/>
            </div>
        </div>
    );
}