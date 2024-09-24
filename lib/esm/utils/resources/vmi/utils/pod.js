/**
 * Get if the pod is in a ready status
 * @date 4/10/2022 - 8:13:37 AM
 *
 * @param {*} pod - The pod to check
 * @returns {boolean}
 */
export var isPodReady = function (pod) { var _a, _b, _c; return ((_a = pod === null || pod === void 0 ? void 0 : pod.status) === null || _a === void 0 ? void 0 : _a.phase) === 'Running' && ((_c = (_b = pod === null || pod === void 0 ? void 0 : pod.status) === null || _b === void 0 ? void 0 : _b.containerStatuses) === null || _c === void 0 ? void 0 : _c.every(function (s) { return s === null || s === void 0 ? void 0 : s.ready; })); };
/**
 * Get the vmi pod
 * @date 4/10/2022 - 8:13:37 AM
 *
 * @param {V1VirtualMachineInstance} vmi - The vmi to check
 * @param {K8sResourceCommon[]} pods - The pods to check
 * @returns {*}
 */
export var getVMIPod = function (vmi, pods) {
    var _a;
    if (!pods || !vmi) {
        return null;
    }
    var vmUID = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.uid;
    var prefixedPods = pods.filter(function (pod) {
        var _a, _b, _c;
        var podOwnerReferences = (_a = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _a === void 0 ? void 0 : _a.ownerReferences;
        return (((_b = pod === null || pod === void 0 ? void 0 : pod.metadata) === null || _b === void 0 ? void 0 : _b.namespace) === ((_c = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _c === void 0 ? void 0 : _c.namespace) &&
            podOwnerReferences &&
            (podOwnerReferences === null || podOwnerReferences === void 0 ? void 0 : podOwnerReferences.some(function (podOwnerReference) { return (podOwnerReference === null || podOwnerReference === void 0 ? void 0 : podOwnerReference.uid) === vmUID; })));
    });
    // Return the newest, most ready Pod created
    return prefixedPods
        .sort(function (a, b) {
        return a.metadata.creationTimestamp > b.metadata.creationTimestamp ? -1 : 1;
    })
        .sort(function (a) { return (isPodReady(a) ? -1 : 1); })[0];
};
//# sourceMappingURL=pod.js.map