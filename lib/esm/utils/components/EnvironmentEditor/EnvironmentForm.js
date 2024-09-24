import React, { useEffect, useMemo } from 'react';
import { useImmer } from 'use-immer';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Form } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
import EnvironmentEditor from './components/EnvironmentEditor';
import EnvironmentFormActions from './components/EnvironmentFormActions';
import EnvironmentFormSkeleton from './components/EnvironmentFormSkeleton';
import EnvironmentFormTitle from './components/EnvironmentFormTitle';
import useEnvironments from './hooks/useEnvironments';
import useEnvironmentsResources from './hooks/useEnvironmentsResources';
import './EnvironmentForm.scss';
var EnvironmentForm = function (_a) {
    var _b;
    var onEditChange = _a.onEditChange, updateVM = _a.updateVM, vm = _a.vm;
    var _c = useImmer(vm), temporaryVM = _c[0], setTemporaryVM = _c[1];
    var t = useKubevirtTranslation().t;
    var ns = (_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.namespace;
    var _d = useEnvironmentsResources(ns), configMaps = _d.configMaps, loadError = _d.error, loaded = _d.loaded, secrets = _d.secrets, serviceAccounts = _d.serviceAccounts;
    var _e = useEnvironments(temporaryVM, vm, setTemporaryVM, onEditChange), edited = _e.edited, environments = _e.environments, formError = _e.error, onEnvironmentAdd = _e.onEnvironmentAdd, onEnvironmentChange = _e.onEnvironmentChange, onEnvironmentRemove = _e.onEnvironmentRemove, setFormError = _e.setError;
    useEffect(function () {
        setTemporaryVM(vm);
        setFormError(null);
    }, [setFormError, setTemporaryVM, vm]);
    var environmentNamesSelected = useMemo(function () { return environments.map(function (env) { return env.name; }); }, [environments]);
    if (!loaded)
        return React.createElement(EnvironmentFormSkeleton, null);
    return (React.createElement(React.Fragment, null,
        React.createElement(EnvironmentFormTitle, null),
        React.createElement(Form, { className: "environment-form__form" },
            environments.length !== 0 && (React.createElement("div", { className: "row pairs-list__heading" },
                React.createElement("div", { className: "col-xs-5 text-secondary text-uppercase", id: "environment-name-header" }, t('config map / secret / service account')),
                React.createElement("div", { className: "col-xs-5 text-secondary text-uppercase", id: "environment-serial-header" }, t('Serial Number')),
                React.createElement("div", { className: "col-xs-1 co-empty__header" }))),
            environments.map(function (environment, index) { return (React.createElement(EnvironmentEditor, { configMaps: configMaps, diskName: environment.diskName, environmentName: environment.name, environmentNamesSelected: environmentNamesSelected, id: index, key: environment.name, kind: environment.kind, onChange: onEnvironmentChange, onRemove: onEnvironmentRemove, secrets: secrets, serial: environment === null || environment === void 0 ? void 0 : environment.serial, serviceAccounts: serviceAccounts })); }),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-xs-12" },
                    React.createElement(Button, { className: "pf-m-link--align-left", onClick: onEnvironmentAdd, type: "button", variant: "link" },
                        React.createElement(PlusCircleIcon, null),
                        " ",
                        t('Add Config Map, Secret or Service Account')))),
            React.createElement(EnvironmentFormActions, { onReload: function () {
                    return setTemporaryVM(function (draftVM) {
                        draftVM.spec = vm.spec;
                    });
                }, closeError: function () { return setFormError(null); }, error: loadError || formError, isSaveDisabled: !edited || !environments.every(function (env) { return env.name; }), onSave: function () { return updateVM(temporaryVM); } }))));
};
export default EnvironmentForm;
//# sourceMappingURL=EnvironmentForm.js.map