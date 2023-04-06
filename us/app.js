window.addEventListener("load", (event) => {
  $(".page").click(function () {
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

  $("#doc-link").click(function() {
    window.open("https://docs.google.com/document/d/1T_iJbUmYm-h1-O9WxyaAlDdOgeMPc4pfbMj2lVYu8Go/edit?usp=sharing");
  })
});
