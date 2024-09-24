export * from '@kubevirt-ui/kubevirt-api/console';
export var UploadTokenRequestModel = {
    abbr: 'utr',
    apiGroup: 'upload.cdi.kubevirt.io',
    apiVersion: 'v1beta1',
    crd: true,
    id: 'uploadtokenrequest',
    kind: 'UploadTokenRequest',
    label: 'Upload Token Request',
    labelPlural: 'Upload Token Requests',
    namespaced: true,
    plural: 'uploadtokenrequests',
};
export var QuickStartModel = {
    abbr: 'CQS',
    apiGroup: 'console.openshift.io',
    apiVersion: 'v1',
    crd: true,
    kind: 'ConsoleQuickStart',
    label: 'ConsoleQuickStart',
    labelPlural: 'ConsoleQuickStarts',
    namespaced: false,
    plural: 'consolequickstarts',
    propagationPolicy: 'Background',
};
//# sourceMappingURL=index.js.map