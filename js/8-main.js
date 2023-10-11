// x = "<h2>Hello My Dears</h2>";
// alert(x);
// document.writeln("<div style='color: red;'>" + x + "<div>");

// document.getElementById("content").innerHTML = x;
// console.log(x);

// function f(){
//     alert( 2 ** 3);
// }

// {
//     const x = "this is my x varuable";
    
// }

// document.getElementById("content").innerHTML = x;
let tab = document.getElementById("mytable");
let res = "";
for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        res += "<tr style='background-color: gray;'>";
    }
    else{
        res += "<tr style='background-color: blue; color: white;'>";
    }
    
    for(let j = 0; j <= 10; j++){
        res += "<td>" + i * j + "</td>";
        // if (i == 0 && j == 0){
        //     res += "<td>";            
        //     res += "</td>";
        // }
        // if(i ==0 && j > 0){
        //     res += "<th>";
        //     res += j;
        //     res += "</th>";
        // }
        // if(i > 0 && j == 0){
        //     res += "<th>";
        //     res += i;
        //     res += "</th>";
        // }
        // if(i > 0 && j > 0){
        //     res += "<td>";
        //     res += i + "*" + j + "=" + i * j;
        //     res += "</td>";
        // }
    }
    res += "</tr>";
}
console.log(res);
tab.innerHTML = res;











