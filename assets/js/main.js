$(document).ready(function () {
  const main = $("#main");

  const header = $(".header");
  const backToTop = $(".back-to-top");

  const sidebarNav = $(".sidebar-nav");
  const sidebarNavHasChildren = $(".sidebar-nav-item.has-children > a");
  const sidebarSubNavHasChildren = $(".sub-nav-item.has-children > a");
  const sidebarNavClose = $(".sidebar-close");
  const btnOpenSidebarNav = $(".header-sidebar-nav");

  const banner = $(".banner__wrap");

  /*--------- resize banner when windowWidth < 991px -------*/
  if($(window).width() <= 991 ) {
    $(banner).css({"height":`${($(banner).width()) * 0.85}`})
  }

  $(window).resize(function() {
    if($(window).width() <= 991 ) {
      $(banner).css({"height":`${($(banner).width()) * 0.85}`})
    }
  });

  /*-------------- sidebar nav ---------------*/
  /* open side bar when click btn */
  $(btnOpenSidebarNav).on("click", function () {
    $(sidebarNav).animate({
      right: "0px",
    }, function() {
      $(main).addClass("sidebar-nav-open");
    });
  });

  /* sidebar nav close */
  $(sidebarNavClose).on("click", function () {
    $(sidebarNav).animate({
      right: "-300px",
    });
    $(main).removeClass("sidebar-nav-open");
  });

  $(main).on("click", function() {
    if($(main).hasClass("sidebar-nav-open") == true ) {
      $(sidebarNav).animate({
        right: "-300px",
      });
      $(main).removeClass("sidebar-nav-open");
    }
  });

  /* sidebar nav has child */
  $(sidebarNavHasChildren).each(function (index, sidebarNavHasChild) {
    $(sidebarNavHasChild).on("click", function () {
      const prevActive = $(".sidebar-nav-item.has-children a.active");

      $(sidebarNavHasChild).toggleClass("active");

      $(prevActive).removeClass("active");
    });
  });

  $(sidebarSubNavHasChildren).each(function (index, sidebarSubNavHasChild) {
    $(sidebarSubNavHasChild).on("click", function () {
      const prevActive = $(".sub-nav-item.has-children a.active");

      $(sidebarSubNavHasChild).toggleClass("active");

      $(prevActive).removeClass("active");
    });
  });

  /*---------- remove preload ------------*/
  setTimeout(function () {
    document.body.className = "";
  }, 100);

  /*------------ back to top -----------------*/
  $(window).scroll(function () {
    if ($(window).scrollTop() > $(header).innerHeight()) {
      $(backToTop).css({ display: "block" });
    } else {
      $(backToTop).css({ display: "none" });
    }
  });

  /* animate back to top*/
  $(backToTop).on("click", function (e) {
    e.preventDefault();
    $("body,html").animate({
      scrollTop: 0,
    });
  });
});
