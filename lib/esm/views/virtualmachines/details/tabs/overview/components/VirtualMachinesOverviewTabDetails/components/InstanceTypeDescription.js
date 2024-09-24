import React from 'react';
import { ControllerRevisionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getNamespace } from '@kubevirt-utils/resources/shared';
import { getInstanceTypeMatcher, getPreferenceMatcher } from '@kubevirt-utils/resources/vm';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var InstanceTypeDescription = function (_a) {
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var None = React.createElement(MutedTextSpan, { text: t('None') });
    var itMatcher = getInstanceTypeMatcher(vm);
    var preferenceMatcher = getPreferenceMatcher(vm);
    return (React.createElement(React.Fragment, null,
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('A ControllerRevision resource is cloned from the InstanceType when creating the VirtualMachine'), descriptionData: itMatcher ? (React.createElement(ResourceLink, { displayName: itMatcher.name, groupVersionKind: ControllerRevisionModelGroupVersionKind, name: itMatcher.revisionName, namespace: getNamespace(vm) })) : (None), "data-test-id": "virtual-machine-overview-details-instance-type", descriptionHeader: t('InstanceType'), isPopover: true }),
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('A ControllerRevision resource is cloned from the Preference when creating the VirtualMachine'), descriptionData: preferenceMatcher ? (React.createElement(ResourceLink, { displayName: preferenceMatcher.name, groupVersionKind: ControllerRevisionModelGroupVersionKind, name: preferenceMatcher.revisionName, namespace: getNamespace(vm) })) : (None), "data-test-id": "virtual-machine-overview-details-preference", descriptionHeader: t('Preference'), isPopover: true })));
};
export default InstanceTypeDescription;
//# sourceMappingURL=InstanceTypeDescription.js.map