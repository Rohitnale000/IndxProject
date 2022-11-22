let users = [];
      
        const addUser = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let user = {
                id: Date.now(),
                First_Name: document.getElementById('firstname').value,
                Last_Name: document.getElementById('lastname').value,
                Email: document.getElementById('email').value,
                Mobile: document.getElementById('mobile').value,
                Password: document.getElementById('password').value
            }
            users.push(user);
            document.forms[0].reset(); // to clear the form for the next entries
          

            //for display purposes only
            console.warn('added' ,  {users} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify( users, '\t', 2);

           
        }
            document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('submit').addEventListener('click', addUser);
        });