$(".btn").on('click',function(){
    var idx = $(this).index();
    $(".btn").removeClass("on");
      for(var i=0; i<=idx; i++){
         $(".btn").eq(i).addClass("on");
    }
  });