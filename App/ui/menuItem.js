define(function (require) {
    var MenuItem = function (itemText, command, items) {
        this.text = ko.observable(itemText);
        this.command = command || ko.command({ execute: function () { } });
        this.items = ko.observableArray(items || []);
        this.hasSubMenu = ko.computed(function () {
            return this.items().length > 0;
        }, this);
    };

    MenuItem.prototype.addMenuItem = function (menuItem, position) {
        if (position) {
            this.items.splice(position, 0, menuItem);
        }
        else {
            this.items.push(menuItem);
        }
    };

    MenuItem.prototype.addDivider = function (position) {
        var item = { divider: true };
        if (position) {
            this.items.splice(position, 0, item);
        }
        else {
            this.items.push(item);
        }
    };

    return MenuItem;
});