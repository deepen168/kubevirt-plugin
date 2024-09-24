import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { MigrationPolicyModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import { dateTimeFormatter } from '@kubevirt-utils/components/Timestamp/utils/datetime';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
import useVirtualMachineInstanceMigration from '@kubevirt-utils/resources/vmi/hooks/useVirtualMachineInstanceMigration';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
import { Popover, PopoverPosition, Stack, StackItem } from '@patternfly/react-core';
import { getMigrationPhaseIcon } from './utils';
var MigrationProgressPopover = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    var children = _a.children, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var vmim = useVirtualMachineInstanceMigration(vmi);
    var Icon = getMigrationPhaseIcon((_b = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _b === void 0 ? void 0 : _b.phase);
    var _p = useState(0), seconds = _p[0], setSeconds = _p[1];
    var _q = useState(0), minutes = _q[0], setMinutes = _q[1];
    useEffect(function () {
        var _a, _b, _c, _d;
        if ((_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.migrationState) === null || _b === void 0 ? void 0 : _b.startTimestamp) {
            var interval_1 = setInterval(function () {
                setSeconds(function (sec) {
                    if (sec + 1 === 60) {
                        setMinutes(function (min) { return min + 1; });
                        return 0;
                    }
                    return sec + 1;
                });
            }, 1000);
            return function () { return clearInterval(interval_1); };
        }
        if ((_d = (_c = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _c === void 0 ? void 0 : _c.migrationState) === null || _d === void 0 ? void 0 : _d.endTimestamp) {
            setSeconds(0);
            setMinutes(0);
        }
    }, [(_d = (_c = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _c === void 0 ? void 0 : _c.migrationState) === null || _d === void 0 ? void 0 : _d.endTimestamp, (_f = (_e = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _e === void 0 ? void 0 : _e.migrationState) === null || _f === void 0 ? void 0 : _f.startTimestamp]);
    return (React.createElement(Popover, { bodyContent: React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Phase')),
                " ",
                React.createElement(Icon, null),
                " ", (_g = vmim === null || vmim === void 0 ? void 0 : vmim.status) === null || _g === void 0 ? void 0 :
                _g.phase),
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Started')),
                ' ',
                ((_j = (_h = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _h === void 0 ? void 0 : _h.migrationState) === null || _j === void 0 ? void 0 : _j.startTimestamp) &&
                    dateTimeFormatter.format(new Date((_l = (_k = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _k === void 0 ? void 0 : _k.migrationState) === null || _l === void 0 ? void 0 : _l.startTimestamp))),
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Elapsed time')),
                ' ',
                t('{{minutes}}{{seconds}} seconds', {
                    minutes: minutes ? "".concat(minutes, " minutes, ") : null,
                    seconds: seconds,
                })),
            React.createElement(StackItem, null,
                React.createElement("b", null, t('Policy')),
                ' ',
                ((_o = (_m = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _m === void 0 ? void 0 : _m.migrationState) === null || _o === void 0 ? void 0 : _o.migrationPolicyName) ? (React.createElement(ResourceLink, { groupVersionKind: MigrationPolicyModelGroupVersionKind, name: vmi.status.migrationState.migrationPolicyName })) : (React.createElement(MutedTextSpan, { text: "No MigrationPolicy" }))),
            React.createElement(StackItem, null,
                React.createElement(Link, { to: "".concat(getResourceUrl({
                        model: VirtualMachineModel,
                        resource: vmi,
                    }), "/metrics?migration") }, t('Migration metrics')))), headerContent: 'VirtualMachine migration', position: PopoverPosition.right },
        React.createElement(React.Fragment, null, children)));
};
export default MigrationProgressPopover;
//# sourceMappingURL=MigrationProgressPopover.js.map