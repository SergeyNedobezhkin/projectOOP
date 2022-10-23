'use strict';
const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.element = function () {
    let item;
    if (this.selector[0] === '.') {
        item = document.createElement('div');
        item.className = this.selector.slice(1);
    }
    if (this.selector[0] === '#') {

        item = document.createElement('p');
        item.id = this.selector.slice(1);
        item.textContent = 'Любая запись';
    }
    item.style.cssText = `height: ${this.height}px;

        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;`;

    return item;
};

let elementDiv = new DomElement('.item', 300, 300, 'yellow', 20);
let elementP = new DomElement('#item', 300, 300, 'green', 20);
document.body.append(elementDiv.element());
document.body.append(elementP.element()); 
