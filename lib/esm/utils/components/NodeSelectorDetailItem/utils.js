import { isEmpty } from '@kubevirt-utils/utils/utils';
/**
 * Get node selectors presentation
 * @date 3/14/2022 - 1:02:01 PM
 *
 * @param {V1VirtualMachineInstanceSpec['nodeSelector']} nodeSelector - node selectors
 * @returns {string}
 */
export var getNodeSelectorLabel = function (nodeSelector) {
    return !isEmpty(nodeSelector) &&
        Object.entries(nodeSelector)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(key, "=").concat(value);
        })
            .join(', ');
};
//# sourceMappingURL=utils.js.map