import { NODE_PORT_ADDRESS } from '@kubevirt-utils/hooks/useFeatures/constants';
import { getCloudInitCredentials } from '@kubevirt-utils/resources/vmi';
import { getSSHNodePort } from '@kubevirt-utils/utils/utils';
import { useFeatures } from '../../hooks/useFeatures/useFeatures';
import { SERVICE_TYPES } from './constants';
export var isLoadBalancerBonded = function (sshService) { var _a, _b, _c, _d; return Boolean((_d = (_c = (_b = (_a = sshService === null || sshService === void 0 ? void 0 : sshService.status) === null || _a === void 0 ? void 0 : _a.loadBalancer) === null || _b === void 0 ? void 0 : _b.ingress) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.ip); };
// SSH over NodePort
var useSSHCommand = function (vm, sshService) {
    var _a, _b, _c, _d, _e;
    var nodePortAddress = useFeatures(NODE_PORT_ADDRESS).featureEnabled;
    var consoleHostname = function () {
        var _a, _b, _c, _d, _e, _f;
        if (((_a = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _a === void 0 ? void 0 : _a.type) === SERVICE_TYPES.LOAD_BALANCER) {
            return (_e = (_d = (_c = (_b = sshService === null || sshService === void 0 ? void 0 : sshService.status) === null || _b === void 0 ? void 0 : _b.loadBalancer) === null || _c === void 0 ? void 0 : _c.ingress) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.ip;
        }
        if (((_f = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _f === void 0 ? void 0 : _f.type) === SERVICE_TYPES.NODE_PORT) {
            return nodePortAddress;
        }
        return window.location.hostname; // fallback to console hostname
    };
    var users = getCloudInitCredentials(vm).users;
    var user = (_a = users === null || users === void 0 ? void 0 : users[0]) === null || _a === void 0 ? void 0 : _a.name;
    var sshServicePort = ((_b = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _b === void 0 ? void 0 : _b.type) === SERVICE_TYPES.LOAD_BALANCER
        ? (_e = (_d = (_c = sshService === null || sshService === void 0 ? void 0 : sshService.spec) === null || _c === void 0 ? void 0 : _c.ports) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.port
        : getSSHNodePort(sshService);
    var command = 'ssh ';
    if (user)
        command += "".concat(user, "@");
    command += "".concat(consoleHostname(), " -p ").concat(sshServicePort);
    return {
        command: command,
        sshServiceRunning: Boolean(sshService),
        user: user,
    };
};
export default useSSHCommand;
//# sourceMappingURL=useSSHCommand.js.map