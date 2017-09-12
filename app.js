

document.querySelectorAll('.menu').forEach(function (menuEl) {
    let menuOptions = {
        el: menuEl,
        title:'My menu',
        items:[1,2,3]
    };
    new Menu(menuOptions);
});