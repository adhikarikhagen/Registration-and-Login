let user = document.getElementById('user');
let out = document.getElementById('logout');

let logger = localStorage.getItem('current_user');
let userObj = localStorage.getItem('data' + logger);
let userInfo = JSON.parse(userObj);
out.addEventListener('click', () => {
    localStorage.removeItem('current_user');
    document.location = './index.html';
});
let z = localStorage.length;
let i = 1;
z--;
let u = localStorage.getItem('data' + z);
let r = JSON.parse(u);
let li = document.createElement('li');
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
li.innerHTML = `  ${
   userInfo.name
}<button type="button"class="btn btn-sm" data-toggle="modal" data-target="#myModal">EDIT</button>
<div class="modal fade " id="myModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">MODAL TITLE</h4>
      </div>
      <div class="modal-body">
        <input type='text' id="input_btn"/>
        <button id='enter_name'>Enter</button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
// console.log(r.name);
// li1.innerHTML = `  ${
//    r.lname
// // }<button type="button"class="btn btn-sm" data-toggle="modal" data-target="#myModal">EDIT</button>
// //  <div class="modal fade " id="myModal" role="dialog">
// //    <div class="modal-dialog">
// //      <div class="modal-content">
// //        <div class="modal-header">
// //          <button type="button" class="close" data-dismiss="modal">&times;</button>
// //          <h4 class="modal-title">MODAL TITLE</h4>
// //        </div>
// //        <div class="modal-body">
// //          <input type='text' id="input_btn"/>
// //        </div>
// //        <div class="modal-footer">
// //          <button type="button" class="btn" data-dismiss="modal">Close</button>
// //        </div>
// //      </div>
// //    </div>
// //  </div>`;
document.getElementById('fname').appendChild(li);

let inputTxt = document.getElementById('input_btn');
inputTxt.style.color = 'black';
inputTxt.style.paddingRight = '100px';

inputTxt.value = userInfo.name;

document.getElementById('enter_name').addEventListener('click', () => {
    let object1 = {
        name: document.getElementById('input_btn').value,
        lname: userInfo.lname,
        email: userInfo.email,
        phone: userInfo.phone,
        password: userInfo.password,
    };
    let obj = JSON.stringify(object1);
    localStorage.setItem('data' + logger, obj);
    location.reload();
});
document.getElementById('remove').addEventListener('click', () => {
    removeLocalObj(logger);
    localStorage.removeItem('current_user');
    document.location = './index.html';
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

            localStorage.setItem('data' + i, x);
        }

        localStorage.removeItem('data' + len1);
    }
}