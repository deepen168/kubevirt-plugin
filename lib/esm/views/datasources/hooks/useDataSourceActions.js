import React, { useCallback, useMemo, useState } from 'react';
import DataImportCronModel from '@kubevirt-ui/kubevirt-api/console/models/DataImportCronModel';
import DataSourceModel from '@kubevirt-ui/kubevirt-api/console/models/DataSourceModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sGet, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Split, SplitItem } from '@patternfly/react-core';
import DeleteDataSourceModal from '../actions/DeleteDataSourceModal/DeleteDataSourceModal';
import { DataImportCronManageModal } from '../dataimportcron/details/DataImportCronManageModal/DataImportCronManageModal';
import { getDataSourceCronJob, isDataResourceOwnedBySSP } from '../utils';
export var useDataSourceActionsProvider = function (dataSource) {
    var _a;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _b = useState(), dataImportCron = _b[0], setDataImportCron = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var isOwnedBySSP = isDataResourceOwnedBySSP(dataSource);
    var dataImportCronName = getDataSourceCronJob(dataSource);
    var lazyLoadDataImportCron = useCallback(function () {
        var _a;
        if (dataImportCronName && !dataImportCron && !isOwnedBySSP) {
            setIsLoading(true);
            k8sGet({
                model: DataImportCronModel,
                name: dataImportCronName,
                ns: (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
            })
                .then(function (dic) { return setDataImportCron(dic); })
                .catch(kubevirtConsole.error)
                .finally(function () { return setIsLoading(false); });
        }
    }, [dataImportCron, dataImportCronName, (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.metadata) === null || _a === void 0 ? void 0 : _a.namespace, isOwnedBySSP]);
    var actions = useMemo(function () { return [
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
                                model: DataSourceModel,
                                resource: dataSource,
                            });
                        }, isOpen: isOpen, obj: dataSource, onClose: onClose }));
                });
            },
            disabled: false,
            id: 'datasource-action-edit-labels',
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
                                model: DataSourceModel,
                                resource: dataSource,
                            });
                        }, isOpen: isOpen, obj: dataSource, onClose: onClose }));
                });
            },
            disabled: false,
            id: 'datasource-action-edit-annotations',
            label: t('Edit annotations'),
        },
        {
            accessReview: asAccessReview(DataSourceModel, dataSource, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteDataSourceModal, { dataImportCron: dataImportCron, dataSource: dataSource, isOpen: isOpen, onClose: onClose }));
                });
            },
            id: 'datasource-action-delete',
            label: t('Delete'),
        },
        {
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DataImportCronManageModal, { onClose: function () {
                            onClose();
                            setDataImportCron(undefined);
                        }, dataImportCron: dataImportCron, dataSource: dataSource, isOpen: isOpen }));
                });
            },
            description: isOwnedBySSP && t('Red Hat DataSources cannot be edited'),
            disabled: !dataImportCron || isOwnedBySSP || isLoading,
            id: 'datasource-action-manage-source',
            label: (React.createElement(Split, { hasGutter: true },
                React.createElement(SplitItem, null, t('Manage source')),
                isLoading && (React.createElement(SplitItem, null,
                    React.createElement(Loading, null))))),
        },
    ]; }, [t, dataSource, isOwnedBySSP, dataImportCron, isLoading, createModal]);
    return [actions, lazyLoadDataImportCron];
};
//# sourceMappingURL=useDataSourceActions.js.map