window.onscroll = () => {
  handleScroll();
};

const handleScroll = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".progress-fill").style.width = `${scrolled}%`;
};
