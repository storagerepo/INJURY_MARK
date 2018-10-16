

$(document).ready(function(){
  $("#introVid").on(
    "timeupdate", 
    function(event){
      onTrackedVideoFrame(this.currentTime);
    });
});

function onTrackedVideoFrame(currentTime){
    if(currentTime>5 && currentTime < 10)
    {
        $("#no1_feat").removeClass("feat");
        $("#no1_feat").css({
            "background-color": "skyblue", 
            "font-size": "120%",
            "border-radius": "5px",
            "padding": "5px"
        });
       $(".feat").css({
            "background-color": "inherit", 
            "font-size": "inherit",
            "padding": "inherit"
        });
        $("#no1_feat").addClass("feat");
    }
    else if(currentTime>10 && currentTime<15) {
        $("#no2_feat").removeClass("feat");
        $("#no2_feat").css({
            "background-color": "skyblue", 
            "font-size": "120%",
            "border-radius": "5px",
            "padding": "5px"
        });
        $(".feat").css({
            "background-color": "inherit", 
            "font-size": "inherit",
            "padding": "inherit"
        });
        $("#no2_feat").addClass("feat");
    }        
    
    else {
        $(".feat").css({
            "background-color": "inherit", 
            "font-size": "inherit",
            "padding": "inherit"
        });        
    }
}
