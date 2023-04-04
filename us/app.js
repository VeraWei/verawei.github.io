window.addEventListener("load", (event) => {
  $(".page").click(function () {
    if ($(this).is(':last-child')) return false;
    $(this).removeClass("no-anim").toggleClass("flipped");
    reorder();
  });
  function reorder() {
    $(".book").each(function () {
      var pages = $(this).find(".page");
      var pages_flipped = $(this).find(".flipped");
      pages.each(function (i) {
        $(this).css("z-index", pages.length - i);
      });
      pages_flipped.each(function (i) {
        $(this).css("z-index", i + 1);
      });
    });
  }
  reorder();
});
