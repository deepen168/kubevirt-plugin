declare type UseEnableInstanceTypeModalValues = {
    canEdit: boolean;
    isOpen: boolean;
    loading: boolean;
    onClose: () => void;
    onEnableInstanceTypeFeature: () => void;
};
declare type UseEnableInstanceTypeModal = (isInstanceTypeTab: boolean, navigateToCatalog: () => void) => UseEnableInstanceTypeModalValues;
declare const useEnableInstanceTypeModal: UseEnableInstanceTypeModal;
export default useEnableInstanceTypeModal;
