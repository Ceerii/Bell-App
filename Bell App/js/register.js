var fullname = document.getElementById('fullname');
var matricno = document.getElementById('matric-no');
var dept = document.getElementById('dept');
var password = document.getElementById('password');
var confirm  = document.getElementById('confirm_password');
var errorBorder= document.querySelectorAll(".err");
var good_color = "1px solid #4FC1B0";
var bad_color  = "1px solid red";
var form = document.getElementById('form')


form.addEventListener("submit", check);

function check(e){
    e.preventDefault();
    for (var i=0; i< errorBorder.length; i++){
        if (errorBorder[i].value !==""){
            errorBorder[1].style.border = good_color;
               var user = {
               fullname:fullname.value,
               matricno:matricno.value,
               password:password.value,
               dept:dept.value
               }
               
         if (localStorage.getItem(user.matricno) === null) {
                document.querySelector("#statement").innerHTML = "";
                localStorage.setItem(user.matricno, JSON.stringify(user));
                // window.location.assign("/login.html");
               
         } else {
               errorBorder[i].style.border = bad_color;
               document.querySelector("#statement").innerHTML = "USER ALREADY EXISTS";
               }
       }else{
        errorBorder[i].style.border = bad_color;
        document.querySelector("#statement").innerHTML = "FILL INPUT PLEASE";
        }
   }
}
   
//   
//        if (errorBorder[i].value == ""){
//           
//        }else{
//            
//        }
//    }
   
//    function checkPass(){
//        if(password.value == confirm.value){
//            password.style.border= good_color;
//            confirm.style.border = good_color;
//        }else{
//            confirm.style.border = bad_color;
//        }
//    }  

function checkPass(){
     password = document.getElementById('password');
     confirm  = document.getElementById('confirm_password');
     good_color = "1px solid #4FC1B0";
     bad_color  = "1px solid red";

    if(password.value == confirm.value){
        password.style.border= good_color;
        confirm.style.border = good_color;
    }else{
        confirm.style.border = bad_color;
    }
}  



