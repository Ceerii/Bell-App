var loginform = document.getElementById("loginform");
var loginmatricno = document.getElementById('loginmatric');
var loginpass = document.getElementById('loginpass');
var errorBorder= document.querySelectorAll(".err");
var good_color = "1px solid #4FC1B0";
var bad_color  = "1px solid red";

loginform.addEventListener("submit", validateUser);
 
function  validateUser(e){
    e.preventDefault();
    for (var i=0; i<errorBorder.length; i++) {
        if (loginmatricno.value !== "" && loginpass.value !== "") {
            var userDetails = {    
                loginmatricno: loginmatricno.value,
                loginpass: loginpass.value
            }
            errorBorder[i].style.border=good_color;
            if(localStorage.getItem(userDetails.loginmatricno) !== null){
                var userInfo = JSON.parse(localStorage.getItem(userDetails.loginmatricno));
                console.log(userInfo);
                if((userDetails.loginmatricno === userInfo.matricno) && (userDetails.loginpass === userInfo.password)){
                    console.log("Hey");
                    window.location.assign("/slider.html");
            } else {
                document.querySelector(".statement").innerHTML = "WRONG CREDENTIALS";
                errorBorder[i].style.border=bad_color;
            }
            }else{
                document.querySelector(".statement").innerHTML = "USER DOES NOT EXIST";
                errorBorder[i].style.border=bad_color;
            }
    }else{
        document.querySelector(".statement").innerHTML = "FILL INPUT PLEASE";
        errorBorder[i].style.border =bad_color;
      }
    }  
}


// login form auth
    //    function logged (event) {
    //     event.preventDefault();
    //     if (loginemail.value !== "" && loginpass.value !== "") {
    //         if(localStorage.getItem(user.loginemail) !== null){
    //             let userInfo = JSON.parse(localStorage.getItem(user.loginemail));
    //            console.log(userInfo);
              
    //         }else{
    //             document.querySelector("#text").innerHTML = "Email is incorrect."
    //         } 
    //     }else{
    //         console.log("Awwwn!")
    //         document.querySelector("#work").style.display = "block"; 
    //     }
    // };
    

// const fullname = document.getElementById('fullname');
// const matricno = document.getElementById('matric-no');
// const dept = document.getElementById('dept');
// const password = document.getElementById('password');
// const confirm  = document.getElementById('confirm_password');
// const good_color = "1px solid #4FC1B0";
// const bad_color  = "1px solid red";
// const form = document.getElementById('form')

// form.addEventListener("submit", check);


// function check(e){
//  e.preventDefault();
//      if (fullname.value !== "" && matricno.value !== "" && password.value !== ""&& dept.value !== ""){
//         const user = {
//             fullname:fullname.value,
//             matricno:matricno.value,
//             password:password.value,
//             dept:dept.value
//             }
//       if (localStorage.getItem(user.matricno) === null && localStorage.getItem(user.matricno) === null  ) {
//           alert('HEY')
//              localStorage.setItem(user.matricno, JSON.stringify(user));
//              window.location.assign("/sl.html");
//       } else {
//             document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS";
//             }
//     }else{
//       console.log("no")
//      }
// }

// for (var i=0; i<errorBorder.length; i++){
//     if (errorBorder[i].value == ""){
//         errorBorder.style.border = bad_color;
//     }else{
//         errorBorder.style.border = good_color;
//     }
// }

function checkPass(){
    if(password.value == confirm.value){
        password.style.border= good_color;
        confirm.style.border = good_color;
    }else{
        confirm.style.border = bad_color;
    }
}  

// function check(e){
//     e.preventDefault();
//     good_color = "1px solid #4FC1B0";
//     bad_color  = "1px solid red";
//     for (var i=0; i<errorBorder.length; i++) {
//         if (errorBorder[i].value !== ""){
//             var user = {
//                details  : errorBorder.value
//             }
//         errorBorder[i].style.border =good_color;
//         if (localStorage.getItem(user.details) === null) {
//                  localStorage.setItem(user.details, JSON.stringify(user));
//                  window.location.assign("/login.html");
//                 } else {
//                  document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS"
//                   }
//     }else{
//        errorBorder[i].style.border =bad_color;
//      }
// }
// }



