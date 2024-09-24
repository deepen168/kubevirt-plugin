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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from 'react';
import produce from 'immer';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { getRandomChars } from '@kubevirt-utils/utils/utils';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import TabModal from '../TabModal/TabModal';
var CloneResourceModal = function (_a) {
    var headerText = _a.headerText, model = _a.model, namespace = _a.namespace, object = _a.object, modalProps = __rest(_a, ["headerText", "model", "namespace", "object"]);
    var t = useKubevirtTranslation().t;
    var _b = useState("".concat(getName(object), "-clone-").concat(getRandomChars(5))), newName = _b[0], setNewName = _b[1];
    var onSubmit = function () {
        var newObject = produce(object, function (draftObject) {
            draftObject.metadata = {};
            draftObject.metadata.name = newName;
            if (namespace)
                draftObject.metadata.namespace = namespace;
        });
        return k8sCreate({
            data: newObject,
            model: model,
        });
    };
    return (React.createElement(TabModal, __assign({}, modalProps, { headerText: headerText || t('Clone {{kind}}', { kind: model === null || model === void 0 ? void 0 : model.kind }), onSubmit: onSubmit }),
        React.createElement(Form, null,
            React.createElement(FormGroup, { isRequired: true, label: t('Name') },
                React.createElement(TextInput, { onChange: function (_event, val) { return setNewName(val); }, value: newName })))));
};
export default CloneResourceModal;
//# sourceMappingURL=CloneResourceModal.js.map