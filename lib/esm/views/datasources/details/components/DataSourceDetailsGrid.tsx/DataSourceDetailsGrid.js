import React from 'react';
import { getDataSourceCronJob } from 'src/views/datasources/utils';
import { PersistentVolumeClaimModel, VirtualMachineClusterPreferenceModelGroupVersionKind, } from '@kubevirt-ui/kubevirt-api/console';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { VirtualMachineClusterInstancetypeModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineClusterInstancetypeModel';
import PreferencePopoverContent from '@kubevirt-utils/components/AddBootableVolumeModal/components/VolumeMetadata/components/PreferenceSelect/PreferencePopoverContent';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import MetadataLabels from '@kubevirt-utils/components/MetadataLabels/MetadataLabels';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import OwnerDetailsItem from '@kubevirt-utils/components/OwnerDetailsItem/OwnerDetailsItem';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { DEFAULT_INSTANCETYPE_LABEL, DEFAULT_PREFERENCE_LABEL, } from '@kubevirt-utils/resources/bootableresources/constants';
import { getLabel } from '@kubevirt-utils/resources/shared';
import { k8sPatch, ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { DescriptionList, Grid, GridItem } from '@patternfly/react-core';
import DataSourceAnnotations from '../DataSourceAnnotations/DataSourceAnnotations';
import DataSourceImportCronDescription from '../DataSourceImportCronDescription/DataSourceImportCronDescription';
export var DataSourceDetailsGrid = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var dataSource = _a.dataSource;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var dataImportCron = getDataSourceCronJob(dataSource);
    var _m = ((_c = (_b = dataSource === null || dataSource === void 0 ? void 0 : dataSource.spec) === null || _b === void 0 ? void 0 : _b.source) === null || _c === void 0 ? void 0 : _c.pvc) || {}, pvcSourceName = _m.name, pvcSourceNamespace = _m.namespace;
    return (React.createElement(Grid, { hasGutter: true },
        React.createElement(GridItem, { span: 5 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L96
                    bodyContent: t('Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. '), breadcrumb: "DataSource.metadata.name", "data-test-id": "".concat((_d = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _d === void 0 ? void 0 : _d.name, "-name"), descriptionData: (_e = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _e === void 0 ? void 0 : _e.name, descriptionHeader: t('Name'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/identifiers#names" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L102-L104
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L102-L104
                    bodyContent: t('Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. '), descriptionData: React.createElement(ResourceLink, { kind: "Namespace", name: (_f = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _f === void 0 ? void 0 : _f.namespace }), breadcrumb: "DataSource.metadata.namespace", descriptionHeader: t('Namespace'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/namespaces" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                    bodyContent: t('Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. '), descriptionData: React.createElement(MetadataLabels, { labels: (_g = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _g === void 0 ? void 0 : _g.labels, model: DataSourceModel }), onEditClick: function () {
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
                                        model: DataSourceModel,
                                        resource: dataSource,
                                    });
                                }, isOpen: isOpen, obj: dataSource, onClose: onClose }));
                        });
                    }, breadcrumb: "DataSource.metadata.labels", "data-test-id": "".concat((_h = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _h === void 0 ? void 0 : _h.name, "-labels"), descriptionHeader: t('Labels'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/labels", showEditOnTitle: true }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L32
                    bodyContent: t('Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. '), descriptionData: React.createElement(DataSourceAnnotations, { annotations: (_j = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _j === void 0 ? void 0 : _j.annotations }), onEditClick: function () {
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
                                        model: DataSourceModel,
                                        resource: dataSource,
                                    });
                                }, isOpen: isOpen, obj: dataSource, onClose: onClose }));
                        });
                    }, breadcrumb: "DataSource.metadata.annotations", descriptionHeader: t('Annotations'), isEdit: true, isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/annotations" }),
                React.createElement(VirtualMachineDescriptionItem
                // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                , { 
                    // body-content text copied from: https://github.com/kubevirt-ui/kubevirt-api/blob/main/containerized-data-importer/models/V1ObjectMeta.ts#L84
                    bodyContent: t('Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.'), breadcrumb: "DataSource.metadata.creationTimestamp", descriptionData: React.createElement(Timestamp, { timestamp: (_k = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _k === void 0 ? void 0 : _k.creationTimestamp }), descriptionHeader: t('Created at'), isPopover: true }),
                React.createElement(OwnerDetailsItem, { obj: dataSource }))),
        React.createElement(GridItem, { span: 1 }),
        React.createElement(GridItem, { span: 5 },
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                dataImportCron && (React.createElement(DataSourceImportCronDescription, { dataImportCronName: dataImportCron, namespace: (_l = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _l === void 0 ? void 0 : _l.namespace })),
                pvcSourceName && pvcSourceNamespace && (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { kind: PersistentVolumeClaimModel.kind, name: pvcSourceName, namespace: pvcSourceNamespace }), descriptionHeader: t('Source') })),
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { groupVersionKind: VirtualMachineClusterInstancetypeModelGroupVersionKind, name: getLabel(dataSource, DEFAULT_INSTANCETYPE_LABEL) }), bodyContent: t('The default InstanceType for this volume.'), descriptionHeader: t('Default InstanceType'), isPopover: true }),
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(ResourceLink, { groupVersionKind: VirtualMachineClusterPreferenceModelGroupVersionKind, name: getLabel(dataSource, DEFAULT_PREFERENCE_LABEL) }), bodyContent: React.createElement(PreferencePopoverContent, null), descriptionHeader: t('Preference'), isPopover: true })))));
};
//# sourceMappingURL=DataSourceDetailsGrid.js.map