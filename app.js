var stu = document.getElementById("stu");
var table = document.createElement("table");
var table_head = document.createElement("thead");
var table_head_row = document.createElement("tr");
var studentName = document.getElementById("name");
var fatherName = document.getElementById("fname");
var email = document.getElementById("email");
var age = document.getElementById("age");

table_head_row.innerHTML = `<th>student name</th><th>Father name</th><th>Student age</th><th>Roll No</th>
<th>Student email</th>
    <th colspan="2"> Action</th>`;
table.appendChild(table_head);
table_head.appendChild(table_head_row);
var tbody = document.createElement("tbody");

table.appendChild(tbody);

stu.parentNode.appendChild(table);

stu.addEventListener("click", function () {
  var getData = JSON.parse(localStorage.getItem("allstudentData")) || [];

  var studentData = {
    studentName: studentName.value,
    fatherName: fatherName.value,
    age: age.value,
    email: email.value,
    rollno: Math.round(Math.random() * 321),
  };

  getData.push(studentData);
  localStorage.setItem("allstudentData", JSON.stringify(getData));
  tbody.innerHTML = "";
  for (var i = 0; i < getData.length; i++) {
    var body_row = document.createElement("tr");
    body_row.innerHTML = `<td>${getData[i].studentName}</td>
    <td>${getData[i].fatherName}</td>
    <td>${getData[i].age}</td>
    <td>${getData[i].rollno}</td>
    <td>${getData[i].email}</td>
    <td>Edit</td>
    <td onclick = "delete1(${i})";>delete</td>`;
    tbody.appendChild(body_row);
  }
});
const  del = (a) =>{
    if(a.target.innerHTML == "delete"){
    tbody.removeChild(a.target.parentElement)

}
}
tbody.addEventListener("click" , del)

var arr = [];
var get = localStorage.getItem("allstudentData");
if (get) {
  arr = JSON.parse(get);
}



function delete1(e) {
  console.log(e);
  console.log(arr);
  arr.splice(e, 1);
  localStorage.setItem("allstudentData", JSON.stringify(arr));
  event.target.parentNode.remove();
}
