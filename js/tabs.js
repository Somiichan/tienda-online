export default (() => {

  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      selectTab(index);
    });
  });

  function selectTab(index) {
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    contents.forEach((content, contentIndex) => {
      if (contentIndex === index) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    
    $(".content").hide();
    $(`.content:eq(${index})`).fadeIn(200);
  }

})();