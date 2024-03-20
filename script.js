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

    // window.onload= function loginForm(){
    //     document.querySelector("body").style.backgroundColor="red"
    
    //     document.querySelector(".Login-form").style.display="block"
    // }