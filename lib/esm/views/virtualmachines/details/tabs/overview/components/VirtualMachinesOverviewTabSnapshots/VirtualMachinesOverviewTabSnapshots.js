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
import * as React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SnapshotModal from '@kubevirt-utils/components/SnapshotModal/SnapshotModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Bullseye, Button, ButtonVariant, Card, CardBody, CardFooter, CardTitle, Divider, Label, } from '@patternfly/react-core';
import useSnapshotData from '../../../snapshots/hooks/useSnapshotData';
import { createURL } from '../../utils/utils';
import VirtualMachinesOverviewTabSnapshotsRow from './VirtualMachinesOverviewTabSnapshotsRow';
import './virtual-machines-overview-tab-snapshots.scss';
var VirtualMachinesOverviewTabSnapshots = function (_a) {
    var _b, _c;
    var vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var snapshots = useSnapshotData((_b = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _b === void 0 ? void 0 : _b.name, (_c = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _c === void 0 ? void 0 : _c.namespace).snapshots;
    var createModal = useModal().createModal;
    var snapshotsTabLink = createURL('snapshots', location === null || location === void 0 ? void 0 : location.pathname);
    return (React.createElement("div", { className: "VirtualMachinesOverviewTabSnapshots--main", "data-test-id": "virtual-machine-overview-snapshots" },
        React.createElement(Card, null,
            React.createElement(CardTitle, { className: "text-muted" },
                React.createElement(Link, { to: snapshotsTabLink }, t('Snapshots ({{snapshots}})', { snapshots: snapshots.length || 0 })),
                React.createElement(Button, { isInline: true, onClick: function () { return createModal(function (props) { return React.createElement(SnapshotModal, __assign({ vm: vm }, props)); }); }, variant: ButtonVariant.link }, t('Take snapshot'))),
            React.createElement(Divider, null),
            React.createElement(CardBody, { isFilled: true }, !isEmpty(snapshots) ? (snapshots === null || snapshots === void 0 ? void 0 : snapshots.map(function (snapshot) {
                var _a;
                return (React.createElement(VirtualMachinesOverviewTabSnapshotsRow, { key: (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.metadata) === null || _a === void 0 ? void 0 : _a.uid, snapshot: snapshot, vm: vm }));
            })) : (React.createElement(Bullseye, null, t('No snapshots found')))),
            !isEmpty(snapshots) && (React.createElement(CardFooter, null,
                React.createElement(Link, { to: snapshotsTabLink },
                    React.createElement(Label, { color: "blue", variant: "outline" }, t('View More'))))))));
};
export default VirtualMachinesOverviewTabSnapshots;
//# sourceMappingURL=VirtualMachinesOverviewTabSnapshots.js.map