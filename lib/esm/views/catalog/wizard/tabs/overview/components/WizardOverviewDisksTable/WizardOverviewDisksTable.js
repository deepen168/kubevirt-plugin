import * as React from 'react';
import { WizardDescriptionItem } from '@catalog/wizard/components/WizardDescriptionItem';
import useWizardDisksTableData from '@catalog/wizard/tabs/disks/hooks/useWizardDisksTableData';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { readableSizeUnit } from '@kubevirt-utils/utils/units';
import { DescriptionList, Stack, StackItem } from '@patternfly/react-core';
export var WizardOverviewDisksTable = React.memo(function (_a) {
    var isInlineGrid = _a.isInlineGrid, vm = _a.vm;
    var disks = useWizardDisksTableData(vm)[0];
    var t = useKubevirtTranslation().t;
    return (React.createElement(DescriptionList, { className: "pf-c-description-list", columnModifier: { default: '3Col' }, isInlineGrid: isInlineGrid },
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, disks.map(function (disk) { return (React.createElement(StackItem, { key: disk.name }, disk.name)); })), title: t('Name') }),
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, disks.map(function (disk) { return (React.createElement(StackItem, { key: disk.name }, disk.drive)); })), title: t('Drive') }),
        React.createElement(WizardDescriptionItem, { description: React.createElement(Stack, null, disks.map(function (disk) { return (React.createElement(StackItem, { key: disk.name }, readableSizeUnit(disk.size))); })), title: t('Size') })));
});
WizardOverviewDisksTable.displayName = 'WizardOverviewDisksTable';
//# sourceMappingURL=WizardOverviewDisksTable.js.map