document.addEventListener("DOMContentLoaded", function() {
    var linkElement = document.querySelector("a.link");
    if (linkElement) {
        linkElement.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "xyu.html" //менять лиек для редиректа
        });
    }
});

var currentlyOpenBlock = null;

function toggleBlock(blockId) {
    var blockToToggle = document.getElementById(blockId);
    if (blockToToggle) {
        if (currentlyOpenBlock) {
            currentlyOpenBlock.style.display = 'none';
        }
        blockToToggle.style.display = 'block';
        currentlyOpenBlock = blockToToggle;
    }
}

function hideBlock(blockId) {
    var blockToHide = document.getElementById(blockId);
    if (blockToHide) {
        blockToHide.style.display = 'none';
        currentlyOpenBlock = null;
    }
}

