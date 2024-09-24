var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { modelToRef, TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useKubevirtUserSettingsTableColumns from '@kubevirt-utils/hooks/useKubevirtUserSettings/useKubevirtUserSettingsTableColumns';
import { sortable } from '@patternfly/react-table';
var useVirtualMachineTemplatesColumns = function (namespace) {
    var t = useKubevirtTranslation().t;
    var columns = __spreadArray(__spreadArray([
        {
            id: 'name',
            props: { className: 'pf-m-width-30' },
            sort: 'metadata.name',
            title: t('Name'),
            transforms: [sortable],
        }
    ], (!namespace
        ? [
            {
                id: 'namespace',
                sort: 'metadata.namespace',
                title: t('Namespace'),
                transforms: [sortable],
            },
        ]
        : []), true), [
        {
            id: 'workload',
            props: { className: 'pf-m-width-15' },
            sort: 'objects[0].spec.template.metadata.annotations.["vm.kubevirt.io/workload"]',
            title: t('Workload profile'),
            transforms: [sortable],
        },
        {
            id: 'availability',
            props: { className: 'pf-m-width-30' },
            title: t('Boot source'),
        },
        {
            additional: true,
            id: 'cpu',
            title: t('CPU | Memory'),
        },
        {
            id: '',
            props: { className: 'dropdown-kebab-pf pf-v5-c-table__action' },
            title: '',
        },
    ], false);
    var _a = useKubevirtUserSettingsTableColumns({
        columnManagementID: modelToRef(TemplateModel),
        columns: columns,
    }), activeColumns = _a[0], loadedColumns = _a[2];
    return [columns, activeColumns, loadedColumns];
};
export default useVirtualMachineTemplatesColumns;
//# sourceMappingURL=useVirtualMachineTemplatesColumns.js.map