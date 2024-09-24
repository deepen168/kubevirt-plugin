export var onBeforeUnload = function (event) {
    event.preventDefault();
    event.returnValue = '';
    return '';
};
export var onFocusOut = function () {
    window.removeEventListener('beforeunload', onBeforeUnload);
};
export var onFocusIn = function () {
    window.addEventListener('beforeunload', onBeforeUnload);
};
//# sourceMappingURL=Xterm.js.map