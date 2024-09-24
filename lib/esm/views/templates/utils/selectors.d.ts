export declare const getAffinity: (template: V1Template) => any;
export declare const getEvictionStrategy: (template: V1Template) => string;
export declare const getNodeSelector: (template: V1Template) => any;
export declare const getTemplateProviderName: (template: V1Template) => string;
export declare const getTemplateWorkload: (template: V1Template) => string;
export declare const getTolerations: (template: V1Template) => any;
export declare const getWorkloadProfile: (template: V1Template) => string;
export declare const getVMTemplateBaseName: (template: V1Template) => {
    name: string;
    namespace: string;
};
