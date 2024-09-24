export var exposedModules = {
    LogsStandAlone: './views/virtualmachines/details/tabs/diagnostic/VirtualMachineLogViewer/VirtualMachineLogViewerStandAlone/VirtualMachineLogViewerStandAlone.tsx',
    useVirtualMachineActionsProvider: './views/virtualmachines/actions/hooks/useVirtualMachineActionsProvider.ts',
    VirtualMachineNavPage: './views/virtualmachines/details/VirtualMachineNavPage.tsx',
    VirtualMachinesList: './views/virtualmachines/list/VirtualMachinesList.tsx',
};
export var extensions = [
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: { $codeRef: 'LogsStandAlone' },
            exact: false,
            path: ['/k8s/ns/:ns/kubevirt.io~v1~VirtualMachine/:name/diagnostics/logs/standalone'],
        },
        type: 'console.page/route/standalone',
    },
    {
        properties: {
            model: {
                group: 'kubevirt.io',
                kind: 'VirtualMachine',
                version: 'v1',
            },
            provider: {
                $codeRef: 'useVirtualMachineActionsProvider',
            },
        },
        type: 'console.action/resource-provider',
    },
    {
        properties: {
            component: { $codeRef: 'VirtualMachineNavPage' },
            model: {
                group: 'kubevirt.io',
                kind: 'VirtualMachine',
                version: 'v1',
            },
        },
        type: 'console.page/resource/details',
    },
    {
        properties: {
            component: {
                $codeRef: 'VirtualMachinesList',
            },
            model: {
                group: 'kubevirt.io',
                kind: 'VirtualMachine',
                version: 'v1',
            },
        },
        type: 'console.page/resource/list',
    },
];
//# sourceMappingURL=extensions.js.map