let hee = document.querySelector("#demo")
hee.innerText="Creating the Table"

hee.style.border = "1px solid";

let sep = document.createElement("div")
document.body.appendChild(sep)
sep.style.borderCollapse ="collapse";
sep.style.border="3px solid";
//crttable.style.border-collapse="collapse";
sep.style.textAlign="center";
//document.getElementsByTagName("td").style.borderCollapse = "collapse";

let crttable=document.createElement("table")
sep.appendChild(crttable)

//$$$$doubt about setAttribute??
//let newid = document.getElementById("crrtable")
//newid.setAttribute("class", "useborder");
//crrtable.appendChild(newid)


//crttable.style.border="3px solid";
crttable.style.borderCollapse ="collapse";
crttable.style.width="100%";
//crttable.style.textAlign="center";
//creating row1 and column heading below
let row1=document.createElement("tr")
crttable.appendChild(row1)
let origin=document.createElement("th")
row1.appendChild(origin)
//origin.style.border="3px solid";
let columnhead1=document.createElement("th")
row1.appendChild(columnhead1)
columnhead1.innerText="Column_01"
let columnhead2=document.createElement("th")
row1.appendChild(columnhead2)
columnhead2.innerText="Column_02"
let columnhead3=document.createElement("th")
row1.appendChild(columnhead3)
columnhead3.innerText="Column_03"
//creating row2  
let row2=document.createElement("tr")
crttable.appendChild(row2)
let r2c1=document.createElement("td")
row2.appendChild(r2c1)
r2c1.innerText="row1"
let r2c2=document.createElement("td")
row2.appendChild(r2c2)
let r2c3=document.createElement("td")
row2.appendChild(r2c3)
r2c3.innerText="X"
//creating row3
let row3=document.createElement("tr")
crttable.appendChild(row3)
row3.innerText="row2"
let r3c1=document.createElement("td")
row3.appendChild(r3c1)
let r3c2=document.createElement("td")
row3.appendChild(r3c2)
let r3c3=document.createElement("td")
row3.appendChild(r3c3)

// //let tdth = document.querySelectorAll("td")
// tdth.style.border[]="1px solid";

// console.log("tdth")

