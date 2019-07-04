let user = document.getElementById('user');
let out = document.getElementById('logout');
let logger = document.getElementById('current_user');
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
li.innerHTML = `  ${
   r.name
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
console.log(r.name);
li1.innerHTML = `  ${
   r.lname
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
       </div>
       <div class="modal-footer">
         <button type="button" class="btn" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>`;
li2.innerHTML = `  ${
   r.email
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
       </div>
       <div class="modal-footer">
         <button type="button" class="btn" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>`;
li3.innerHTML = `  ${
   r.password
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
       </div>
       <div class="modal-footer">
         <button type="button" class="btn" data-dismiss="modal">Close</button>
       </div>
     </div>
   </div>
 </div>`;

document.getElementById('fname').appendChild(li);
document.getElementById('lname').appendChild(li1);
document.getElementById('email').appendChild(li2);
document.getElementById('phone').appendChild(li3);
document.getElementById('password').appendChild(li4);

let inputTxt = document.getElementById('input_btn');
inputTxt.style.color = 'black';
inputTxt.style.paddingRight = '100px';

inputTxt.value = r.name;

document.getElementById('enter_name').addEventListener('click', () => {});