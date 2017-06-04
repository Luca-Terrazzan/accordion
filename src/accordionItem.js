class AccordionItem {
    constructor(params) {
        this.main  = this.createMainElement();
        var box   = this.createMainBox();
        var title = this.buildElement(params['title'], 'accordion-title');
        var subtitle  = this.buildElement(params['subtitle'], 'accordion-subtitle');

        this.main.appendChild(box);
        box.appendChild(title);
        box.appendChild(subtitle);
        this.main.appendChild(this.createButton());
    }

    getItem() {
        return this.main;
    }

    createMainElement() {
        var main = document.createElement('div');
        main.classList.add('accordion-item');
        return main;
    }
    createMainBox() {
        var box = document.createElement('div');
        box.classList.add('accordion-item-box');
        return box;
    }
    createButton() {
        var button = document.createElement('div');
        button.classList.add('accordion-button');
        return button;
    }
    buildElement(text, className) {
        parent = document.createElement('div');
        parent.appendChild(document.createTextNode(text));
        parent.classList.add(className);
        return parent;
    }
}
