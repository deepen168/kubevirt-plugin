export var createURL = function (append, url) {
    return (url === null || url === void 0 ? void 0 : url.endsWith('/')) ? "".concat(url).concat(append) : "".concat(url, "/").concat(append);
};
//# sourceMappingURL=utils.js.map