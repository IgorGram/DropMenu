class Menu {
    constructor(options){
        this._el = options.el;
        this._el.querySelector('.menu__title').innerHTML = options.title;
        this._render(options.items);
        this._el.addEventListener('click', this._onTitleClick.bind(this));
    }

    _render(items){
        let content = '';
        items.forEach(function (item) {
            content += `<li class="menu__item">${item}</li>`
        });

        this._el.querySelector('.menu__list').innerHTML = content;
    }

    _onTitleClick (event) {
        let titleEl = event.target.closest('.menu__title');

        if(!titleEl){
            return;
        }

        this._el.classList.toggle('menu-closed');
    }
}