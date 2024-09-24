import React from 'react';
import classnames from 'classnames';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ClipboardCopy, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, } from '@patternfly/react-core';
import { isDataImportCronAutoUpdated, isDataResourceOwnedBySSP } from '../../../utils';
import './DataImportCronManageDetails.scss';
export var DataImportCronManageDetails = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var dataImportCron = _a.dataImportCron, dataSource = _a.dataSource, onEditClick = _a.onEditClick;
    var t = useKubevirtTranslation().t;
    var source = (_e = (_d = (_c = (_b = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _b === void 0 ? void 0 : _b.template.spec) === null || _c === void 0 ? void 0 : _c.source) === null || _d === void 0 ? void 0 : _d.registry) === null || _e === void 0 ? void 0 : _e.url;
    var importsToKeep = ((_g = (_f = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _f === void 0 ? void 0 : _f.importsToKeep) === null || _g === void 0 ? void 0 : _g.toString()) || t('3 (default)');
    var isAutoUpdated = isDataImportCronAutoUpdated(dataSource, dataImportCron);
    var isOwnedBySSP = isDataResourceOwnedBySSP(dataImportCron);
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(DescriptionList, { className: classnames('pf-c-description-list', 'kv-dataimportcron-managed-details') },
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: isAutoUpdated ? t('On') : t('Off'), descriptionHeader: t('Automatic updates') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: source !== null && source !== void 0 ? source : React.createElement(MutedTextSpan, { text: t('Not available') }), descriptionHeader: t('Source') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: importsToKeep, descriptionHeader: t('Retain revisions') }),
            React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement(DescriptionList, { className: "pf-c-description-list", isHorizontal: true },
                    React.createElement(DescriptionListGroup, null,
                        React.createElement(DescriptionListTerm, null, t('Cron expression')),
                        React.createElement(DescriptionListDescription, null,
                            React.createElement(ClipboardCopy, { clickTip: t('Copied'), "data-test": "cron-copy-command", hoverTip: t('Copy to clipboard'), isReadOnly: true }, (_h = dataImportCron === null || dataImportCron === void 0 ? void 0 : dataImportCron.spec) === null || _h === void 0 ? void 0 : _h.schedule)))), descriptionHeader: t('Scheduling settings') })), "data-test-id": "dataimportcron-manage-details", descriptionHeader: t('Automatic update and scheduling'), isEdit: !isOwnedBySSP, onEditClick: onEditClick, showEditOnTitle: true }));
};
//# sourceMappingURL=DataImportCronManageDetails.js.map