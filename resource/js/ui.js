window.onload = function() {
    setUi.init();
}

const setUi = {
    init: function() {
        this.button = document.querySelector('.sound-button');
        if (!this.button) return false;
        this.button.addEventListener('click', () => {
            if (this.button.classList.contains('play')) {
                this.button.classList.remove('play')
            } else {
                this.button.classList.add('play')
            }
        })
    }
}


if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}