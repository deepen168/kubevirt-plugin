import { CONSOLE_PASTE_EVENT } from './constants';
export var isConnectionEncrypted = function () { return window.location.protocol === 'https:'; };
export var isHeadlessModeVMI = function (vmi) {
    var _a, _b;
    var devices = (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.spec) === null || _a === void 0 ? void 0 : _a.domain) === null || _b === void 0 ? void 0 : _b.devices;
    return (devices === null || devices === void 0 ? void 0 : devices.hasOwnProperty('autoattachGraphicsDevice')) && !(devices === null || devices === void 0 ? void 0 : devices.autoattachGraphicsDevice);
};
export var clipboardCopyFunc = function (_, text) {
    var textString = text === null || text === void 0 ? void 0 : text.toString();
    navigator.clipboard.writeText(textString);
    document.dispatchEvent(new CustomEvent(CONSOLE_PASTE_EVENT, {
        detail: textString,
    }));
};
export var sleep = function (ms) {
    if (ms === void 0) { ms = 500; }
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
//# sourceMappingURL=utils.js.map