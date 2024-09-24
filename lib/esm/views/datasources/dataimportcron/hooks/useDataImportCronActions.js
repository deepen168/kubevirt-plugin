import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import DataImportCronModel, { DataImportCronModelRef, } from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import DeleteModal from '@kubevirt-utils/components/DeleteModal/DeleteModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sDelete, k8sGet, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Split, SplitItem } from '@patternfly/react-core';
import { isDataResourceOwnedBySSP } from '../../utils';
import { DataImportCronManageModal } from '../details/DataImportCronManageModal/DataImportCronManageModal';
export var useDataImportCronActionsProvider = function (dataImportCron) {
    var _a, _b;
    var dataSourceName = (_a = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _a === void 0 ? void 0 : _a.managedDataSource;
    var _c = React.useState(), dataSource = _c[0], setDataSource = _c[1];
    var _d = React.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var navigate = useNavigate();
    var isOwnedBySSP = isDataResourceOwnedBySSP(dataImportCron);
    var lazyLoadDataSource = React.useCallback(function () {
        var _a;
        if (dataSourceName && !dataSource && !isOwnedBySSP) {
            setIsLoading(true);
            k8sGet({
                model: DataSourceModel,
                name: dataSourceName,
                ns: (_a = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
            })
                .then(function (ds) { return setDataSource(ds); })
                .catch(kubevirtConsole.error)
                .finally(function () { return setIsLoading(false); });
        }
    }, [dataSource, dataSourceName, (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.metadata) === null || _b === void 0 ? void 0 : _b.namespace, isOwnedBySSP]);
    var actions = React.useMemo(function () { return [
        {
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DataImportCronManageModal, { onClose: function () {
                            onClose();
                            setDataSource(undefined);
                        }, dataImportCron: dataImportCron, dataSource: dataSource, isOpen: isOpen }));
                });
            },
            disabled: !dataImportCron || isOwnedBySSP || isLoading,
            id: 'dataimportcron-action-manage-source',
            label: (React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, null, t('Manage source')),
                ' ',
                isLoading && (React.createElement(SplitItem, null,
                    React.createElement(Loading, null))))),
        },
        {
            cta: function () {
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
            },
            disabled: false,
            id: 'dataimportcron-action-edit-labels',
            label: t('Edit labels'),
        },
        {
            cta: function () {
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
            },
            disabled: false,
            id: 'dataimportcron-action-edit-annotations',
            label: t('Edit annotations'),
        },
        {
            cta: function () {
                return navigate("/k8s/ns/".concat(dataImportCron.metadata.namespace, "/").concat(DataImportCronModelRef, "/").concat(dataImportCron.metadata.name, "/yaml"));
            },
            disabled: false,
            id: 'dataimportcron-action-edit-DataImportCron',
            label: t('Edit'),
        },
        {
            accessReview: asAccessReview(DataImportCronModel, dataImportCron, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteModal, { onDeleteSubmit: function () {
                            return k8sDelete({
                                model: DataImportCronModel,
                                resource: dataImportCron,
                            });
                        }, headerText: t('Delete DataImportCron?'), isOpen: isOpen, obj: dataImportCron, onClose: onClose }));
                });
            },
            id: 'dataimportcron-action-delete',
            label: t('Delete'),
        },
    ]; }, [t, isLoading, dataImportCron, isOwnedBySSP, createModal, dataSource, navigate]);
    return [actions, lazyLoadDataSource];
};
//# sourceMappingURL=useDataImportCronActions.js.map