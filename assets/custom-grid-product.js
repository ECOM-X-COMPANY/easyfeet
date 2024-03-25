document.addEventListener('DOMContentLoaded', function() {
    const unitSwitch = document.getElementById('unitSwitch');
    const cmContainer = document.getElementById('grid-product__size--right__cm');
    const inchContainer = document.getElementById('grid-product__size--right__inch');

    unitSwitch.addEventListener('change', function() {
        if (unitSwitch.checked) {
            cmContainer.style.display = 'none';
            inchContainer.style.display = 'block';
        } else {
            cmContainer.style.display = 'block';
            inchContainer.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sizeTab = document.getElementById('grid-product__tab--size');
    const featuresTab = document.getElementById('grid-product__tab--features');
    const sizeContent = document.getElementById('grid-product__size');
    const featuresContent = document.getElementById('grid-product__features');

  
    function toggleContent(tab, contentToShow, contentToHide) {
        tab.addEventListener('click', function() {
            contentToShow.style.display = 'flex';
            contentToHide.style.display = 'none';

            sizeTab.classList.toggle('activeBtnSizes', tab === sizeTab);
            featuresTab.classList.toggle('activeBtnSizes', tab === featuresTab);
        });
    }

    toggleContent(sizeTab, sizeContent, featuresContent);
    toggleContent(featuresTab, featuresContent, sizeContent);
});