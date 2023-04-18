export default (() => {

  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {

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
        });
    });
})();