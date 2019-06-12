(function(){
  var $next = $('.next');
  var $sourceContainer = $('.page-1');
  var $targetContainer = $('.page-2');
  var init = function () {
    $next.on("click", function(){
      $sourceContainer.addClass('addAnimation1');
      setTimeout(function () {
        $targetContainer.addClass('addAnimation2');
      }, 500);
    });
  }
  init();
})();
