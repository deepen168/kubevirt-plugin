import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var useDiagnosticFilter = function () {
    var t = useKubevirtTranslation().t;
    var categoryFilter = {
        filter: function (selectedItems, obj) {
            var _a, _b, _c;
            return (((_a = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                ((_b = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _b === void 0 ? void 0 : _b.includes((_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.type)));
        },
        filterGroupName: t('Category'),
        items: [
            { id: 'VirtualMachines', title: t('VirtualMachines') },
            { id: 'Network', title: t('Network') },
            { id: 'Storage', title: t('Storage') },
        ],
        reducer: function (obj) {
            var _a, _b;
            if ((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.type)
                return (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.type;
            return 'Network';
        },
        type: 'category',
    };
    var conditionsFilter = {
        filter: function (selectedItems, obj) {
            var _a, _b, _c;
            return (((_a = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _a === void 0 ? void 0 : _a.length) === 0 ||
                ((_b = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.selected) === null || _b === void 0 ? void 0 : _b.includes((_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.condition)));
        },
        filterGroupName: t('Conditions'),
        items: [
            { id: 'Error', title: t('Error') },
            { id: 'Other', title: t('Other') },
        ],
        reducer: function (obj) {
            if ((obj === null || obj === void 0 ? void 0 : obj.status) === 'False')
                return 'Error';
            return 'Other';
        },
        type: 'conditions',
    };
    return [categoryFilter, conditionsFilter];
};
export default useDiagnosticFilter;
//# sourceMappingURL=useDiagnosticFilter.js.map