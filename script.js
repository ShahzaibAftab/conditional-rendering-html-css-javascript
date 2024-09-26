
const tabs = document.querySelectorAll('.tab-title');
const tabContents = document.querySelectorAll('.tab-content');
const imageLayers = document.querySelectorAll('.image-layer');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       
        tabs.forEach(item => item.classList.remove('active'));
       
        tabContents.forEach(content => content.classList.remove('active'));
      
        imageLayers.forEach(image => image.classList.remove('active'));

        tab.classList.add('active');
        const activeTabContent = document.getElementById(tab.getAttribute('data-tab'));
        activeTabContent.classList.add('active');
        document.getElementById('image-' + tab.getAttribute('data-tab')).classList.add('active');
    });
});
