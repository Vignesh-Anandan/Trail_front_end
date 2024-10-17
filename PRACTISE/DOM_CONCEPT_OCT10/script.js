var myPara= document.createElement("p");    // Create a <p> element
var myText = document.createTextNode("text added using JS"); 
// Create a text node that has the text for <p>
myPara.appendChild(myText);   // Append the text to <p>
document.body.appendChild(myPara); // Append <p> to <body>