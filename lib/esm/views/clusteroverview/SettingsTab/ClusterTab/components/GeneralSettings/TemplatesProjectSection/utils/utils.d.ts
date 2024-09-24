export declare const OPENSHIFT = "openshift";
export declare const getCurrentTemplatesNamespaceFromHCO: (hyperConverged: HyperConverged) => string;
export declare const updateHCOCommonTemplatesNamespace: (hyperConverged: HyperConverged, newNamespace: null | number | string, handelError: (value: string) => void, handleLoading: (value: boolean) => void) => Promise<void>;
