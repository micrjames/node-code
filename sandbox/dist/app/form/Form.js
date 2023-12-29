"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var Form = /** @class */ (function () {
    function Form(form) {
        this.formEl = form;
        this.fieldInputs = [];
    }
    Object.defineProperty(Form.prototype, "inputs", {
        get: function () {
            var fieldEls = this.formEl.elements;
            for (var i = 0; i < fieldEls.length; i++) {
                if (fieldEls[i].nodeName === "INPUT")
                    this.fieldInputs = __spreadArray(__spreadArray([], this.fieldInputs, true), [fieldEls[i]], false);
            }
            return this.fieldInputs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "inputsNames", {
        get: function () {
            return this.fieldInputs.map(function (fieldInput) {
                var _a;
                return (_a = fieldInput.attributes.getNamedItem("name")) === null || _a === void 0 ? void 0 : _a.value;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "form", {
        get: function () {
            return this.formEl;
        },
        enumerable: false,
        configurable: true
    });
    return Form;
}());
exports.Form = Form;
