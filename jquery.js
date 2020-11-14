
   let mainImg = document.getElementById("me-small-img");
   let fakeImg = document.getElementById("about2-fake");
   let x = document.getElementsByClassName("close");
   mainImg.onclick = function(){
       fakeImg.style.display ="block";
   }
   x[0].onclick = function(){
    fakeImg.style.display ="none";
}
//hide and show image betwen image real and image fake 

function love(){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Love !",
    });
    }
    //open model when you click 
    //thank you so much because you're being here ! I'm Duyet
    

   