// function f(){
//     var request = new XMLHttpRequest();
//     request.open("GET", "https://my-json-server.typicode.com/typicode/demo/db");
//     request.send(); 
//     request.onreadystatechange = function () {
//         let resp = this.responseText;
//         let json_resp = JSON.parse(resp);
//         document.getElementById("d1").innerHTML = json_resp.posts[0].title;
//         console.log(json_resp);
//         let comments = json_resp.comments;
//         document.getElementById("d1").innerHTML += "<ul>";
//         for(let i=0; i < comments.length; i++){    
//             if(comments[i].postId == json_resp.posts[0].id){        
//                 document.getElementById("d1").innerHTML += "<li>" + comments[i].body + "</li>";
//             }
//         }
//     }
// }


$(document).ready(function(){
    // $("#b1").on('click', function(){
        $.get("http://api.weatherapi.com/v1/current.json?key=69863d237a644144bfe112940230907&q=Damascus&aqi=no", function(temp){
        // $("#d1").html(temp.current.temp_c);
        $("#img1").attr("src",temp.current.condition.icon);
        $('.card-title').html(temp.location.name + " - " + temp.location.country);
        $('.card-text').html("in Cele: " + temp.current.temp_c + "<br>in Feh: " + temp.current.temp_f);
        console.log(temp);
        });
    // });    
});