var _a;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var PORT = 22000;
export var SSH_PORT = 22;
export var VMI_LABEL_AS_SSH_SERVICE_SELECTOR = 'kubevirt.io/domain';
export var NODE_PORTS_LINK = 'https://access.redhat.com/documentation/en-us/openshift_container_platform/4.14/html/networking/configuring-ingress-cluster-traffic#nw-using-nodeport_configuring-ingress-cluster-traffic-nodeport';
export var SERVICE_TYPES;
(function (SERVICE_TYPES) {
    SERVICE_TYPES["LOAD_BALANCER"] = "LoadBalancer";
    SERVICE_TYPES["NODE_PORT"] = "NodePort";
    SERVICE_TYPES["NONE"] = "None";
})(SERVICE_TYPES || (SERVICE_TYPES = {}));
export var serviceTypeTitles = (_a = {},
    _a[SERVICE_TYPES.LOAD_BALANCER] = t('SSH over LoadBalancer'),
    _a[SERVICE_TYPES.NODE_PORT] = t('SSH over NodePort'),
    _a[SERVICE_TYPES.NONE] = t('None'),
    _a);
//# sourceMappingURL=constants.js.map