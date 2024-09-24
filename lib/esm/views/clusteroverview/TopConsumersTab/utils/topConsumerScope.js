var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import DropdownEnum from '@kubevirt-utils/utils/dropdownEnum';
import { ObjectEnum } from '@kubevirt-utils/utils/ObjectEnum';
var TopConsumerScopeObjectEnum = /** @class */ (function (_super) {
    __extends(TopConsumerScopeObjectEnum, _super);
    function TopConsumerScopeObjectEnum(value, _a) {
        var dropdownLabel = _a.dropdownLabel;
        var _this = _super.call(this, value, { dropdownLabel: dropdownLabel }) || this;
        _this.dropdownLabel = dropdownLabel;
        return _this;
    }
    return TopConsumerScopeObjectEnum;
}(DropdownEnum));
var TopConsumerScope = /** @class */ (function (_super) {
    __extends(TopConsumerScope, _super);
    function TopConsumerScope() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopConsumerScope.NODE = new TopConsumerScope('NODE', {
        dropdownLabel: 'Node',
    });
    TopConsumerScope.PROJECT = new TopConsumerScope('PROJECT', {
        dropdownLabel: 'Project',
    });
    TopConsumerScope.VM = new TopConsumerScope('VM', {
        dropdownLabel: 'VM',
    });
    TopConsumerScope.all = Object.freeze(ObjectEnum.getAllClassEnumProperties(TopConsumerScope));
    TopConsumerScope.dropdownLabelMapper = TopConsumerScope.all.reduce(function (accumulator, scope) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[scope.dropdownLabel] = scope, _a)));
    }, {});
    TopConsumerScope.fromDropdownLabel = function (dropdownLabel) {
        return TopConsumerScope.dropdownLabelMapper[dropdownLabel];
    };
    TopConsumerScope.fromString = function (source) { return TopConsumerScope.stringMapper[source]; };
    TopConsumerScope.getAll = function () { return TopConsumerScope.all; };
    TopConsumerScope.stringMapper = TopConsumerScope.all.reduce(function (accumulator, scope) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[scope.value] = scope, _a)));
    }, {});
    return TopConsumerScope;
}(TopConsumerScopeObjectEnum));
export { TopConsumerScope };
//# sourceMappingURL=topConsumerScope.js.map