let task = document.getElementById('task');
let lenList = localObjLength();
for (i = 0; i < lenList; i++) {
    let li = document.createElement('li');
    let ourTask = localStorage.getItem('data' + i);
    let parsedTask = JSON.parse(ourTask);
    let j = i + '1';
    li.innerHTML = `
    <span id='status${i}'><button class='btn-danger'>
   ${parsedTask.status}</button></span><span id='num${i}'>${i}</span>
    <span id='name${i}'>${parsedTask.name}</span><span id='lname${i}'>${
      parsedTask.lastname
   }</span>
   <span id='email${i}'>${parsedTask.email}</span>
   <span id='phone${i}'>${parsedTask.phone}</span>
  
   <!-- Button trigger modal -->
   <span class='edit_delete'> <button type="button" class="btn btn-sm btn" data-toggle="modal" data-target="#exampleModal${i}">
   EDIT
 </button>
 <!-- Button trigger modal -->
 <button type="button" id='del${i}'class="btn pl-1 btn-sm " data-toggle="modal" data-target="#exampleModal${i}1">
  DELETE
 </button></span>
     <!-- Modal -->
     <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">Task</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
  <div>           <span>First Name</span><input type='text'id='edit_task_name${i}' value='${
      parsedTask.name
   }'/></div>
   <span>First Name</span><input type='text'id='edit_task_lname${i}' value='${
      parsedTask.lastname
   }'/>
   <span>First Name</span><input type='text'id='edit_task_email${i}' value='${
      parsedTask.email
   }'/>
   <span>First Name</span><input type='text'id='edit_task_phone${i}' value='${
      parsedTask.phone
   }'/>
            
             
           </div>
           <div class="modal-footer text-right">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
             <button type="button" class="btn btn-success" id="save_changes${i}">Save changes</button>
           </div>
         </div>
       </div>
     </div>
     
     <!-- Modal -->
     <div class="modal fade" id="exampleModal${i}1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-sm" role="document">
         <div class="modal-content">
         <div class="modal-header">
         <h3 class="ml-md-1">Are You Sure</h3>
       </div>
         <div class="modal-footer">
           <button type="button" id='yes${i}' class="btn btn-secondary" data-dismiss="modal">YES</button>
           <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
           </div>
       </div>
     </div>`;

    document.getElementById('ulist').appendChild(li);
}

for (i = 0; i < lenList; i++) {
    document.getElementById('num' + i).style.borderRight = '1px solid black';
    document.getElementById('num' + i).style.paddingRight = '10px';
    document.getElementById('num' + i).style.marginRight = '10px';
    document.getElementById('num' + i).style.paddingLeft = '10px';
    document.getElementById('del' + i).style.borderLeft = '1px solid white';
    document.getElementById('name' + i).style.borderRight = '1px solid black';
    document.getElementById('name' + i).style.paddingRight = '10px';
    document.getElementById('name' + i).style.marginLeft = '10px';
    document.getElementById('lname' + i).style.borderRight = '1px solid black';
    document.getElementById('lname' + i).style.paddingRight = '10px';
    document.getElementById('email' + i).style.borderRight = '1px solid black';
    document.getElementById('email' + i).style.paddingRight = '10px';
    document.getElementById('phone' + i).style.borderRight = '1px solid black';
    document.getElementById('phone' + i).style.paddingRight = '10px';
}
//Approving individual task
for (i = 0; i < lenList; i++) {
    let j = i;
    let l = i;

    let input = document.getElementById('status' + i);
    input.addEventListener('click', () => {
        let user = localStorage.getItem('data' + l);
        let userdata = JSON.parse(user);
        let localpass = decrypt(userdata.password);
        if (userdata.status == 'approved') {
            console.log('approved');
            let obj = {
                name: userdata.name,
                lastname: userdata.lastname,
                email: userdata.email,
                phone: userdata.phone,
                password: localpass,
                role: 'user',
                status: 'not approved',
            };
            localStorage.setItem('data' + j, JSON.stringify(obj));
            location.reload();
        } else if (userdata.status == 'not approved') {
            console.log('not approved');

            let obj = {
                name: userdata.name,
                lastname: userdata.lastname,
                email: userdata.email,
                phone: userdata.phone,
                password: localpass,
                role: 'user',
                status: 'approved',
            };
            localStorage.setItem('data' + j, JSON.stringify(obj));
            location.reload();
        }
    });
}
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
//Editing Individual Task
for (i = 0; i < lenList; i++) {
    let j = i;
    let k = i;
    let l = i;
    console.log('helloedit' + i);
    let input = document.getElementById('save_changes' + i);
    input.addEventListener('click', () => {
        let taskFirstName = document.getElementById('edit_task_name' + k).value;
        let taskLastName = document.getElementById('edit_task_lname' + k).value;
        let taskEmail = document.getElementById('edit_task_email' + k).value;
        let taskPhone = document.getElementById('edit_task_phone' + k).value;
        let user = localStorage.getItem('data' + l);
        let userdata = JSON.parse(user);
        let localpass = decrypt(userdata.password);
        let obj = {
            name: taskFirstName,
            lastname: taskLastName,
            email: taskEmail,
            phone: taskPhone,
            password: localpass,
        };
        localStorage.setItem('data' + j, JSON.stringify(obj));
        location.reload();
    });
}
//Deleting Individual Task
for (i = 0; i < lenList; i++) {
    let j = i;
    document.getElementById('yes' + j).addEventListener('click', () => {
        let k = j;
        let l = j;
        let role = lenList - 1;
        for (l; l <= role; l++) {
            let m = l;
            n = m + 1;
            let taskItem = localStorage.getItem('data' + n);
            let taskItem1 = JSON.parse(taskItem);
            localStorage.setItem('data' + m, JSON.stringify(taskItem1));
        }
        localStorage.removeItem('data' + role);
        location.reload();
    });
}

//Finding length of our local object
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