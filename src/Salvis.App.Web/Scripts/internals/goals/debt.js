﻿var Salvis = Salvis || {};

(function () {
    $(document).ready(function () {
        var adding;
        try {
            adding = mode != undefined;
        } catch (e) { }
        var model = new Salvis.GoalModel('Debt', adding);
        model.initialize();
        ko.applyBindings(model, document.getElementById("pcont"));
    });

})();