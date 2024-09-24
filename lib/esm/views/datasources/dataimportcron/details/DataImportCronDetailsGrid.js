import React from 'react';
import { DataSourceModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import MetadataLabels from '@kubevirt-utils/components/MetadataLabels/MetadataLabels';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import OwnerDetailsItem from '@kubevirt-utils/components/OwnerDetailsItem/OwnerDetailsItem';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { k8sPatch, ResourceLink, useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem } from '@patternfly/react-core';
import DataSourceAnnotations from '../../details/components/DataSourceAnnotations/DataSourceAnnotations';
import { DataImportCronManageDetails } from './DataImportCronManageDetails/DataImportCronManageDetails';
import { DataImportCronManageModal } from './DataImportCronManageModal/DataImportCronManageModal';
export var DataImportCronDetailsGrid = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var dataImportCron = _a.dataImportCron;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var dataSource = useK8sWatchResource({
        groupVersionKind: DataSourceModelGroupVersionKind,
        name: (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _b === void 0 ? void 0 : _b.managedDataSource,
        namespace: (_c = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _c === void 0 ? void 0 : _c.namespace,
    })[0];
    return (React.createElement(Grid, { hasGutter: true },
        React.createElement(GridItem, { span: 5 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
                    bodyContent: t('Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. '), breadcrumb: "DataImportCron.metadata.name", "data-test-id": "".concat((_d = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _d === void 0 ? void 0 : _d.name, "-name"), descriptionData: (_e = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _e === void 0 ? void 0 : _e.name, descriptionHeader: t('Name'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/identifiers#names" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L102-L104
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L102-L104
                    bodyContent: t('Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. '), descriptionData: React.createElement(ResourceLink, { kind: "Namespace", name: (_f = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _f === void 0 ? void 0 : _f.namespace }), breadcrumb: "DataImportCron.metadata.namespace", descriptionHeader: t('Namespace'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/namespaces" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                    bodyContent: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. '), descriptionData: React.createElement(MetadataLabels, { labels: (_g = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _g === void 0 ? void 0 : _g.labels, model: DataImportCronModel }), onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(LabelsModal, { onLabelsSubmit: function (labels) {
                                    return k8sPatch({
                                        data: [
                                            {
                                                op: 'replace',
                                                path: '/metadata/labels',
                                                value: labels,
                                            },
                                        ],
                                        model: DataImportCronModel,
                                        resource: dataImportCron,
                                    });
                                }, isOpen: isOpen, obj: dataImportCron, onClose: onClose }));
                        });
                    }, breadcrumb: "DataImportCron.metadata.labels", "data-test-id": "".concat((_h = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _h === void 0 ? void 0 : _h.name, "-labels"), descriptionHeader: t('Labels'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/labels", showEditOnTitle: true }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
                    bodyContent: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. '), descriptionData: React.createElement(DataSourceAnnotations, { annotations: (_j = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _j === void 0 ? void 0 : _j.annotations }), onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(AnnotationsModal, { onSubmit: function (updatedAnnotations) {
                                    return k8sPatch({
                                        data: [
                                            {
                                                op: 'replace',
                                                path: '/metadata/annotations',
                                                value: updatedAnnotations,
                                            },
                                        ],
                                        model: DataImportCronModel,
                                        resource: dataImportCron,
                                    });
                                }, isOpen: isOpen, obj: dataImportCron, onClose: onClose }));
                        });
                    }, breadcrumb: "DataImportCron.metadata.annotations", descriptionHeader: t('Annotations'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/annotations" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                    bodyContent: t('Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.'), breadcrumb: "DataImportCron.metadata.creationTimestamp", descriptionData: React.createElement(Timestamp, { timestamp: (_k = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _k === void 0 ? void 0 : _k.creationTimestamp }), descriptionHeader: t('Created at'), isPopover: true }),
                React.createElement(OwnerDetailsItem, { obj: dataImportCron }),
                React.createElement(DataImportCronManageDetails, { onEditClick: function () {
                        return createModal(function (_a) {
                            var isOpen = _a.isOpen, onClose = _a.onClose;
                            return (React.createElement(DataImportCronManageModal, { dataImportCron: dataImportCron, dataSource: dataSource, isOpen: isOpen, onClose: onClose }));
                        });
                    }, dataImportCron: dataImportCron, dataSource: dataSource })))));
};
//# sourceMappingURL=DataImportCronDetailsGrid.js.map