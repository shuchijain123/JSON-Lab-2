

var request = new XMLHttpRequest();

var url='https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD';
request.open("GET", "url",true);
var result = null;


request.onreadystatechange=function () {



    if ((request.status==200) && (request.readyState==4)){
      // text = request.responseText;

            var json = JSON.parse(request.responseText);
            console.log(json);

            var movies = "Golden Gate Bridge:<br/>";

            for (idx in json.data){
             var movie=json.data[idx]
              console.log(movie)

              if (movie[10]=="Golden Gate Bridge")  {

                  movies+=movie[8]+ "made in "+movie[9] + " and produced by " +movie[13]+"<br/>";
              }

            }

           result = document.getElementById("result").innerHTML+=movies;
    }


             };





request.open("GET", url);
request.send();
