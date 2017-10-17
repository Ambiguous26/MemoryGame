window.onload = function() {


// <div class="card effect__EFFECT">
//   <div class="card__front">
//     <span class="card__text">front</span>
//   </div>
//   <div class="card__back">
//     <span class="card__text">back</span>
//   </div>
// </div><!-- /card -->
// 


        // Card button
        var isflipped = false;
        
   
            
        $("#card").on("click", function () {
          // remember selector and "." for spaces
          // if you want to get an attribute you can leave it as "src"
          // if you want to change the attribute you can add a , and change it to something else
          $("#card").css("opacity", 0 );


          if (isflipped) {
            $("#card").attr("src", "assets/Images/backCover.jpg");
            isflipped = false;
            
          } else {

            $("#card").attr("src", "assets/Images/ace.png");
            isflipped = true;
           



          }
          $("#card").animate({opacity:3}, 3000);
          console.log($("#card").attr("src"));
          
	    })

        $(".flip .flipper").click(function(){
        	$(this).closest(".flip").toggleClass("hover");
        	$(this).css("transform, rotate(180deg)");
        });
	
}//end of script