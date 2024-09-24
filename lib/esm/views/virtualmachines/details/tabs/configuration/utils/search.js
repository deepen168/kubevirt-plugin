var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getInstanceTypeMatcher } from '@kubevirt-utils/resources/vm';
export var getDetailsTabBootIds = function () { return [
    { description: t('Change boot mode'), id: 'boot-mode', title: t('Boot mode') },
    { description: '', id: 'boot-management', title: t('Boot management') },
    { description: t('Change boot order'), id: 'boot-order', title: t('Boot order') },
    { description: '', id: 'start-pause-mode', title: t('Start in pause mode') },
]; };
export var getDetailsTabHardwareIds = function () { return [
    { description: '', id: 'hardware-devices', title: t('Hardware devices') },
    { description: '', id: 'gpu-devices', title: t('GPU devices') },
    { description: '', id: 'host-devices', title: t('Host devices') },
]; };
export var getDetailsTabMainIds = function (vm) { return [
    { description: '', id: 'guest-system-log-access', title: t('Guest system log access') },
    { description: '', id: 'headless-mode', title: t('Headless mode') },
    { description: '', id: 'hostname', title: t('Hostname') },
    { description: '', id: 'cpu-memory', title: t('CPU | Memory') },
    {
        description: '',
        id: 'workload-profile',
        isDisabled: Boolean(getInstanceTypeMatcher(vm)),
        title: t('Workload profile'),
    },
    { description: 'VirtualMachine Description', id: 'description', title: t('Description') },
    { description: '', id: 'details', title: t('Details') },
]; };
export var getStorageTabIds = function () { return [
    { description: '', id: 'disks', title: t('Disks') },
    { description: '', id: 'environment', title: t('Environment') },
]; };
export var getNetworkTabIds = function () { return [
    { description: '', id: 'network', title: t('Network') },
]; };
export var getSchedulingTabIds = function () { return [
    { description: '', id: 'scheduling', title: t('Scheduling') },
    { description: '', id: 'node-selector', title: t('Node selector') },
    { description: '', id: 'tolerations', title: t('Tolerations') },
    { description: '', id: 'affinity', title: t('Affinity') },
    { description: '', id: 'descheduler', title: t('Descheduler') },
    { description: '', id: 'dedicated-resources', title: t('Dedicated resources') },
    { description: '', id: 'eviction-strategy', title: t('Eviction strategy') },
]; };
export var getSSHTabIds = function () { return [
    { description: '', id: 'ssh', title: t('SSH') },
    { description: '', id: 'ssh-access', title: t('SSH access') },
    { description: '', id: 'public-ssh-key', title: t('Public SSH key') },
]; };
export var getInitialRunTabIds = function () { return [
    { description: '', id: 'sysprep', title: t('Sysprep') },
    { description: '', id: 'cloud-init', title: t('Cloud-init') },
    { description: '', id: 'initial-run', title: t('Initial run') },
]; };
var getTabsIds = function (vm) { return ({
    details: __spreadArray(__spreadArray(__spreadArray([], getDetailsTabBootIds(vm), true), getDetailsTabHardwareIds(vm), true), getDetailsTabMainIds(vm), true),
    initial: getInitialRunTabIds(vm),
    network: getNetworkTabIds(vm),
    scheduling: getSchedulingTabIds(vm),
    ssh: getSSHTabIds(vm),
    storage: getStorageTabIds(vm),
}); };
export var getSearchItems = function (vm) {
    return Object.entries(getTabsIds(vm))
        .map(function (_a) {
        var tab = _a[0], value = _a[1];
        return value.map(function (element) { return ({ element: element, tab: tab }); });
    })
        .flat()
        .sort(function (a, b) { return a.element.title.localeCompare(b.element.title); });
};
export var expandURLHash = function (ids, hash, callBack) {
    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
        var val = ids_1[_i];
        if (hash.toLowerCase().endsWith(val.toLowerCase())) {
            return callBack(true);
        }
    }
};
//# sourceMappingURL=search.js.map