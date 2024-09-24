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
import React from 'react';
import { Button, ButtonVariant, Form, FormGroup, Split, SplitItem } from '@patternfly/react-core';
import { MinusCircleIcon } from '@patternfly/react-icons';
import { migrationPolicySpecKeys } from '../../utils/constants';
import MigrationPolicyConfigurationDropdown from './compnents/MigrationPolicyConfigurationDropdown/MigrationPolicyConfigurationDropdown';
import { getMigrationPolicyConfigurationOptions } from './utils/utils';
var MigrationPolicyConfigurations = function (_a) {
    var setState = _a.setState, setStateField = _a.setStateField, state = _a.state;
    var options = getMigrationPolicyConfigurationOptions();
    var configKeys = Object.values(migrationPolicySpecKeys);
    var hasConfigSelected = configKeys.some(function (key) { return Object.keys(state).includes(key); });
    var hasAllConfigSelected = configKeys.every(function (key) { return Object.keys(state).includes(key); });
    return (React.createElement(React.Fragment, null,
        React.createElement(MigrationPolicyConfigurationDropdown, { isDisabled: hasAllConfigSelected, options: options, setState: setState, state: state }),
        hasConfigSelected && (React.createElement(Form, { isHorizontal: true }, Object.entries(options).map(function (_a) {
            var key = _a[0], _b = _a[1], Component = _b.component, label = _b.label;
            return key in state && (React.createElement(FormGroup, { "data-test-id": "".concat(key, "-selected"), fieldId: key, hasNoPaddingTop: true, key: key, label: label },
                React.createElement(Split, null,
                    React.createElement(SplitItem, null,
                        React.createElement(Component, { setState: setStateField(key), state: state === null || state === void 0 ? void 0 : state[key] })),
                    React.createElement(SplitItem, null,
                        React.createElement(Button, { onClick: function () {
                                return setState(function (prev) {
                                    var newState = __assign({}, prev);
                                    delete newState[key];
                                    return newState;
                                });
                            }, isInline: true, variant: ButtonVariant.plain },
                            React.createElement(MinusCircleIcon, null))))));
        })))));
};
export default MigrationPolicyConfigurations;
//# sourceMappingURL=MigrationPolicyConfigurations.js.map