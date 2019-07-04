let submit = document.getElementById('submit_btn');
let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let confPassword = document.getElementById('confpassword');

let firstNameFilled = 0;
let lastNameFilled = 0;
let phoneFilled = 0;
let emailFilled = 0;
let passwordFilled = 0;
let acceptFilled = 0;

firstName.addEventListener('keyup', checkName);
lastName.addEventListener('keyup', checkLastName);
email.addEventListener('keyup', checkEmail);
phone.addEventListener('keyup', checkPhone);
confPassword.addEventListener('keyup', checkPassword);
document.getElementById('accept').addEventListener('click', checkAccept);

function checkAll() {
    if (
        firstNameFilled &&
        lastNameFilled &&
        phoneFilled &&
        emailFilled &&
        passwordFilled &&
        acceptFilled
    ) {
        submit.disabled = false;
        return true;
    } else {
        submit.disabled = true;
        return false;
    }
}

function checkName() {
    let re = /^[a-zA-z]{2,30}$/;
    if (re.test(firstName.value)) {
        document.getElementById('label_id').innerHTML =
            '<i class="icons-check-circle"></i>';
        document.getElementById('label_id').style.display = 'none';
        firstName.style.backgroundColor = 'rgba(250, 149, 149, 0.315)';

        firstNameFilled = 1;
    } else {
        document.getElementById('label_id').innerHTML =
            '<i class="icons-cancel"></i>';
        document.getElementById('label_id').style.display = 'inline-block';
        document.getElementById('label_id').style.color = 'black';
        firstName.style.backgroundColor = 'rgb(240, 131, 131)';
        firstNameFilled = 0;
    }
    let x = checkAll();
    if (x) {
        submit.style.backgroundColor = 'turquoise';
    } else {
        submit.style.backgroundColor = 'rgb(204, 109, 109)';
    }
}

function checkLastName() {
    let re1 = /^[a-zA-z]{2,30}$/;
    if (re1.test(lastName.value)) {
        document.getElementById('label1_id').innerHTML =
            '<i class="icons-check-circle"></i>';
        document.getElementById('label1_id').style.display = 'none';

        lastNameFilled = 1;
    } else {
        document.getElementById('label1_id').innerHTML =
            '<i class="icons-cancel"></i>';
        document.getElementById('label1_id').style.color = 'black';
        lastName.style.backgroundColor = 'rgb(240, 131, 131)';
        lastNameFilled = 0;
    }
    let x = checkAll();
    if (x) {
        submit.style.backgroundColor = 'turquoise';
    } else {
        submit.style.backgroundColor = 'rgb(204, 109, 109)';
    }
}

function checkEmail() {
    let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(email.value)) {
        document.getElementById('label2_id').innerHTML =
            '<i class="icons-check-circle"></i>';
        document.getElementById('label2_id').style.display = 'none';

        emailFilled = 1;
    } else {
        document.getElementById('label2_id').innerHTML =
            '<i class="icons-cancel"></i>';
        document.getElementById('label2_id').style.display = 'inline-block';
        document.getElementById('label2_id').style.color = 'black';
        email.style.backgroundColor = 'rgb(240, 131, 131)';
        emailFilled = 0;
    }
    let x = checkAll();
    if (x) {
        submit.style.backgroundColor = 'turquoise';
    } else {
        submit.style.backgroundColor = 'rgb(204, 109, 109)';
    }
}

function checkPhone() {
    let re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (re.test(phone.value)) {
        document.getElementById('label3_id').innerHTML =
            '<i class="icons-check-circle"></i>';
        document.getElementById('label3_id').style.display = 'none';

        phoneFilled = 1;
    } else {
        document.getElementById('label3_id').innerHTML =
            '<i class="icons-cancel"></i>';
        document.getElementById('label3_id').style.color = 'black';
        document.getElementById('label3_id').style.display = 'inline-block';
        phone.style.backgroundColor = 'rgb(240, 131, 131)';
        phoneFilled = 0;
    }
    let x = checkAll();
    if (x) {
        submit.style.backgroundColor = 'turquoise';
    } else {
        submit.style.backgroundColor = 'rgb(204, 109, 109)';
    }
}
let view = document.getElementById('eye_con1');
view.addEventListener('click', () => {
    console.log(password.type);
    let toggler = document.getElementById('icon1');
    if (password.type == 'password') {
        password.type = 'text';

        toggler.classList.toggle('icons-eye');
    } else {
        password.type = 'password';
        toggler.classList.toggle('icons-eye');
    }
});
let view1 = document.getElementById('eye_con2');
view1.addEventListener('click', () => {
    console.log(confpassword.type);
    let toggler = document.getElementById('icon2');
    if (confpassword.type == 'password') {
        confpassword.type = 'text';

        toggler.classList.toggle('icons-eye');
    } else {
        confpassword.type = 'password';
        toggler.classList.toggle('icons-eye');
    }
});

function checkPassword() {
    if (password.value !== confPassword.value) {
        document.getElementById('label6_id').innerHTML = 'Password do not match';
        document.getElementById('label6_id').style.color = 'black';
        document.getElementById('label6_id').style.margin = '10px';
        confPassword.style.backgroundColor = 'rgb(240, 131, 131)';
        passwordFilled = 0;
    } else {
        passwordFilled = 1;
    }
    let x = checkAll();
    if (x) {
        submit.style.backgroundColor = 'turquoise';
    } else {
        submit.style.backgroundColor = 'rgb(204, 109, 109)';
    }
}

let count = 0;

function checkAccept() {
    let acceptTerms = document.getElementById('accept');
    if (acceptTerms.value == 'on' && count % 2 == 0) {
        count++;
        document.getElementById('terms').style.color = 'black';
        acceptFilled = 1;
        let x = checkAll();
        if (x) {
            submit.style.backgroundColor = 'turquoise';
        } else {
            submit.style.backgroundColor = 'rgb(204, 109, 109)';
        }
    } else {
        document.getElementById('terms').style.color = 'black';
        count++;
        acceptFilled = 0;
        let x = checkAll();
        if (x) {
            submit.style.backgroundColor = 'turquoise';
        } else {
            submit.style.backgroundColor = 'rgb(204, 109, 109)';
        }
    }
}

submit.addEventListener('click', () => {
    x = checkAll();

    if (x) {
        let len = localStorage.length;
        let pass = encrypt(confPassword.value);
        let objuser = {
            name: firstName.value,
            lastname: lastName.value,
            email: email.value,
            phone: phone.value,
            password: pass,
        };

        localStorage.setItem('data' + len, JSON.stringify(objuser));
        document.location = './login.html';
    }
});

let login = document.getElementById('login');
login.addEventListener('click', () => {
    document.location = './login.html';
});

// Encrypt Decrypt
function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = '') {
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}