export var exposedModules = {
    ConsoleStandAlone: './utils/components/Consoles/ConsoleStandAlone.tsx',
    dashboardExtensions: './utils/extensions/dashboard/index.ts',
    HardwareDevicesPage: './utils/components/HardwareDevices/HardwareDevicesPage.tsx',
    icons: './utils/icons.tsx',
    kubevirtFlags: './utils/flags',
    modalProvider: './utils/components/ModalProvider/ModalProvider.tsx',
    telemetry: 'src/utils/extensions/telemetry/telemetry.ts',
};
export var extensions = [
    {
        properties: {
            provider: { $codeRef: 'modalProvider.ModalProvider' },
            useValueHook: { $codeRef: 'modalProvider.useModalValue' },
        },
        type: 'console.context-provider',
    },
    {
        properties: {
            handler: { $codeRef: 'kubevirtFlags.enableKubevirtDynamicFlag' },
        },
        type: 'console.flag',
    },
    {
        properties: { handler: { $codeRef: 'kubevirtFlags.useEnableKubevirtMenuFlags' } },
        type: 'console.flag/hookProvider',
    },
    {
        properties: {
            description: '%plugin__kubevirt-plugin~Create a Virtual Machine from a template%',
            groupId: 'developer-catalog',
            href: '/k8s/ns/:namespace/catalog/template',
            icon: { $codeRef: 'icons.vmIconElement' },
            id: 'dev-catalog-virtualization',
            label: '%plugin__kubevirt-plugin~Virtual Machines%',
        },
        type: 'dev-console.add/action',
    },
    {
        properties: {
            component: {
                $codeRef: 'HardwareDevicesPage',
            },
            path: ['/hardwaredevices'],
        },
        type: 'console.page/route',
    },
    {
        properties: {
            healthHandler: {
                $codeRef: 'dashboardExtensions.getKubevirtHealthState',
            },
            name: '%plugin__kubevirt-plugin~OpenShift Virtualization%',
            popupComponent: { $codeRef: 'dashboardStatus.default' },
            popupTitle: '%plugin__kubevirt-plugin~OpenShift Virtualization%',
            queries: ['kubevirt_hyperconverged_operator_health_status'],
            title: '%plugin__kubevirt-plugin~OpenShift Virtualization%',
        },
        type: 'console.dashboards/overview/health/prometheus',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: { $codeRef: 'ConsoleStandAlone' },
            exact: false,
            path: ['/k8s/ns/:ns/kubevirt.io~v1~VirtualMachine/:name/console/standalone'],
        },
        type: 'console.page/route/standalone',
    },
    {
        properties: {
            listener: {
                $codeRef: 'telemetry.eventMonitor',
            },
        },
        type: 'console.telemetry/listener',
    },
];
//# sourceMappingURL=extension.js.map