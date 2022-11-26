var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["contact"] = document.getElementById("contact").value;
    var record = JSON.stringify(formData);
    localStorage.setItem(formData.email, record);
    // window.localStorage.setItem(formData, JSON.stringify(formData));
    return formData;
}


var data = {
    fullName,
    email,
    contact,
};
var arrayData = [];
arrayData.push(data);

function insertNewRecord(data) {
    var table = document.getElementById("contactList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.contact;
    cell3 = newRow.insertCell(3);
    // cell4.innerHTML = data.city;
    // cell4 = newRow.insertCell(4);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contact").value = "";

    selectedRow = null;
}

function onEdit(td) {
    if (confirm('do you want edit this record ?')) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
        document.getElementById("email").value = selectedRow.cells[1].innerHTML;
        document.getElementById("contact").value = selectedRow.cells[2].innerHTML;

    }
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.contact;

}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("contactList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

