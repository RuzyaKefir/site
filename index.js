document.addEventListener("DOMContentLoaded", function() {
    var linkElement = document.querySelector("a.link");
    if (linkElement) {
        linkElement.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "xyu.html" //менять лиек для редиректа
        });
    }
});
// это короче что бы хранить открытый блок
var currentlyOpenBlock = null;


function toggleBlock(blockId) {
    // тут эта хуета неведомая рот ее ебал гетает айди кнопки которую нажимают пон да
    var blockToToggle = document.getElementById(blockId);

    // це провiрочка на то есть ли блок вообще
    if (blockToToggle) {
        // если другой блок уже открыт то у него нахуй удаляется класс блок опен что бы не выебывалось хуйло
        if (currentlyOpenBlock) {
            currentlyOpenBlock.classList.remove('block-open');
        }

        // эт надо что бы показать блок какой он красивый а кодер молодец
        blockToToggle.classList.add('block-open');

        // это обновление ранее объявленной переменной что бы хранить в ней открытый блок
        currentlyOpenBlock = blockToToggle;
    }
}

// це для кнопо4ек бек в блоках
function hideBlock(blockId) {
    // тут эта хуета неведомая рот ее ебал гетает айди кнопки которую нажимают пон да
    var blockToHide = document.getElementById(blockId);

    // це провiрочка на то есть ли блок вообще
    if (blockToHide) {
        // тут у него нахуй удаляется класс блок опен что бы не выебывалось хуйло
        blockToHide.classList.remove('block-open');

        // тут сброс переменной в ноль нахуй патамушта панабирают далбаебав
        currentlyOpenBlock = null;
    }
}



