import React, { useState } from 'react';
import { Switch } from '@patternfly/react-core';
var HeadlessMode = function (_a) {
    var _b, _c, _d, _e;
    var updateHeadlessMode = _a.updateHeadlessMode, vm = _a.vm;
    var devices = (_e = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.spec) === null || _d === void 0 ? void 0 : _d.domain) === null || _e === void 0 ? void 0 : _e.devices;
    var _f = useState((devices === null || devices === void 0 ? void 0 : devices.hasOwnProperty('autoattachGraphicsDevice')) &&
        (devices === null || devices === void 0 ? void 0 : devices.autoattachGraphicsDevice) === false), isChecked = _f[0], setIsChecked = _f[1];
    return (React.createElement(Switch, { onChange: function (_event, checked) {
            setIsChecked(checked);
            updateHeadlessMode(checked);
        }, checked: isChecked, id: "headless-mode" }));
};
export default HeadlessMode;
//# sourceMappingURL=HeadlessMode.js.map