var jq = $.noConflict();
jq(document).ready(function() {
    jq(".hamburger").click(function(){
      jq(".first").addClass("first-active");
      jq(".second").addClass("second-active");
      jq(".third").addClass("third-active");
      jq(".hamburger").addClass("hidden");
    })
    jq(".close-btn").click(function() {
      jq(".first").removeClass("first-active");
      jq(".second").removeClass("second-active");
      jq(".third").removeClass("third-active");
      jq(".hamburger").removeClass("hidden");
    })
})






















