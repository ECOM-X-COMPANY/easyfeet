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
    const sizeTabs = document.getElementById('grid-product__tab--size');
    const featuresTabs = document.getElementById('grid-product__tab--features');
    const sizeContents = document.getElementById('grid-product__size');
    const featuresContents = document.getElementById('grid-product__features');

  
    function toggleContent(tab, contentToShow, contentToHide) {
        tab.addEventListener('click', function() {
            contentToShow.style.display = 'flex';
            contentToHide.style.display = 'none';

            sizeTabs.classList.toggle('activeBtnSizes', tab === sizeTabs);
            featuresTabs.classList.toggle('activeBtnSizes', tab === featuresTabs);
        });
    }

    toggleContent(sizeTabs, sizeContents, featuresContents);
    toggleContent(featuresTabs, featuresContents, sizeContents);
});