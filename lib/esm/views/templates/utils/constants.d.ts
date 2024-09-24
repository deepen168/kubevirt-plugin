export declare const ANNOTATIONS: {
    displayName: string;
    providerDisplayName: string;
    providerName: string;
};
export declare const DESCHEDULER_URL = "https://kubevirt.io/user-guide/operations/node_assignment/#node-balancing-with-descheduler";
export declare const LABELS: {
    name: string;
    namespace: string;
    provider: string;
    type: string;
};
export declare const SOURCE_TYPES: {
    defaultSource: string;
    httpSource: string;
    pvcSource: string;
    registrySource: string;
    uploadSource: string;
};
export declare type SOURCE_OPTIONS_IDS = typeof SOURCE_TYPES.httpSource | typeof SOURCE_TYPES.pvcSource | typeof SOURCE_TYPES.registrySource | typeof SOURCE_TYPES.uploadSource;
export declare const SUPPORT_URL = "https://access.redhat.com/articles/4234591";
export declare const NO_EDIT_TEMPLATE_PERMISSIONS = "Can not edit in view-only mode";
export declare const NO_DELETE_TEMPLATE_PERMISSIONS = "Can not delete in view-only mode";
