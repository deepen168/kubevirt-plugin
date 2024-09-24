export var exposedModules = {
    Checkups: './views/checkups/Checkups.tsx',
    CheckupsNetworkDetailsPage: './views/checkups/network/details/CheckupsNetworkDetailsPage.tsx',
    CheckupsNetworkForm: './views/checkups/network/components/form/CheckupsNetworkForm.tsx',
    CheckupsStorageDetailsPage: './views/checkups/storage/details/CheckupsStorageDetailsPage.tsx',
    CheckupsStorageForm: './views/checkups/storage/components/form/CheckupsStorageForm.tsx',
};
export var extensions = [
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            dataAttributes: {
                'data-quickstart-id': 'qs-nav-virtualization-checkups',
                'data-test-id': 'virtualization-checkups-nav-item',
            },
            href: 'checkups',
            id: 'virtualization-checkups',
            insertAfter: 'migrationpolicies',
            name: '%plugin__kubevirt-plugin~Checkups%',
            prefixNamespaced: true,
            section: 'virtualization',
        },
        type: 'console.navigation/href',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: {
                $codeRef: 'CheckupsNetworkForm',
            },
            path: ['/k8s/ns/:ns/checkups/network/form'],
        },
        type: 'console.page/route',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: {
                $codeRef: 'CheckupsNetworkDetailsPage',
            },
            path: ['/k8s/ns/:ns/checkups/network/:vmName'],
        },
        type: 'console.page/route',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: {
                $codeRef: 'CheckupsStorageForm',
            },
            path: ['/k8s/ns/:ns/checkups/storage/form'],
        },
        type: 'console.page/route',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: {
                $codeRef: 'CheckupsStorageDetailsPage',
            },
            path: ['/k8s/ns/:ns/checkups/storage/:vmName'],
        },
        type: 'console.page/route',
    },
    {
        properties: {
            component: {
                $codeRef: 'Checkups',
            },
            path: ['/k8s/ns/:ns/checkups', '/k8s/all-namespaces/checkups'],
        },
        type: 'console.page/route',
    },
];
//# sourceMappingURL=extensions.js.map