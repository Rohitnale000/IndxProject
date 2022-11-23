function myFun(){

    //Retrieving the data from html file
    
    let fname= document.getElementById("firstname").value
    let lname= document.getElementById("lastname").value
    let mob = document.getElementById("mobile").value
    let email = document.getElementById("email").value
    let pass= document.getElementById("password").value
    

    //Save Data in Local Storage

    let first = localStorage.setItem(fname,"fname");
    let last = localStorage.setItem(lname,"lname");
    let mbl =localStorage.setItem(mob,"mob");
    let eml = localStorage.setItem(email,"email");
    let pw = localStorage.setItem(pass,"pass");

   

    let obj = {
                Name:fname,
                LastName:lname,
                Mobile:mob,
                email:email,
                Password:pass
              }

             let myJSON = JSON.stringify(obj);
             alert(myJSON);
   
}

function resetFun(){
   let resetForm =  document.getElementById("form_id");
    resetForm.reset();
}