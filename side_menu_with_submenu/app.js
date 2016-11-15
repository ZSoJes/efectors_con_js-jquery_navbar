$(document).ready(function(){
  var cont = 0;

  $(".boton-menu").click(function(){
    if (cont == 0){
      $(".material-icons").text("dehaze");
      $("nav ul li").css({"border":"none"});
      $("nav").animate({ left:"-21%" });
      $(".container").animate({ padding: "0 0 0 20" });
      cont = 1;
    }
    else
    {
      $(".material-icons").text("clear");
      $("nav ul li").css({"border-bottom":"1px solid gray"});
      $("nav").animate({ left:0 });
      $(".container").animate({ padding: "0 0 0 60" });
      cont = 0;
    }
  });
});