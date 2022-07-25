"use strict";
$(document).ready(function () {

  const galleryFilterList = $(".gallery__filter-item");

  /* filter gallery */
  $(galleryFilterList).each(function(index, galleryFilter){
    $(galleryFilter).on("click", function() {
        $(".gallery__filter-item.active").removeClass("active");
        $(galleryFilter).addClass("active");
    });
  });
});
