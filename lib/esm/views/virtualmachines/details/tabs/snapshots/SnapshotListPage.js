import React from 'react';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SnapshotModal from '@kubevirt-utils/components/SnapshotModal/SnapshotModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageCreateButton } from '@openshift-console/dynamic-plugin-sdk';
import { Title } from '@patternfly/react-core';
import { printableVMStatus } from '../../../utils';
import SnapshotList from './components/list/SnapshotList';
import useSnapshotData from './hooks/useSnapshotData';
import './SnapshotListPage.scss';
var SnapshotListPage = function (_a) {
    var _b, _c, _d;
    var vm = _a.obj;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var _e = useSnapshotData((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace), error = _e.error, loaded = _e.loaded, restoresMap = _e.restoresMap, snapshots = _e.snapshots;
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageBody, null,
            React.createElement(Title, { className: "snapshot-list-page__title", headingLevel: "h2" }, t('Snapshots')),
            React.createElement(ListPageCreateButton, { onClick: function () {
                    return createModal(function (_a) {
                        var isOpen = _a.isOpen, onClose = _a.onClose;
                        return (React.createElement(SnapshotModal, { isOpen: isOpen, onClose: onClose, vm: vm }));
                    });
                }, className: "list-page-create-button-margin" }, t('Take snapshot')),
            React.createElement(SnapshotList, { error: error, isVMRunning: ((_d = vm === null || vm === void 0 ? void 0 : vm.status) === null || _d === void 0 ? void 0 : _d.printableStatus) !== printableVMStatus.Stopped, loaded: loaded, restoresMap: restoresMap, snapshots: snapshots }))));
};
export default SnapshotListPage;
//# sourceMappingURL=SnapshotListPage.js.map