var registrationArray = [];
function saveRegistrationDataFun() {
  //Retrieving the data from html file

  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let mob = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  //Validation Code

  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (fname == "" || lname == "" || mob == "" || email == "" || pass == "") {
    alert("please fill all details properly...");
    return;
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter a valid e-mail address");
    return;
  } else if (mob.length > 10 || mob.length < 10) {
    alert("Enter Valid Mobile Number");
    return;
  } else if (pass.length < 5) {
    alert("Use atleast five letters");
    return;
  }

  //Retrieving data are converted into JS OBJECT
  let objRegistration = {
    fname: fname,
    lname: lname,
    mobile: mob,
    Email: email,
    Password: pass,
  };

  //push object data inside the array using push method
  registrationArray.push(objRegistration);
  console.log(registrationArray);

  //convert array data into JSON String using stringify method
  const cJSONString = JSON.stringify(registrationArray);
  localStorage.setItem("Registration", cJSONString);
}

//this is RESET Function which has been reset All form using form id
function resetFun() {
  let resetForm = document.getElementById("form_id");
  resetForm.reset();
}

//login button code

function loginFun() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let array = [];
  let iCnt = 0;
  let getEmailValue = JSON.parse(localStorage.getItem("Registration"));

  getEmailValue.forEach((element) => {
    array.push(element.Email);
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] == email) {
      iCnt++;
    }
  }

  if (iCnt > 0) {
    alert("Login Successfully...");
  } else {
    alert("Invalid Username or Password");
  }
}
