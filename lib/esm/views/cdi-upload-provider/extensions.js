export var exposedModules = {
    contextProvider: 'src/views/cdi-upload-provider/utils/context.tsx',
    pvcAlert: 'src/views/cdi-upload-provider/PVCAlertExtension.tsx',
    pvcCloneStatus: 'src/views/cdi-upload-provider/upload-pvc-form/statuses/ClonePVCStatus.tsx',
    pvcDelete: 'src/views/cdi-upload-provider/PVCDeleteAlertExtension.tsx',
    pvcSelectors: 'src/views/cdi-upload-provider/utils/selectors.ts',
    pvcUploadStatus: 'src/views/cdi-upload-provider/popover/UploadPVCPopover.tsx',
    pvcUploadUtils: 'src/views/cdi-upload-provider/utils/utils.tsx',
    UploadPVC: 'src/views/cdi-upload-provider/upload-pvc-form/UploadPVC.tsx',
    useCDIUpload: 'src/views/cdi-upload-provider/hooks/useCDIUpload.tsx',
};
export var extensions = [
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            component: {
                $codeRef: 'UploadPVC',
            },
            exact: true,
            path: ['/k8s/ns/:ns/persistentvolumeclaims/~new/data'],
        },
        type: 'console.page/route',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            provider: { $codeRef: 'contextProvider.CDIUploadProvider' },
            useValueHook: { $codeRef: 'useCDIUpload' },
        },
        type: 'console.context-provider',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            label: '%plugin__kubevirt-plugin~With Data upload form%',
            path: '~new/data',
        },
        type: 'console.pvc/create-prop',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            alert: { $codeRef: 'pvcAlert' },
        },
        type: 'console.pvc/alert',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            predicate: { $codeRef: 'pvcSelectors.isPvcUploading' },
            priority: 10,
            status: { $codeRef: 'pvcUploadStatus' },
        },
        type: 'console.pvc/status',
    },
    {
        flags: {
            required: ['KUBEVIRT_DYNAMIC'],
        },
        properties: {
            predicate: { $codeRef: 'pvcSelectors.isPvcCloning' },
            priority: 9,
            status: { $codeRef: 'pvcCloneStatus' },
        },
        type: 'console.pvc/status',
    },
    {
        properties: {
            alert: { $codeRef: 'pvcDelete' },
            onPVCKill: { $codeRef: 'pvcUploadUtils.killCDIBoundPVC' },
            predicate: { $codeRef: 'pvcSelectors.isPvcBoundToCDI' },
        },
        type: 'console.pvc/delete',
    },
];
//# sourceMappingURL=extensions.js.map