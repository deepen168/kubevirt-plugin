declare type UseResourcesQuantities = () => {
    loaded: boolean;
    nads: number;
    nodes: number;
    vms: number;
    vmTemplates: number;
};
declare const useResourcesQuantities: UseResourcesQuantities;
export default useResourcesQuantities;
