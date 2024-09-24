import { INSTANCE_TYPE_ENABLED } from '@kubevirt-utils/hooks/useFeatures/constants';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
var useEnableInstanceTypeModal = function (isInstanceTypeTab, navigateToCatalog) {
    var _a = useFeatures(INSTANCE_TYPE_ENABLED), canEdit = _a.canEdit, featureEnabled = _a.featureEnabled, loading = _a.loading, toggleFeature = _a.toggleFeature;
    var onClose = function () {
        navigateToCatalog();
    };
    var onEnableInstanceTypeFeature = function () {
        toggleFeature(true);
    };
    return {
        canEdit: canEdit,
        isOpen: isInstanceTypeTab && !featureEnabled,
        loading: loading,
        onClose: onClose,
        onEnableInstanceTypeFeature: onEnableInstanceTypeFeature,
    };
};
export default useEnableInstanceTypeModal;
//# sourceMappingURL=useEnableInstanceTypeModal.js.map