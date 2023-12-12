window.addEventListener('load', () => {

    let form = document.getElementById('form')
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    let registerButton = document.getElementById('button-register');

    registerButton.addEventListener("click", register);

    function register(){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let confirmpassword = document.getElementById('confirmpassword').value;
        let errorTextElement = document.getElementById('error-text');
        
        let errorText;
        if(name.length < 1 ){
            errorText = "Name must be atleast 1 word";

        } else if (email.endsWith("@binus.ac.id") == false){
            errorText = "Email must be ends with @binus.ac.id";

        } else if(password.length === 0){
            errorText = "Password cannot be blank";

        } else if (password.length < 8  && checkAlphanumberic(password) == false){
            errorText = "Password must be at least 8 characters long and alphanumeric";

        } else if (password !== confirmpassword){
            errorText = "Password doesn't match";
            
        } else {
            errorText = "Matched!";
        }

        
        if(errorText != ""){
            errorTextElement.innerHTML = errorText;

        }else{
            errorTextElement.innerHTML = "Matched!";
        }

        function checkAlphanumberic(password){
            let checkNumber = false;
            let checkLetter = false;
            let checkExpectLetterAndNumber = false;
            for(let i = 0; i < password.length; i++){
                let karakter = password[i];
                if(isLetter(karakter)){
                    checkLetter = true;
                }else if(isNumber(karakter)){
                    checkNumber = true;
                }else{
                    checkExpectLetterAndNumber = true;
                }
            }
        
        
            if(checkExpectLetterAndNumber == true){
                return false;

            }else if(checkLetter == true && checkNumber == true){
                return true;
            
            }else{
                return false;
            }
        }

        function isLetter(char){
            return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
        }

        function isNumber(char){
            return char >= '0' && char <= '9';
        }
    }
})
