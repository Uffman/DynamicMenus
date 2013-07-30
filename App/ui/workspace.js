define(function (require) {
    var Menu = require('ui/menu'),
        MenuItem = require('ui/menuItem'),
        menus = ko.observableArray();
 
    function setupWorkspace(cmds) {
        menus([]);
        var menuDefs = {
            "File": [
                { text: "New", command: cmds.newCommand },
                { text: "Open", command: cmds.open },
                { divider: true },
                { text: "Save", command: cmds.save },
                { text: "Save As", command: cmds.saveas },
                { divider: true },
                { text: "Sign out", command: cmds.signout }
            ],
            "Edit": [
                { text: "Cut", command: cmds.cut },
                { text: "Copy", command: cmds.copy },
                { text: "Paste", command: cmds.paste }
            ],
            "View": [
                { text: "Layout", subItems: [ 
                        { text: "Simple", command: cmds.simpleLayout },
                        { text: "Advanced", command: cmds.advancedLayout }
                    ]
                }
            ],
            "Help": [
                { text: "Contents", command: cmds.helpcontents },
                { divider: true },
                { text: "About", command: cmds.about }
            ]
        };

        loadMenus(menuDefs);
    }
 
    function loadMenus(menuDefinitions) {
        var menuText, menu;
        for (menuText in menuDefinitions) {
            menu = addMenu(menuText);
            addMenuItems(menu, menuDefinitions[menuText]);
        }
    }
 
    function addMenuItems(menuOrMenuItem, itemDefinitions) {
        for (var i = 0; i < itemDefinitions.length; i++) {
            var definitionItem = itemDefinitions[i];
            if (definitionItem.hasOwnProperty("divider")) {
                menuOrMenuItem.addDivider();
            }
            else {
                var menuItem = new MenuItem(definitionItem.text, definitionItem.command);
                menuOrMenuItem.addMenuItem(menuItem);
                if (definitionItem.hasOwnProperty("subItems")) {
                    addMenuItems(menuItem, definitionItem.subItems);
                }
            }
        }
    }
 
    function addMenu(text, position) {
        var menu = new Menu(text);
        if (position) {
            menus.splice(position, 0, menu);
        }
        else {
            menus.push(menu);
        }
 
        return menu;
    }
 
    var workspace = {
        menus: menus,
        addMenu: addMenu,
        setupWorkspace: setupWorkspace
    };
 
    return workspace;
});