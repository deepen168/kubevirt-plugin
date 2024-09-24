import virtualizationIcon from './virtualization-icon';
import './perspective.scss';
export var icon = {
    default: virtualizationIcon,
};
export var getLandingPageURL = function () { return "/k8s/all-namespaces/virtualization-overview"; };
export var getImportRedirectURL = function (namespace) { return "/k8s/ns/".concat(namespace, "/virtualization-overview"); };
//# sourceMappingURL=perspective.js.map