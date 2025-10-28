document.getElementById("taskname1").innerHTML="Complete the project documentation";
// what is the difference between Document and document in DOM

// In the Document Object Model (DOM), "Document" refers to the interface that represents the entire HTML or XML document. It is a global object that provides methods and properties to interact with the content of the document, such as creating elements, accessing nodes, and manipulating the structure of the document.

document.getElementById("compl1").innerHTML="Complete the project documentation";
document.getElementById("taskname2").innerHTML="Review code for bugs";

let task=document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");