if (typeof HTMLCollection !== "undefined" && HTMLCollection.prototype && !HTMLCollection.prototype.forEach) {
    Object.defineProperty(HTMLCollection.prototype, "forEach", {
        value: Array.prototype.forEach,
        configurable: true,
        writable: true
    });
}



document.getElementsByClassName('single_room_prise').forEach(block => {
    block.addEventListener('click', () => {
        if (block.classList.contains('grayscale')) {
            button = block.parentElement.children
            button.innerText = 'Забронировать';
            block.classList.remove('grayscale');
            block.onmouseleave = function() {
                button.innerText = 'Забронировать';
                block.classList.remove('grayscale');
            };
        }
    });
});



document.getElementsByClassName('button_booking_room').forEach(button => {
    button.addEventListener('click', () => {
        button.innerText = 'Подробнее'
        block = button.parentElement
        block.onmouseleave = function() {
            block.classList.add('grayscale');
        };

    });
});
