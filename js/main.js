$(document).ready(function() {
  const arr = document.querySelectorAll("#commingSoon .slick-slide");
  console.log("arr", arr);

  arr.forEach(function(item) {

    item.addEventListener("click", function() {
      console.log("item", item.getAttribute("data-slick-index"));

      // Reset row have opacity: 0; height: 0

      document.querySelector(".slide-0").style.opacity = "0";
      document.querySelector(".slide-0").style.height = "0";

      document.querySelector(".slide-1").style.opacity = "0";
      document.querySelector(".slide-1").style.height = "0";

      document.querySelector(".slide-2").style.opacity = "0";
      document.querySelector(".slide-2").style.height = "0";

      if (item.getAttribute("data-slick-index") == "0") {
        document.querySelector(".slide-0").style.opacity = "1";
        document.querySelector(".slide-0").style.height = "auto";
      } else if (item.getAttribute("data-slick-index") == "1") {
        document.querySelector(".slide-1").style.opacity = "1";
        document.querySelector(".slide-1").style.height = "auto";
      } else {
        document.querySelector(".slide-2").style.opacity = "1";
        document.querySelector(".slide-2").style.height = "auto";
      }
    });
  });
});