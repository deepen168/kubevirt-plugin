import { ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import { getServicesForVmi } from '@kubevirt-utils/resources/vmi';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { SSH_PORT } from './constants';
var useSSHService = function (vm) {
    var _a, _b, _c, _d;
    var watchServiceResources = {
        isList: true,
        kind: ServiceModel.kind,
        namespace: (_a = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _a === void 0 ? void 0 : _a.namespace,
    };
    var _e = useK8sWatchResource(vm && watchServiceResources), services = _e[0], servicesLoaded = _e[1], servicesError = _e[2];
    if (!vm)
        return [undefined, false];
    var vmiServices = getServicesForVmi(services, (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.labels);
    var sshVMIService = vmiServices.find(function (service) { var _a, _b; return (_b = (_a = service === null || service === void 0 ? void 0 : service.spec) === null || _a === void 0 ? void 0 : _a.ports) === null || _b === void 0 ? void 0 : _b.find(function (port) { return parseInt(port.targetPort, 10) === SSH_PORT; }); });
    return [sshVMIService, servicesLoaded || servicesError];
};
export default useSSHService;
//# sourceMappingURL=useSSHService.js.map