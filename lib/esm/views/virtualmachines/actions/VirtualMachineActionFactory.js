var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import VirtualMachineCloneModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineCloneModel';
import VirtualMachineInstanceMigrationModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceMigrationModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import VirtualMachineSnapshotModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineSnapshotModel';
import { AnnotationsModal } from '@kubevirt-utils/components/AnnotationsModal/AnnotationsModal';
import CloneVMModal from '@kubevirt-utils/components/CloneVMModal/CloneVMModal';
import { LabelsModal } from '@kubevirt-utils/components/LabelsModal/LabelsModal';
import SnapshotModal from '@kubevirt-utils/components/SnapshotModal/SnapshotModal';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { asAccessReview } from '@kubevirt-utils/resources/shared';
import { getVMSSHSecretName } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { CopyIcon } from '@patternfly/react-icons';
import { isLiveMigratable, isRestoring, isSnapshotting, printableVMStatus } from '../utils';
import DeleteVMModal from './components/DeleteVMModal/DeleteVMModal';
import { cancelMigration, migrateVM, pauseVM, restartVM, startVM, stopVM, unpauseVM, } from './actions';
var Migrating = printableVMStatus.Migrating, Paused = printableVMStatus.Paused, Provisioning = printableVMStatus.Provisioning, Running = printableVMStatus.Running, Starting = printableVMStatus.Starting, Stopped = printableVMStatus.Stopped, Stopping = printableVMStatus.Stopping, Terminating = printableVMStatus.Terminating, Unknown = printableVMStatus.Unknown;
export var VirtualMachineActionFactory = {
    cancelMigration: function (vm, vmim, isSingleNodeCluster) {
        var _a, _b, _c;
        return {
            accessReview: {
                group: VirtualMachineInstanceMigrationModel.apiGroup,
                namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
                resource: VirtualMachineInstanceMigrationModel.plural,
                verb: 'delete',
            },
            cta: function () { return cancelMigration(vmim); },
            description: !!((_b = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _b === void 0 ? void 0 : _b.deletionTimestamp) && t('Canceling ongoing migration'),
            disabled: isSingleNodeCluster || !vmim || !!((_c = vmim === null || vmim === void 0 ? void 0 : vmim.metadata) === null || _c === void 0 ? void 0 : _c.deletionTimestamp),
            id: 'vm-action-cancel-migrate',
            label: t('Cancel migration'),
        };
    },
    clone: function (vm, createModal) {
        return {
            accessReview: asAccessReview(VirtualMachineCloneModel, vm, 'create'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(CloneVMModal, { isOpen: isOpen, onClose: onClose, source: vm }));
                });
            },
            id: 'vm-action-clone',
            label: t('Clone'),
        };
    },
    copySSHCommand: function (vm, command) {
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return command && navigator.clipboard.writeText(command); },
            description: t('SSH using virtctl'),
            disabled: isEmpty(getVMSSHSecretName(vm)),
            icon: React.createElement(CopyIcon, null),
            id: 'vm-action-copy-ssh',
            label: t('Copy SSH command'),
        };
    },
    delete: function (vm, createModal) {
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'delete'),
            cta: function () {
                return createModal(function (_a) {
                    var isOpen = _a.isOpen, onClose = _a.onClose;
                    return (React.createElement(DeleteVMModal, { isOpen: isOpen, onClose: onClose, vm: vm }));
                });
            },
            disabled: false,
            id: 'vm-action-delete',
            label: t('Delete'),
        };
    },
    editAnnotations: function (vm, createModal) {
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
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
                                model: VirtualMachineModel,
                                resource: vm,
                            });
                        }, isOpen: isOpen, obj: vm, onClose: onClose }));
                });
            },
            disabled: false,
            id: 'vm-action-edit-annotations',
            label: t('Edit annotations'),
        };
    },
    editLabels: function (vm, createModal) {
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
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
                                model: VirtualMachineModel,
                                resource: vm,
                            });
                        }, isOpen: isOpen, obj: vm, onClose: onClose }));
                });
            },
            disabled: false,
            id: 'vm-action-edit-labels',
            label: t('Edit labels'),
        };
    },
    forceStop: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () {
                return stopVM(vm, {
                    gracePeriod: 0,
                });
            },
            disabled: [Migrating, Provisioning, Stopped, Unknown].includes((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus),
            id: 'vm-action-force-stop',
            label: t('Force stop'),
        };
    },
    migrate: function (vm, isSingleNodeCluster) {
        var _a;
        return {
            accessReview: {
                group: VirtualMachineInstanceMigrationModel.apiGroup,
                namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
                resource: VirtualMachineInstanceMigrationModel.plural,
                verb: 'create',
            },
            cta: function () { return migrateVM(vm); },
            description: t('Migrate to a different Node'),
            disabled: !isLiveMigratable(vm, isSingleNodeCluster),
            id: 'vm-action-migrate',
            label: t('Migrate'),
        };
    },
    pause: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return pauseVM(vm); },
            disabled: ((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) !== Running || isSnapshotting(vm) || isRestoring(vm),
            id: 'vm-action-pause',
            label: t('Pause'),
        };
    },
    restart: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return restartVM(vm); },
            disabled: [Migrating, Provisioning, Stopped, Stopping, Terminating, Unknown].includes((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) ||
                isSnapshotting(vm) ||
                isRestoring(vm),
            id: 'vm-action-restart',
            label: t('Restart'),
        };
    },
    snapshot: function (vm, createModal) {
        return {
            accessReview: asAccessReview(VirtualMachineSnapshotModel, vm, 'create'),
            cta: function () { return createModal(function (props) { return React.createElement(SnapshotModal, __assign({ vm: vm }, props)); }); },
            id: 'vm-action-snapshot',
            label: t('Take snapshot'),
        };
    },
    start: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return startVM(vm); },
            disabled: [Migrating, Provisioning, Running, Starting, Stopping, Terminating, Unknown].includes((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) ||
                isSnapshotting(vm) ||
                isRestoring(vm),
            id: 'vm-action-start',
            label: t('Start'),
        };
    },
    stop: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return stopVM(vm); },
            disabled: [Provisioning, Stopped, Stopping, Terminating, Unknown].includes((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) ||
                isSnapshotting(vm) ||
                isRestoring(vm),
            id: 'vm-action-stop',
            label: t('Stop'),
        };
    },
    unpause: function (vm) {
        var _a;
        return {
            accessReview: asAccessReview(VirtualMachineModel, vm, 'patch'),
            cta: function () { return unpauseVM(vm); },
            disabled: ((_a = vm === null || vm === void 0 ? void 0 : vm.status) === null || _a === void 0 ? void 0 : _a.printableStatus) !== Paused,
            id: 'vm-action-unpause',
            label: t('Unpause'),
        };
    },
};
//# sourceMappingURL=VirtualMachineActionFactory.js.map