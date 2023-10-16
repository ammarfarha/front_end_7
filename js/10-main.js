// let x = document.getElementById("info");

// x.innerHTML  = "window inner Height: " + window.innerHeight;
// x.innerHTML += "<br>window inner Width: " + window.innerWidth;
// x.innerHTML += "<hr><br>Screen inner Height: " + screen.height;
// x.innerHTML += "<br>Screen inner Width: " + screen.width;


// window.alert("Hello");
// let y = window.prompt("Enter the age:");
// x.innerHTML += "<hr><br> age: " + y;
// let z = window.confirm("Are you sure?:");
// x.innerHTML += "<hr><br> age: " + z;
// console.log(window.location);
//window.location.href = "https://google.com";

// function f(){
//     x.innerHTML += "<hr> HHHHHHHHHH";
// }
// window.setInterval(f, 2000);



// function startTime() {
//   const today = new Date();
//   let h = today.getHours();
//   let m = today.getMinutes();
//   let s = today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }
// setInterval(startTime, 1000);
// console.log(window);

// function change(){
//     document.getElementById("info").style.color = "blue";
//     document.getElementById("info").style.border = "1px solid black";
//     document.getElementById("info").style.backgroundColor = "red";
// }

console.log(document.getElementById("info").classList.add("f"));
document.getElementById("info").tagName;