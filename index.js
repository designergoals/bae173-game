document.querySelector("button"),addEventListener("click",handleClick);
function handleClick(){
  var maximum=2;
  var minimum=1;
  var number = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  var album = "album"+number+".png";
  var albumname="images/"+album;
  if (album==="album1.png"){
    document.querySelector("h3").innerHTML="TEAM SPARK";
    var img2 = document.querySelector("img");
      img2.setAttribute("src",albumname);

  }
  else if (album==="album2.png") {
    document.querySelector("h3").innerHTML="TEAM TRACE";
    var img2 = document.querySelector("img");
      img2.setAttribute("src",albumname);
  }
}
