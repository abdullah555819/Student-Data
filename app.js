var stu = document.getElementById("stu")
var table = document.createElement("table")
var table_head = document.createElement("thead")
var table_head_row = document.createElement("tr");

table_head_row.innerHTML = `<th>student name</th><th>Father name</th><th>Student age</th><th>Roll No</th>
<th>Student email</th>
    <th colspan="2"> Action</th>`;
table.appendChild(table_head)
table_head.appendChild(table_head_row)
var tbody = document.createElement("tbody");

table.appendChild(tbody)

stu.parentNode.appendChild(table);

stu.addEventListener("click" , function()
{
    var getData = JSON.parse(localStorage.getItem("allstudentData")) || [];
    
    
    var studentData  = {
        studentName : prompt("enter a student name"),
        fatherName : prompt("enter a father name "),
        age : prompt("enter a student age"),
        Email : prompt("enter a student email"),
        rollno : Math.round(Math.random()*321)
        
    }

    getData.push(studentData)
    localStorage.setItem("allstudentData" , JSON.stringify(getData))
    tbody.innerHTML = ""
    for(var i = 0; i < getData.length ; i++){
   var body_row = document.createElement("tr")
    body_row.innerHTML = `<td>${getData[i].studentName}</td>
    <td>${getData[i].fatherName}</td>
    <td>${getData[i].age}</td>
    <td>${getData[i].rollno}</td>
    <td>${getData[i].Email}</td>
    <td>Edit</td>
    <td>delete</td>`;
    tbody.appendChild(body_row)

    }
}
)