define(function (require) {
    var workspace = require('ui/workspace');

    var cmds = {
        newCommand: ko.command({
            execute: function () {
                alert("New");
            }
        }),
        open: ko.command({
            execute: function () {
                alert("Open");
            }
        }),
        save: ko.command({
            execute: function () {
                alert("Save");
            }
        }),
        saveas: ko.command({
            execute: function () {
                alert("Save As");
            }
        }),
        signout: ko.command({
            execute: function () {
                alert("Sign Out");
            }
        }),

        cut: ko.command({
            execute: function () {
                alert("Cut");
            }
        }),
        copy: ko.command({
            execute: function () {
                alert("Copy");
            }
        }),
        paste: ko.command({
            execute: function () {
                alert("Paste");
            }
        }),

        simpleLayout: ko.command({
            execute: function () {
                alert("Simple Layout");
            }
        }),
        advancedLayout: ko.command({
            execute: function () {
                alert("Advanced Layout");
            }
        }),

        helpcontents: ko.command({
            execute: function () {
                alert("Help");
            }
        }),
        about: ko.command({
            execute: function () {
                alert("About");
            }
        })
    };
    workspace.setupWorkspace(cmds);

    return {
        menus: workspace.menus
    };
});