import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sCreate } from '@openshift-console/dynamic-plugin-sdk';
import { ActionList, ActionListItem, Alert, AlertVariant, Button, ButtonVariant, Stack, StackItem, } from '@patternfly/react-core';
import { migrationPoliciesPageBaseURL } from '../../../../utils/constants';
var MigrationPolicyFormFooter = function (_a) {
    var _b;
    var migrationPolicy = _a.migrationPolicy;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var _c = React.useState(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = React.useState(undefined), error = _d[0], setError = _d[1];
    var migrationPolicyName = (_b = migrationPolicy === null || migrationPolicy === void 0 ? void 0 : migrationPolicy.metadata) === null || _b === void 0 ? void 0 : _b.name;
    var handleSubmit = function (e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError(undefined);
        k8sCreate({ data: migrationPolicy, model: MigrationPolicyModel })
            .then(function () { return navigate("".concat(migrationPoliciesPageBaseURL, "/").concat(migrationPolicyName)); })
            .catch(setError)
            .finally(function () { return setIsSubmitting(false); });
    };
    var closeModal = function () {
        setError(undefined);
        setIsSubmitting(false);
        navigate(-1);
    };
    return (React.createElement(Stack, { className: "kv-tabmodal-footer", hasGutter: true },
        error && (React.createElement(StackItem, null,
            React.createElement(Alert, { isInline: true, title: t('An error occurred'), variant: AlertVariant.danger },
                React.createElement(Stack, { hasGutter: true },
                    React.createElement(StackItem, null, error === null || error === void 0 ? void 0 : error.message),
                    (error === null || error === void 0 ? void 0 : error.href) && (React.createElement(StackItem, null,
                        React.createElement("a", { href: error.href, rel: "noreferrer", target: "_blank" }, error.href))))))),
        React.createElement(StackItem, null,
            React.createElement(ActionList, null,
                React.createElement(ActionListItem, null,
                    React.createElement(Button, { isDisabled: isSubmitting, isLoading: isSubmitting, onClick: handleSubmit, variant: ButtonVariant.primary }, t('Create'))),
                React.createElement(ActionListItem, null,
                    React.createElement(Button, { onClick: closeModal, variant: ButtonVariant.link }, t('Cancel')))))));
};
export default MigrationPolicyFormFooter;
//# sourceMappingURL=MigrationPolicyFormFooter.js.map