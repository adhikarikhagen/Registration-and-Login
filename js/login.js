let login = document.getElementById('login_btn');
let email = document.getElementById('email');
let pass = document.getElementById('password');
let register = document.getElementById('register');

function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}

function decrypt(message = '', key = '') {
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}
login.addEventListener('click', () => {
    let len = localObjLength();
    for (i = 0; i < len; i++) {
        let user = localStorage.getItem('data' + i);
        let userdata = JSON.parse(user);
        if (email.value == userdata.email) {
            console.log('email match');
            let localpass = decrypt(userdata.password);
            if (pass.value == localpass) {
                console.log('password match');
                let value = i;
                localStorage.setItem('current_user', value);
                document.location = './home.html';
            }
        } else {
            console.log('data' + i);
            console.log('password no match');
        }
    }
});
register.addEventListener('click', () => {
    document.location = './register.html';
});
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

function localObjLength() {
    let len = localStorage.length;
    let counter = 0;
    if (len != 0) {
        let re = /^data[0-9]*$/;
        for (i = 0; i <= len; i++) {
            let userkey = localStorage.key(i);
            if (re.test(userkey)) {
                counter = counter + 1;
                console.log('match found');
            } else {
                console.log('notmatched');
            }
        }
    }
    return counter;
}