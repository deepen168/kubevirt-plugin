import * as React from 'react';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var Name = function (_a) {
    var name = _a.name;
    var t = useKubevirtTranslation().t;
    return (React.createElement(VirtualMachineDescriptionItem
    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
    , { 
        // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
        bodyContent: t('Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. '), breadcrumb: "Template.metadata.name", "data-test-id": "".concat(name, "-name"), descriptionData: name, descriptionHeader: t('Name'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/identifiers#names" }));
};
export default Name;
//# sourceMappingURL=Name.js.map