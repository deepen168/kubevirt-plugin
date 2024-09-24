export var KUBEVIRT = 'kubevirt';
export var DEFAULT_NAMESPACE = 'default';
export var OPENSHIFT_NAMESPACE = 'openshift';
export var KUBEVIRT_OS_IMAGES_NS = 'kubevirt-os-images';
export var OPENSHIFT_OS_IMAGES_NS = 'openshift-virtualization-os-images';
export var OPENSHIFT_SRIOV_NETWORK_OPERATOR_NS = 'openshift-sriov-network-operator';
export var OPENSHIFT_MULTUS_NS = 'openshift-multus';
export var VENDOR_LABEL = 'instancetype.kubevirt.io/vendor';
export var ROOTDISK = 'rootdisk';
export var KUBEVIRT_HYPERCONVERGED = 'kubevirt-hyperconverged';
export var OPENSHIFT_CNV = 'openshift-cnv';
export var K8S_OPS;
(function (K8S_OPS) {
    K8S_OPS["ADD"] = "add";
    K8S_OPS["REMOVE"] = "remove";
    K8S_OPS["REPLACE"] = "replace";
})(K8S_OPS || (K8S_OPS = {}));
//# sourceMappingURL=constants.js.map