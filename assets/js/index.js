$(document).ready(function () {
  const bannerSlogan = $(".banner__slogan-wrap");
  const bannerTitle = $(".banner__title");
  const bannerSubTitle = $(".banner__sub-title");
  const bannerBtnExplore = $(".banner__btn-wrap");
  /* animate banner*/
  /* $(bannerSubTitle).css("transform","rotateZ(0deg)") */


  $(bannerSlogan).delay(300).animate(
    {
      left: "50%",
    },
    {
      duration: 700,
      easing: "swing",
    }
  );

  $(bannerTitle).delay(300).animate(
    {
      top: "44%",
    },
    {
      duration: 700,
      easing: "swing",
    }
  );

  $(bannerBtnExplore).delay(300).animate(
    {
      bottom: "36%",
      opacity: "1"
    },
    {
      duration: 700,
      easing: "swing",
    }
  );

});
