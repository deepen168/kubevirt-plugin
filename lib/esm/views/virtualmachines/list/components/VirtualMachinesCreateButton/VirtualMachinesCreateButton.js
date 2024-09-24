import React, { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { VirtualMachineModelRef } from '@kubevirt-ui/kubevirt-api/console';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreateDropdown } from '@openshift-console/dynamic-plugin-sdk';
var VirtualMachinesCreateButton = function (_a) {
    var buttonText = _a.buttonText, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var navigate = useNavigate();
    var createItems = {
        instanceType: t('From InstanceType'),
        //eslint-disable-next-line perfectionist/sort-objects
        catalog: t('From template'),
        yaml: t('With YAML'),
    };
    var catalogURL = useMemo(function () { return "/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/catalog"); }, [namespace]);
    var onCreate = useCallback(function (type) {
        switch (type) {
            case 'catalog':
                return navigate("".concat(catalogURL, "/template"));
            case 'instanceType':
                return navigate(catalogURL);
            default:
                return navigate("/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(VirtualMachineModelRef, "/~new"));
        }
    }, [catalogURL, navigate, namespace]);
    return (React.createElement(ListPageCreateDropdown, { createAccessReview: { groupVersionKind: VirtualMachineModelRef, namespace: namespace }, items: createItems, onClick: onCreate }, buttonText || t('Create')));
};
export default VirtualMachinesCreateButton;
//# sourceMappingURL=VirtualMachinesCreateButton.js.map