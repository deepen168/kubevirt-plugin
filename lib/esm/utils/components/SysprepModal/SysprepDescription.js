import React from 'react';
import { ConfigMapModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import SysprepInfo from '@kubevirt-utils/components/SysprepModal/SysprepInfo';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, DescriptionList, Stack, StackItem } from '@patternfly/react-core';
import Loading from '../Loading/Loading';
import VirtualMachineDescriptionItem from '../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
export var SysprepDescription = function (_a) {
    var error = _a.error, loaded = _a.loaded, selectedSysprepName = _a.selectedSysprepName;
    var t = useKubevirtTranslation().t;
    if (error) {
        return (React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, error === null || error === void 0 ? void 0 : error.message));
    }
    if (!loaded) {
        return React.createElement(Loading, null);
    }
    return (React.createElement(Stack, { hasGutter: true },
        React.createElement(StackItem, null,
            React.createElement(SysprepInfo, null)),
        React.createElement(StackItem, null,
            React.createElement(DescriptionList, { className: "pf-c-description-list", columnModifier: { lg: '1Col', xl: '2Col' }, isCompact: true },
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: isEmpty(selectedSysprepName) ? (t('Not available')) : (React.createElement(ResourceLink, { groupVersionKind: modelToGroupVersionKind(ConfigMapModel), linkTo: false, name: selectedSysprepName })) })))));
};
//# sourceMappingURL=SysprepDescription.js.map