define(function (require) {
    var MenuItem = require('ui/menuItem');

    var Menu = function (text, items) {
        this.text = ko.observable(text);
        this.items = ko.observableArray(items || []);
    };

    Menu.prototype.addMenuItem = function (menuItem, position) {
        if (position) {
            this.items.splice(position, 0, menuItem);
        }
        else {
            this.items.push(menuItem);
        }

        return menuItem;
    };

    Menu.prototype.addDivider = function (position) {
        var item = { divider: true };
        if (position) {
            this.items.splice(position, 0, item);
        }
        else {
            this.items.push(item);
        }
    };

    return Menu;
});