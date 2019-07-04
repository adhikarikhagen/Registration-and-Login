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
    let len = localStorage.length;
    for (i = 1; i < len; i++) {
        let user = localStorage.getItem('data' + i);
        let userdata = JSON.parse(user);
        if (email.value == userdata.email) {
            let localpass = decrypt(userdata.password);
            if (pass.value == localpass) {
                let loggedperson = userdata.name;
                localStorage.setItem('current_user', loggedperson);
                document.location = './home.html';
            }
        }
    }
});
register.addEventListener('click', () => {
    document.location = './register.html';
});