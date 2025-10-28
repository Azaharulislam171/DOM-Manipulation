document.getElementById("taskname1").innerHTML="Complete the project documentation";
// what is the difference between Document and document in DOM

// In the Document Object Model (DOM), "Document" refers to the interface that represents the entire HTML or XML document. It is a global object that provides methods and properties to interact with the content of the document, such as creating elements, accessing nodes, and manipulating the structure of the document.

document.getElementById("compl1").innerHTML="Remove";
document.getElementById("taskname2").innerHTML="Review code for bugs";

// i declared a variable and added something to print to the console
let task=document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");

document.getElementById("compl1").addEventListener("click",function(){
    document.getElementById("taskname2").style.textDecoration="line-through";
    document.getElementById("taskname1").style.textDecoration="line-through";
});


document.getElementById("addTask").addEventListener("click", function () {
    event.preventDefault(); 
    let newTask = document.getElementById("new-task").value; // Fixed typo
    console.log(newTask);
    document.getElementById("taskname3").innerHTML = newTask;
});
