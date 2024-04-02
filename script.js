// Nav Java
let searchBar= document.querySelector(".searchBar");
// onmouseover & onmouseout

searchBar.addEventListener("focus", inputFocus);

function inputFocus(){
document.querySelector(".midNav").style.border="2px solid red";
}

searchBar.addEventListener("focusout", inputUnfocus);
function inputUnfocus(){
    document.querySelector(".midNav").style.border="none";
    }
// Default login form
    window.onload= function loginForm(){
        // document.querySelector("body").style.backgroundColor="red"
    
        document.querySelector(".Login-form").style.display="block"
    }
    // click login to popUp login form
    document.querySelector(".login").addEventListener("click", enterLogin)
     function enterLogin(){
        document.querySelector(".Login-form").style.display="block"
    }
    // Can exit loginform
    let exitLogin = document.querySelector(".exit-form");
    exitLogin.onclick = function (){
        document.querySelector(".Login-form").style.display="none"
    }