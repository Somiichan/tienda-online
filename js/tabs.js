export default (() => {

    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
    
            contents.forEach(content => {
                content.style.display = 'none';
            });
        
            contents[index].style.display = 'block';
        });
    });

})();