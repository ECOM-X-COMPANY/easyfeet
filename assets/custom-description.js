document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const infoBlocks = document.querySelectorAll(".custome-description__content--info > div");

    function setActiveTab(button, targetId) {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        infoBlocks.forEach(block => block.style.display = "none");

        const targetBlock = document.getElementById(targetId);

        if (targetBlock) {
            targetBlock.style.display = "block";
        }
    }

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-target");
            setActiveTab(button, targetId);
        });
    });

    const defaultTab = document.getElementById("description-info");

    if (defaultTab) {
        const defaultBlock = document.getElementById("desc-info");
        setActiveTab(defaultTab, "description-info");

        if (defaultBlock) {
            defaultBlock.style.display = "block";
        }
    }
});

//
var looxApp = document.getElementById('loox-app');
var targetBlock = document.getElementById('your-target-block');

// Перевіряємо, чи знайдені обидва елементи
if (looxApp && targetBlock) {
    // Копіюємо вміст looxApp в targetBlock
    targetBlock.innerHTML = looxApp.innerHTML;
}