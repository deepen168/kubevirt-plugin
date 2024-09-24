export var exposedModules = {
    dashboardActivity: 'src/views/dashboard-extensions/Activity.tsx',
    dashboardActivityUtils: 'src/views/dashboard-extensions/utils.ts',
    dashboardInventory: 'src/views/dashboard-extensions/Inventory.tsx',
    dashboardStatus: 'src/views/dashboard-extensions/KubevirtHealthPopup/KubevirtHealthPopup.tsx',
};
export var extensions = [
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            mapper: { $codeRef: 'dashboardInventory.getVMStatusGroups' },
            model: { $codeRef: 'dashboardActivityUtils.VirtualMachineModel' },
        },
        type: 'console.dashboards/overview/inventory/item',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            mapper: { $codeRef: 'dashboardInventory.getVMStatusGroups' },
            model: { $codeRef: 'dashboardActivityUtils.VirtualMachineModel' },
        },
        type: 'console.dashboards/project/overview/item',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            icon: { $codeRef: 'dashboardInventory.VMOffGroupIcon' },
            id: 'vm-stopped',
        },
        type: 'console.dashboards/overview/inventory/item/group',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: { $codeRef: 'dashboardActivity.DiskImportActivity' },
            getTimestamp: { $codeRef: 'dashboardActivityUtils.getTimestamp' },
            isActivity: { $codeRef: 'dashboardActivityUtils.isDVActivity' },
            k8sResource: {
                $codeRef: 'dashboardActivityUtils.k8sDVResource',
            },
        },
        type: 'console.dashboards/overview/activity/resource',
    },
];
//# sourceMappingURL=extensions.js.map