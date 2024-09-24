import React from 'react';
import { Form } from '@patternfly/react-core';
import SysprepAutounattend from './sysprep-autounattend/SysprepAutounattend';
import SysprepUnattend from './sysprep-unattend/SysprepUnattend';
import SysprepInfo from './SysprepInfo';
import './sysprep.scss';
var Sysprep = function (_a) {
    var autoUnattend = _a.autoUnattend, onAutoUnattendChange = _a.onAutoUnattendChange, onUnattendChange = _a.onUnattendChange, unattend = _a.unattend;
    return (React.createElement(Form, { className: "kv-sysprep--main" },
        React.createElement(SysprepInfo, null),
        React.createElement(SysprepAutounattend, { onChange: onAutoUnattendChange, value: autoUnattend }),
        React.createElement(SysprepUnattend, { onChange: onUnattendChange, value: unattend })));
};
export default Sysprep;
//# sourceMappingURL=Sysprep.js.map