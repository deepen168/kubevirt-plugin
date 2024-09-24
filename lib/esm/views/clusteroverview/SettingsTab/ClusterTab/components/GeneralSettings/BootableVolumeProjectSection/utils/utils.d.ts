export declare const getCurrentBootableVolumesNamespaceFromHCO: (hyperConverged: HyperConverged) => string;
export declare const updateHCOBootableVolumesNamespace: (hyperConverged: HyperConverged, newNamespace: null | number | string, handelError: (value: string) => void, handleLoading: (value: boolean) => void) => Promise<void>;
