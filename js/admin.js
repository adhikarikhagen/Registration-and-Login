let user = document.getElementById('user');
let out = document.getElementById('logout');

let loggedPerson = localStorage.getItem('current_user');
let userObj = localStorage.getItem('data' + loggedPerson);
let userInfo = JSON.parse(userObj);
localpass = decrypt(userInfo.password);
//AES

//Logout
out.addEventListener('click', () => {
    localStorage.removeItem('current_user');
    document.location = './index.html';
});
//AES Encryption
function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
//AES Decryption
function decrypt(message = '', key = '') {
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
}
//Creating list element for Name
let li = document.createElement('li');
li.innerHTML = `  ${
   userInfo.name
}<button type="button"class="btn edit_btn edit_btn btn-sm btn-default  btn-default " data-toggle="modal" data-target="#myModal">EDIT</button>
<div class="modal fade " id="myModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">EDIT YOUR NAME</h4>
      </div>
      <div class="modal-body">
        <input type='text' id="input_name"/>
        <button id='enter_name_btn'>Enter</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

document.getElementById('fname').appendChild(li);

// Styling list element for Name
let inputTxt = document.getElementById('input_name');
inputTxt.style.color = 'black';
inputTxt.style.paddingRight = '100px';

// Setting Placeholder
inputTxt.value = userInfo.name;

//Editing Name of User
document.getElementById('enter_name_btn').addEventListener('click', () => {
    let object1 = {
        name: document.getElementById('input_name').value,
        lastname: userInfo.lastname,
        email: userInfo.email,
        phone: userInfo.phone,
        password: localpass,
    };
    let obj = JSON.stringify(object1);
    localStorage.setItem('data' + loggedPerson, obj);
    location.reload();
});

//Creating list element for Last Name
let li1 = document.createElement('li');
li1.innerHTML = `  ${
   userInfo.lastname
}<button type="button"class="btn edit_btn btn-sm btn-default " data-toggle="modal" data-target="#myModal2">EDIT</button>
<div class="modal fade " id="myModal2" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">EDIT YOUR LAST NAME</h4>
      </div>
      <div class="modal-body">
        <input type='text' id="input_lastname"/>
        <button id='enter_lastname_btn'>Enter</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

document.getElementById('lname').appendChild(li1);

// Styling list element for last name
let inputLastNameTxt = document.getElementById('input_lastname');
inputLastNameTxt.style.color = 'black';
inputLastNameTxt.style.paddingRight = '100px';

// Setting Placeholder
inputLastNameTxt.value = userInfo.lastname;

//Editing last Name of User
document.getElementById('enter_lastname_btn').addEventListener('click', () => {
    let object1 = {
        name: userInfo.name,
        lastname: document.getElementById('input_lastname').value,
        email: userInfo.email,
        phone: userInfo.phone,
        password: localpass,
    };
    let obj = JSON.stringify(object1);
    localStorage.setItem('data' + loggedPerson, obj);
    location.reload();
});

// Creating Element for phone
let li2 = document.createElement('li');
li2.innerHTML = `  ${
   userInfo.phone
}<button type="button"class="btn edit_btn btn-sm btn-default " data-toggle="modal" data-target="#myModal3">EDIT</button>
<div class="modal fade " id="myModal3" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">EDIT YOUR PHONE NUMBER</h4>
      </div>
      <div class="modal-body">
        <input type='text' id="input_phone"/>
        <button id='enter_phone_btn'>Enter</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

document.getElementById('phone').appendChild(li2);

// Styling list element for phone
let inputPhoneTxt = document.getElementById('input_phone');
inputPhoneTxt.style.color = 'black';
inputPhoneTxt.style.paddingRight = '100px';

// Setting Placeholder
inputPhoneTxt.value = userInfo.phone;

//Editing phone of User
document.getElementById('enter_phone_btn').addEventListener('click', () => {
    let object1 = {
        name: userInfo.name,
        lastname: userInfo.lastname,
        email: userInfo.email,
        phone: document.getElementById('input_phone').value,
        password: localpass,
    };
    let obj = JSON.stringify(object1);
    localStorage.setItem('data' + loggedPerson, obj);
    location.reload();
});

// Creating Element for Email
let li3 = document.createElement('li');
li3.innerHTML = `  ${
   userInfo.email
}<button type="button"class="btn edit_btn btn-sm btn-default " data-toggle="modal" data-target="#myModal4">EDIT</button>
<div class="modal fade " id="myModal4" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">EDIT YOUR EMAIL</h4>
      </div>
      <div class="modal-body">
        <input type='text' id="input_email"/>
        <button id='enter_email_btn'>Enter</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;

document.getElementById('email').appendChild(li3);

// Styling list element for email
let inputEmailTxt = document.getElementById('input_email');
inputEmailTxt.style.color = 'black';
inputEmailTxt.style.paddingRight = '100px';

// Setting Placeholder
inputEmailTxt.value = userInfo.email;

//Editing email of User
document.getElementById('enter_email_btn').addEventListener('click', () => {
    let object1 = {
        name: userInfo.name,
        lastname: userInfo.lastname,
        email: document.getElementById('input_email').value,
        phone: userInfo.phone,
        password: localpass,
    };
    let obj = JSON.stringify(object1);
    localStorage.setItem('data' + loggedPerson, obj);
    location.reload();
});

// Removing account of user
document.getElementById('remove').addEventListener('click', () => {
    removeLocalObj(loggedPerson);
    localStorage.removeItem('current_user');
    document.location = './index.html';
});

//Find length of our local object only
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
// Remoe specified local object from local storage
function removeLocalObj(x) {
    let value = x;
    let len = localObjLength();
    let len1 = len - 1;
    if (len1 == value) {
        localStorage.removeItem('data' + x);
    } else if (value < len1) {
        for (value; value < len; value++) {
            let i = value;
            let j = i + 1;
            let x = JSON.parse(localStorage.getItem('data' + j));

            localStorage.setItem(JSON.stringify('data' + i), x);
        }
        localStorage.removeItem('data' + len1);
    }
}