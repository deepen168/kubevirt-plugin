import React, { Suspense, useEffect, useState } from 'react';
import { load } from 'js-yaml';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertActionCloseButton, AlertVariant, Bullseye } from '@patternfly/react-core';
import './WizardYAMLTab.scss';
var WizardYAMLTab = function (_a) {
    var setDisableVmCreate = _a.setDisableVmCreate, updateVM = _a.updateVM, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = useState(), error = _b[0], setError = _b[1];
    var _c = useState(false), success = _c[0], setSuccess = _c[1];
    var onSave = function (yaml) {
        setError(undefined);
        updateVM(load(yaml))
            .then(function () { return setSuccess(true); })
            .catch(function (apiError) {
            setError(apiError);
            setSuccess(false);
        });
    };
    useEffect(function () {
        setDisableVmCreate(!!error);
        return function () { return setDisableVmCreate(false); };
    }, [error, setDisableVmCreate]);
    return (React.createElement(Suspense, { fallback: React.createElement(Bullseye, null,
            React.createElement(Loading, null)) },
        React.createElement("div", { className: "wizard-yaml-body" },
            React.createElement(ResourceYAMLEditor, { initialResource: vm, onSave: onSave })),
        error && (React.createElement("div", { className: "wizard-yaml-alert" },
            React.createElement(Alert, { title: t('An error occured, The VirtualMachine was not updated. Click "Reload" to go back to the last valid state'), isInline: true, variant: AlertVariant.danger }, error.message))),
        success && (React.createElement("div", { className: "wizard-yaml-alert" },
            React.createElement(Alert, { actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return setSuccess(false); } }), isInline: true, title: t('Success'), variant: AlertVariant.success }, t('VirtualMachine updated successfully'))))));
};
export default WizardYAMLTab;
//# sourceMappingURL=WizardYAMLTab.js.map