export var CAPACITY_UNITS;
(function (CAPACITY_UNITS) {
    CAPACITY_UNITS["GiB"] = "GiB";
    CAPACITY_UNITS["MiB"] = "MiB";
    CAPACITY_UNITS["TiB"] = "TiB";
})(CAPACITY_UNITS || (CAPACITY_UNITS = {}));
export var removeByteSuffix = function (quantity) { return quantity === null || quantity === void 0 ? void 0 : quantity.replace(/[Bb]/, ''); };
//# sourceMappingURL=utils.js.map