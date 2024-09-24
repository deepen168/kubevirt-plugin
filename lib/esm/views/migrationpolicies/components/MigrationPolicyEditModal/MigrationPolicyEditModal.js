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
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sCreate, k8sDelete, k8sUpdate } from '@openshift-console/dynamic-plugin-sdk';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import { migrationPoliciesPageBaseURL } from '../../list/utils/constants';
import MigrationPolicyConfigurations from '../MigrationPolicyConfigurations/MigrationPolicyConfigurations';
import { extractEditMigrationPolicyInitialValues, produceUpdatedMigrationPolicy, } from './utils/utils';
var MigrationPolicyEditModal = function (_a) {
    var isOpen = _a.isOpen, mp = _a.mp, onClose = _a.onClose;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var location = useLocation();
    var _b = useState(extractEditMigrationPolicyInitialValues(mp)), state = _b[0], setState = _b[1];
    var actualPathArray = location.pathname.split('/');
    var lastPolicyPathElement = actualPathArray[actualPathArray.length - 1]; // last part of url after "/", MigrationPolicy's previous name or ''
    var setStateField = function (field) { return function (value) {
        var isValueFunction = typeof value === 'function';
        setState(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[field] = isValueFunction ? value(prevState === null || prevState === void 0 ? void 0 : prevState[field]) : value, _a)));
        });
    }; };
    var updatedMigrationPolicy = useMemo(function () { return produceUpdatedMigrationPolicy(mp, state); }, [mp, state]);
    var onSubmit = function (updatedMP) {
        var _a, _b;
        if (((_a = updatedMP === null || updatedMP === void 0 ? void 0 : updatedMP.metadata) === null || _a === void 0 ? void 0 : _a.name) !== ((_b = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _b === void 0 ? void 0 : _b.name)) {
            return k8sCreate({ data: updatedMP, model: MigrationPolicyModel }).then(function () {
                return k8sDelete({ model: MigrationPolicyModel, resource: mp }).then(function () {
                    var _a, _b;
                    if (lastPolicyPathElement === ((_a = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _a === void 0 ? void 0 : _a.name)) {
                        // if we were on MigrationPolicy details page, stay there and just update the data
                        navigate("".concat(migrationPoliciesPageBaseURL, "/").concat((_b = updatedMP === null || updatedMP === void 0 ? void 0 : updatedMP.metadata) === null || _b === void 0 ? void 0 : _b.name));
                    }
                    else {
                        navigate(migrationPoliciesPageBaseURL); // MigrationPolicies list
                    }
                });
            });
        }
        return k8sUpdate({
            data: updatedMP,
            model: MigrationPolicyModel,
        });
    };
    return (React.createElement(TabModal, { headerText: t('Edit MigrationPolicy'), isOpen: isOpen, obj: updatedMigrationPolicy, onClose: onClose, onSubmit: onSubmit },
        React.createElement(Form, null,
            React.createElement(FormGroup, { fieldId: "migration-policy-name", isRequired: true, label: t('MigrationPolicy name') },
                React.createElement(TextInput, { onChange: function (_, value) { return setStateField('migrationPolicyName')(value); }, value: state === null || state === void 0 ? void 0 : state.migrationPolicyName }),
                React.createElement(FormGroupHelperText, null, t('Unique name of the MigrationPolicy'))),
            React.createElement(MigrationPolicyConfigurations, { setState: setState, setStateField: setStateField, state: state }))));
};
export default MigrationPolicyEditModal;
//# sourceMappingURL=MigrationPolicyEditModal.js.map