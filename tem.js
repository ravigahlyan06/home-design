const crossButton = document.getElementById("cross");
const logoNav = document.getElementById("logo_nav");

const showNavbarBtn = document.getElementById("show_navbar_btn");
const hideNavbarBtn = document.getElementById("hide_navbar_btn");
const navbarToggle = document.getElementById("navbar_toggle");

const submitForm = document.getElementById("form");

const arrowBtn = document.getElementById("arrow_btn");

function handleCrossButton() {
  logoNav.classList.add("hide");
  // console.log(logoNav.classList);
}

function handleShowNavbar() {
  navbarToggle.classList.add("show-navbar");
}

function handleHideNavbar() {
  navbarToggle.classList.remove( "show-navbar");
}

function handleCloseForm() {
  submitForm.classList.remove("show-form");
}

function handleContactUs() {
  submitForm.classList.add("show-form");
}

window.onscroll = function () {
  if (document.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    arrowBtn.classList.add("show-arrow-btn");
  } else {
    arrowBtn.classList.remove("show-arrow-btn");
  }
};

function handleScrollTop() {
  document.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const password = document.getElementById("password");
const eyeIcon = document.getElementById("eye_icon");

function handlePasswordVisibility() {
  if (password.type === "text") {
    password.type = "password";
  } else if (password.type === "password") {
    password.type = "text";
  };

  if(eyeIcon.classList[1] === "fa-eye"){
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else if (eyeIcon.classList[1] === "fa-eye-slash"){
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
  }
};



const lockIcon = document.getElementById("confirm_password_icon");
const confirmPassword= document.getElementById("confirm_password");

function handleConfirmPasswordLock(){
    if(confirmPassword.type === "text"){
        confirmPassword.type = "password";
    }
    else if(confirmPassword.type === "password"){
        confirmPassword.type = "text";
    }
    if(lockIcon.classList[1] === "fa-lock"){
        lockIcon.classList.remove("fa-lock");
        lockIcon.classList.add("fa-unlock");
    }else if (lockIcon.classList[1] === "fa-unlock"){
        lockIcon.classList.remove("fa-unlock");
        lockIcon.classList.add("fa-lock");
    };
};

const innvantion = document.getElementById("new_Page");
const closes = document.getElementById("close_it");
const added = document.getElementById("btn_2");

function handleAdd(){
  innvantion.classList.add("show_invantion")
  removed.classList.remove("Show_Our_Work");
  ourvision.classList.remove("Show_Our_vision");
};

function handleCloseBtn(){
  innvantion.classList.remove("show_invantion")
};

const morebutnn = document.getElementById("workers");
const ourWork = document.getElementById("close_iit");
const removed = document.getElementById("interior_Work");

function handleShowBtn(){
  removed.classList.add("Show_Our_Work");
  innvantion.classList.remove("show_invantion");
  ourvision.classList.remove("Show_Our_vision");
}
function handleSecondBtn(){
  removed.classList.remove("Show_Our_Work");
}

const ourvision = document.getElementById("Vision_Text");

function handleShowButen(){
  ourvision.classList.add("Show_Our_vision");
  removed.classList.remove("Show_Our_Work");
  innvantion.classList.remove("show_invantion");
}
function handleShowOut(){
  ourvision.classList.remove("Show_Our_vision");
}

function handleScrollDown () {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

// handle form submission with validation

const nameInput = document.getElementById("name_input");
const passWordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

const nameAlertPopUp = document.getElementById("name-alert");

const passwordAlertPopUp = document.getElementById("password-alert");

const confirmPasswordAlertPopUp = document.getElementById("confirm-password-alert");

function handleFormSubmit() {
  if (nameInput.value.length < 3) {
    return nameAlertPopUp.classList.add("show")
  } else {
    nameAlertPopUp.classList.remove("show")
  }
  // == check krta hai agar sirf value same ho
  // === check krta hai agar value and type dono same ho

  // && ka mtlb jab dono condition match kre
  // || la mtlb jab dono m se koi bhi condition match kre

  if (passWordInput.value.length < 5 || confirmPassword.value.length < 5) {
    return passwordAlertPopUp.classList.add("show");
  } else {
   passwordAlertPopUp.classList.remove("show");
  }

   if (passWordInput.value != confirmPasswordInput.value) {
    return confirmPasswordAlertPopUp.classList.add("show");
  } else {
   confirmPasswordAlertPopUp.classList.remove("show");
  }

  window.location = "https://www.w3schools.com/jsref/met_node_removechild.asp";

}