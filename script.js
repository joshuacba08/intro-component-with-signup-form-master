const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const inputArr = [fname, lname, email, password];

/*__functions__*/

const showError = (input, message) => {
    const formControl = input.parentElement;
    input.classList.add('input-error');
    input.removeAttribute('placeholder');
    formControl.children[1].style.display ='block';
    formControl.children[2].style.display ='block';
    formControl.children[2].innerText = message;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    
    input.classList.remove('input-error');
    formControl.children[1].style.display ='none';
    formControl.children[2].style.display ='none';
}

//check required fields
const checkRequired = (inputArr) => {

    inputArr.forEach( input => {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} cannot be empty`);
        } else {
            showSuccess(input);
        }
    });
}

// Check email is valid
function checkEmail(input) {
    if(input.value.trim() !== ''){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid');
        }
    }
  }


const getFieldName = (input) => {
    let name = input.name;
    return name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))); 
}


//event listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([fname, lname, email, password]);
    checkEmail(email);

});