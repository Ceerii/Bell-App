var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    finite:true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  // Get the modal
  var modal = document.getElementById('myModal');
  var modalcontent = document.querySelector('.modal-content');

  // Get the button that opens the modal
  var btn = document.getElementById("btnhomeModal");
  
  // Get the <span> element that closes the modal
  
  // When the user clicks on the button, open the modal 
  btn.onclick = function() {
      modal.classList.add("open")
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.classList.remove("open")
      }
  }

  var openNotify = document.querySelector(".open-notify");
  var notify = document.querySelector(".notify");
console.log(openNotify, notify)
  openNotify.addEventListener("click", openTime);

  function openTime(){
    console.log("hey")
    notify.classList.toggle("show-modal");
  }

  var modals = document.querySelector(".modals");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".closed");

    function fadeInModal() {
        modals.classList.toggle("show-modal");
    }
    function fadeOutModal() {
      modals.classList.toggle("show-modal");
  }
    function windowOnClick(event) {
        if (event.target === modals) {
            fadeOutModal();
        }
    }

    trigger.addEventListener("click", fadeInModal);
    closeButton.addEventListener("click", fadeOutModal);
    window.addEventListener("click", windowOnClick);


    var firstButton = document.querySelector(".buttona");
    var secondButton = document.querySelector(".buttonb");
    var thirdButton = document.querySelector(".buttonc");
    var fourthButton = document.querySelector(".buttond");
    var modalOne= document.querySelector(".modal-one");
    var closeOne = document.querySelector(".exit");

    firstButton.addEventListener("click", openFirst);

    function openFirst(){
      var firstText= document.querySelector(".bikea").innerText;
      localStorage.setItem("firstText", firstText);
      console.log("hey");
      modalOne.classList.toggle("show-modal");
    }

    secondButton.addEventListener("click", openSecond);

    function openSecond(){
      var secondText= document.querySelector(".bikeb").innerText;
      localStorage.setItem("firstText", secondText);
      console.log("hey you");
      modalOne.classList.toggle("show-modal");
    }

    thirdButton.addEventListener("click", openThird);

    function openThird(){
      var thirdText= document.querySelector(".bikec").innerText;
      localStorage.setItem("firstText", thirdText);
      console.log("hey you there");
      modalOne.classList.toggle("show-modal");
    }

    fourthButton.addEventListener("click", openFourth);

    function openFourth(){
      var fourthText= document.querySelector(".biked").innerText;
      localStorage.setItem("firstText", fourthText);
      console.log("hey hey");
      modalOne.classList.toggle("show-modal");
    }

     closeOne.addEventListener("click", closeVerify);

    function closeVerify(){
      console.log("Hey");
      modalOne.classList.toggle("show-modal");
    }


    var verifyMatric = document.querySelector(".verifyMatric");
    var modalThree = document.querySelector(".modal-three");
    var verifyFinger = document.querySelector(".verifyFinger");
    var closeTwo = document.querySelector(".exit-two");

    verifyMatric.addEventListener("click", verifyUser);
   
    
    function verifyUser(){
      console.log("hi")
      modalThree.classList.toggle("show-modal");
    }

    verifyFinger.addEventListener("click", verifyFingerprint);

    function verifyFingerprint(){
      modalThree.classList.toggle("show-modal");
    }

    closeTwo.addEventListener("click", closeFinger);

    function closeFinger(){
      console.log("Hey babe");
      modalThree.classList.toggle("show-modal");
      modalOne.classList.toggle("show-modal");
    }

   

  //   window.onclick = function(event) {
  //     if (event.target == notify) {
  //         notify.classList.toggle("show-modal")
  //     }
  // }
    
    var verifyButton = document.querySelector(".verifyButton");
    var userInput = document.querySelector(".userInput");
    var good_color = "1px solid #4FC1B0";
    var bad_color  = "1px solid red";


    verifyButton.addEventListener("click", verifyUserMatric);

    function verifyUserMatric(e){
      e.preventDefault();
      if(userInput.value !== ""){
            var userItem = {
              userInput: userInput.value
            }
            userInput.style.border=good_color;
            document.querySelector(".statement").innerHTML = "";
            if(localStorage.getItem(userItem.userInput) !== null){
              var userInputInfo = JSON.parse(localStorage.getItem(userItem.userInput));
              console.log(userInputInfo);
              if(userItem.userInput === userInputInfo.matricno){
                  console.log("Hey bae");
                  window.location.assign("/success.html");
          } else {
              document.querySelector(".statement").innerHTML = "USER DOES NOT EXIST";
              userInput.style.border=bad_color;
          }
          }else{
              document.querySelector(".statement").innerHTML = "USER DOES NOT EXIST";
              userInput.style.border=bad_color;
          }
      }else{
        document.querySelector(".statement").innerHTML = "FILL INPUT PLEASE";
        userInput.style.border = bad_color;
      }
      
    }

    