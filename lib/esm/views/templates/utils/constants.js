export var ANNOTATIONS = {
    displayName: 'openshift.io/display-name',
    providerDisplayName: 'openshift.io/provider-display-name',
    providerName: 'template.kubevirt.io/provider',
};
export var DESCHEDULER_URL = 'https://kubevirt.io/user-guide/operations/node_assignment/#node-balancing-with-descheduler';
export var LABELS = {
    name: 'vm.kubevirt.io/template',
    namespace: 'vm.kubevirt.io/template.namespace',
    provider: 'template.kubevirt.io/provider',
    type: 'template.kubevirt.io/type',
};
export var SOURCE_TYPES = {
    defaultSource: 'default',
    httpSource: 'http',
    pvcSource: 'pvc-clone',
    registrySource: 'registry',
    uploadSource: 'upload',
};
export var SUPPORT_URL = 'https://access.redhat.com/articles/4234591';
// t('Can not edit in view-only mode')
export var NO_EDIT_TEMPLATE_PERMISSIONS = 'Can not edit in view-only mode';
// t('Can not delete in view-only mode')
export var NO_DELETE_TEMPLATE_PERMISSIONS = 'Can not delete in view-only mode';
//# sourceMappingURL=constants.js.map