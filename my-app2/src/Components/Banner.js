import React from 'react'
import Banner from 'react-banner'
import 'react-banner/dist/style.css'

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

export default props => {
    let user = getCookie("username")
    var logo1
    var items1

    if(user=="") {
        logo1 = "Social Media 2.0"
        items1=[
            { "content": "Log In", "url": "/LogIn" },
            { "content": "Sign Up", "url": "/SignUp" }]
    } else {
        logo1 = "Social Media 2.0 - Hello " + user
        items1=[{ "content": "Sign Out", "url": "/SignOut" }]
    }

    return (
        <Banner
            logo = {logo1}
            url={ window.location.pathname }
            items={items1} />
    )
}