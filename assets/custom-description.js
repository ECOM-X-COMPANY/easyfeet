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
// document.getElementById('video-preview').addEventListener('click', function () {
//     var videoPreview = document.getElementById('video-preview');
//     var videoPlayer = document.getElementById('video-player');
//
//     videoPreview.style.display = 'none';
//
//     videoPlayer.style.display = 'block';
//
//     videoPlayer.play();
// });