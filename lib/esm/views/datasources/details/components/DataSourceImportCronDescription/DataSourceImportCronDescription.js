import React from 'react';
import { DataImportCronModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceLink, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
var DataSourceImportCronDescription = function (_a) {
    var _b, _c;
    var dataImportCronName = _a.dataImportCronName, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var dataImportCron = useK8sWatchResource({
        groupVersionKind: DataImportCronModelGroupVersionKind,
        name: dataImportCronName,
        namespace: namespace,
    })[0];
    if (!dataImportCron)
        return null;
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('The DataImportCron polls disk images and imports them as PersistentVolumeClaims. You can configure the image source and other settings on the DataImportCron details page.'), descriptionData: React.createElement(ResourceLink, { groupVersionKind: DataImportCronModelGroupVersionKind, name: (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _b === void 0 ? void 0 : _b.name, namespace: (_c = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _c === void 0 ? void 0 : _c.namespace }), descriptionHeader: t('DataImportCron'), isPopover: true }));
};
export default DataSourceImportCronDescription;
//# sourceMappingURL=DataSourceImportCronDescription.js.map