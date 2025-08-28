const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

function checkPasswordValidation(){
    if (confirmpassword.value != password.value){
        confirmpassword.setCustomValidity("Password is not the same");
    }
    else{
        confirmpassword.setCustomValidity("");
    }
}

confirmpassword.addEventListener("input", checkPasswordValidation);