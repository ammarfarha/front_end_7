// functions:
// function sum(x=100){
//     let s = 0;
//     for(let i=1; i <= x; i++){
//         s += i;
//     }
//     return s;
// }
// let x = prompt("Enter A Number: ");
// document.getElementById("mydiv1").innerHTML = sum(x);

// Arrays:

// let arr = [1, 3, 8, 9, 6, 2, 12, 25, 26, 4];
// function find(list, x){
//     let res = -1;
//     for(let i = 0; i < list.length; i++){
//         if(list[i] == x){
//             res = i;
//         }
//     }
//     return res;
// }
// document.getElementById("mydiv1").innerHTML = find(arr,112);

// let divs = document.getElementsByTagName("div");
// console.log(divs);
// for(let i = 0; i < divs.length; i++){
//     divs[i].innerHTML = arr[i];
// }
// let student = {
//     "first_name" : "Ammar",
//     "last_name" : "Ahmad",
//     "age" : 25,
//     "marks" : [50, 70, 30, 90],
//     "birth_date" : {
//         "day" : 5,
//         "month" : 9,
//         "year" : 2000
//     },
//     "first_name" : "Yaser"
// }


// console.log(student);
// let d = document.getElementById("mydiv1");
// d.innerHTML = student.birth_date.day + " / ";
// d.innerHTML += student.birth_date.month + " / ";
// d.innerHTML += student.birth_date.year;




// let tmp = {
//     "posts": [
//       {
//         "id": 1,
//         "title": "Post 1"
//       },
//       {
//         "id": 2,
//         "title": "Post 2"
//       },
//       {
//         "id": 3,
//         "title": "Post 3"
//       }
//     ],
//     "comments": [
//       {
//         "id": 1,
//         "body": "some comment",
//         "postId": 1
//       },
//       {
//         "id": 2,
//         "body": "some comment",
//         "postId": 1
//       }
//     ],
//     "profile": {
//       "name": "typicode"
//     }
//   }

// console.log(tmp.posts[2].title);
// document.getElementById("mydiv1").innerHTML = tmp.posts[2].title;


class stu{
    // all line is function
    constructor(fn){
        this.first_name = fn;
        this.last_name = "Yaser";
        this.age = 20;
    }
    get_full_name(){
        return this.first_name + " " + this.last_name;
    }

    set_last_name(ln){
        this.last_name = ln;
        return this;
    }
}

let s = new stu("Ahmad");

document.getElementById("mydiv1").innerHTML = s.set_last_name("zzzzzz").get_full_name();