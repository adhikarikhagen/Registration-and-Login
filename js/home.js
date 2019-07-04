let user = document.getElementById('user');
let out = document.getElementById('logout');

let logger = localStorage.getItem('current_user');
user.innerHTML = logger;

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
li.innerHTML = `  ${logger}<button type="button"class="btn btn-sm" data-toggle="modal" data-target="#myModal">EDIT</button>
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

// inputTxt.value = r.name;

document.getElementById('enter_name').addEventListener('click', () => {});

function userID() {
    let len = localStorage.length;
    console.log(len);
    for (i = 1; i < len; i++) {
        let datas = localStorage.getItem('data' + i);
        console.log(datas);
        console.log(datas.name);
    }

    let x = localStorage.getItem('data' + 1);
    let t = JSON.parse(x);
    console.log(t.name);
}

userID();