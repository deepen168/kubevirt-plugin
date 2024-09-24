import { saveAs } from 'file-saver';
import { ServiceModel } from '@kubevirt-ui/kubevirt-api/console';
import VirtualMachineInstanceModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineInstanceModel';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { kubevirtConsole } from '@kubevirt-utils/utils/utils';
import { k8sCreate, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { buildOwnerReference } from '../../../../../resources/shared';
import { RDP_CONSOLE_TYPE, SPICE_CONSOLE_TYPE, VNC_CONSOLE_TYPE } from '../../utils/ConsoleConsts';
import { DEFAULT_RDP_MIMETYPE, DEFAULT_RDP_PORT, DEFAULT_VV_MIMETYPE, MULTUS, POD, TEMPLATE_VM_NAME_LABEL, VMI_LABEL_AS_RDP_SERVICE_SELECTOR, } from './constants';
export var getServicePort = function (service, targetPort) { var _a, _b; return (_b = (_a = service === null || service === void 0 ? void 0 : service.spec) === null || _a === void 0 ? void 0 : _a.ports) === null || _b === void 0 ? void 0 : _b.find(function (servicePort) { return targetPort === +servicePort.targetPort; }); };
var findVMServiceWithPort = function (vmi, allServices, targetPort) {
    return allServices === null || allServices === void 0 ? void 0 : allServices.find(function (service) {
        var _a, _b, _c;
        return ((_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.name) === ((_c = (_b = service === null || service === void 0 ? void 0 : service.spec) === null || _b === void 0 ? void 0 : _b.selector) === null || _c === void 0 ? void 0 : _c[TEMPLATE_VM_NAME_LABEL]) &&
            !!getServicePort(service, targetPort);
    });
};
export var findRDPServiceAndPort = function (vmi, allServices) {
    if (!vmi) {
        return [null, null];
    }
    var service = findVMServiceWithPort(vmi, allServices, DEFAULT_RDP_PORT);
    return [service, getServicePort(service, DEFAULT_RDP_PORT)];
};
export var getRdpAddressPort = function (vmi, services, launcherPod) {
    var _a, _b, _c, _d;
    var _e = findRDPServiceAndPort(vmi, services), rdpService = _e[0], rdpPortObj = _e[1];
    if (!rdpService || !rdpPortObj) {
        return null;
    }
    var port = rdpPortObj.port;
    var address;
    switch ((_a = rdpService === null || rdpService === void 0 ? void 0 : rdpService.spec) === null || _a === void 0 ? void 0 : _a.type) {
        case 'LoadBalancer':
            address = (_c = (_b = rdpService === null || rdpService === void 0 ? void 0 : rdpService.spec) === null || _b === void 0 ? void 0 : _b.externalIPs) === null || _c === void 0 ? void 0 : _c[0];
            if (!address) {
                kubevirtConsole.warn('External IP is not defined for the LoadBalancer RDP Service: ', rdpService);
            }
            break;
        case 'NodePort':
            port = rdpPortObj === null || rdpPortObj === void 0 ? void 0 : rdpPortObj.nodePort;
            if (launcherPod) {
                address = (_d = launcherPod === null || launcherPod === void 0 ? void 0 : launcherPod.status) === null || _d === void 0 ? void 0 : _d.hostIP;
            }
            if (!address) {
                kubevirtConsole.warn('Node IP (launcherpod.status.hostIP) is not yet known for NodePort RDP Service: ', rdpService);
            }
            break;
        default:
            kubevirtConsole.error('Unrecognized Service type: ', rdpService);
    }
    if (!address || !port) {
        return null;
    }
    kubevirtConsole.log('RDP requested for: ', address, port);
    return {
        address: address,
        port: port,
    };
};
export var downloadFile = function (fileName, content, mimeType) {
    var blob = new Blob([content], { type: mimeType });
    saveAs(blob, fileName);
};
var generateVVFile = function (console, type) {
    var _a;
    var TYPES = (_a = {},
        _a[SPICE_CONSOLE_TYPE] = 'spice',
        _a[VNC_CONSOLE_TYPE] = 'vnc',
        _a);
    var content = '[virt-viewer]\n' +
        "type=".concat((TYPES === null || TYPES === void 0 ? void 0 : TYPES[type]) || type, "\n") +
        "host=".concat(console === null || console === void 0 ? void 0 : console.address, "\n") +
        "port=".concat(console === null || console === void 0 ? void 0 : console.port, "\n") +
        'delete-this-file=1\n' +
        'fullscreen=0\n';
    return {
        content: content,
        mimeType: DEFAULT_VV_MIMETYPE,
    };
};
var generateRDPFile = function (console) {
    var port = (console === null || console === void 0 ? void 0 : console.port) || DEFAULT_RDP_PORT;
    var content = [
        "full address:s:".concat(console === null || console === void 0 ? void 0 : console.address, ":").concat(port),
        '\nusername:s:Administrator',
        '\nscreen mode id:i:2',
        '\nprompt for credentials:i:1',
        '\ndesktopwidth:i:0',
        '\ndesktopheight:i:0',
        '\nauthentication level:i:2',
        '\nredirectclipboard:i:1',
        '\nsession bpp:i:32',
        '\ncompression:i:1',
        '\nkeyboardhook:i:2',
        '\naudiocapturemode:i:0',
        '\nvideoplaybackmode:i:1',
        '\nconnection type:i:2',
        '\ndisplayconnectionbar:i:1',
        '\ndisable wallpaper:i:1',
        '\nallow font smoothing:i:1',
        '\nallow desktop composition:i:0',
        '\ndisable full window drag:i:1',
        '\ndisable menu anims:i:1',
        '\ndisable themes:i:0',
        '\ndisable cursor setting:i:0',
        '\nbitmapcachepersistenable:i:1',
        '\naudiomode:i:0',
        '\nredirectcomports:i:0',
        '\nredirectposdevices:i:0',
        '\nredirectdirectx:i:1',
        '\nautoreconnection enabled:i:1',
        '\nnegotiate security layer:i:1',
        '\nremoteapplicationmode:i:0',
        '\nalternate shell:s:',
        '\nshell working directory:s:',
        '\ngatewayhostname:s:',
        '\ngatewayusagemethod:i:4',
        '\ngatewaycredentialssource:i:4',
        '\ngatewayprofileusagemethod:i:0',
        '\npromptcredentialonce:i:1',
        '\nuse redirection server name:i:0',
        '\n',
    ].join('');
    return {
        content: content,
        mimeType: DEFAULT_RDP_MIMETYPE,
    };
};
export var generateDescriptorFile = function (console, type) {
    return type === RDP_CONSOLE_TYPE ? generateRDPFile(console) : generateVVFile(console, type);
};
export var getVmRdpNetworks = function (vm, vmi) {
    var _a, _b, _c, _d, _e;
    var networks = (_d = (_c = (_b = (_a = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _a === void 0 ? void 0 : _a.template) === null || _b === void 0 ? void 0 : _b.spec) === null || _c === void 0 ? void 0 : _c.networks) === null || _d === void 0 ? void 0 : _d.filter(function (n) { return (n === null || n === void 0 ? void 0 : n.multus) || (n === null || n === void 0 ? void 0 : n.pod); });
    return (((_e = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _e === void 0 ? void 0 : _e.interfaces) || [])
        .filter(function (i) { return networks === null || networks === void 0 ? void 0 : networks.some(function (n) { return (n === null || n === void 0 ? void 0 : n.name) === (i === null || i === void 0 ? void 0 : i.name); }); })
        .map(function (i) {
        var _a, _b;
        var ip = i === null || i === void 0 ? void 0 : i.ipAddress;
        if (ip) {
            var subnetIndex = (_a = i === null || i === void 0 ? void 0 : i.ipAddress) === null || _a === void 0 ? void 0 : _a.indexOf('/');
            if (subnetIndex > 0) {
                ip = (_b = i === null || i === void 0 ? void 0 : i.ipAddress) === null || _b === void 0 ? void 0 : _b.slice(0, subnetIndex);
            }
        }
        var network = networks === null || networks === void 0 ? void 0 : networks.find(function (n) { return (n === null || n === void 0 ? void 0 : n.name) === (i === null || i === void 0 ? void 0 : i.name); });
        return {
            ip: ip,
            name: i === null || i === void 0 ? void 0 : i.name,
            type: (network === null || network === void 0 ? void 0 : network.multus) ? MULTUS : POD,
        };
    });
};
export var getDefaultNetwork = function (networks) {
    if ((networks === null || networks === void 0 ? void 0 : networks.length) === 1) {
        return networks === null || networks === void 0 ? void 0 : networks[0];
    }
    if ((networks === null || networks === void 0 ? void 0 : networks.length) > 1) {
        return ((networks === null || networks === void 0 ? void 0 : networks.find(function (n) { return (n === null || n === void 0 ? void 0 : n.type) === POD && (n === null || n === void 0 ? void 0 : n.ip); })) || (networks === null || networks === void 0 ? void 0 : networks.find(function (n) { return (n === null || n === void 0 ? void 0 : n.type) === MULTUS; })));
    }
    return null;
};
export var createRDPService = function (vm, vmi) {
    var _a;
    var _b, _c, _d, _e, _f;
    var _g = (vm === null || vm === void 0 ? void 0 : vm.metadata) || {}, name = _g.name, namespace = _g.namespace;
    var vmiLabels = (_d = (_c = (_b = vm === null || vm === void 0 ? void 0 : vm.spec) === null || _b === void 0 ? void 0 : _b.template) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.labels;
    var labelSelector = (vmiLabels === null || vmiLabels === void 0 ? void 0 : vmiLabels[VMI_LABEL_AS_RDP_SERVICE_SELECTOR]) || name;
    var vmPromise = k8sPatch({
        data: [
            {
                op: 'add',
                path: "/spec/template/metadata/labels/".concat(VMI_LABEL_AS_RDP_SERVICE_SELECTOR.replaceAll('/', '~1')),
                value: labelSelector,
            },
        ],
        model: VirtualMachineModel,
        resource: vm,
    });
    var vmiPromise = k8sPatch({
        data: [
            {
                op: 'add',
                path: "/metadata/labels/".concat(VMI_LABEL_AS_RDP_SERVICE_SELECTOR.replaceAll('/', '~1')),
                value: labelSelector,
            },
        ],
        model: VirtualMachineInstanceModel,
        resource: vmi,
    });
    var servicePromise = k8sCreate({
        data: {
            apiVersion: ServiceModel.apiVersion,
            kind: ServiceModel.kind,
            metadata: {
                name: "".concat((_e = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _e === void 0 ? void 0 : _e.name, "-rdp"),
                namespace: (_f = vm === null || vm === void 0 ? void 0 : vm.metadata) === null || _f === void 0 ? void 0 : _f.namespace,
                ownerReferences: [buildOwnerReference(vm, { blockOwnerDeletion: false })],
            },
            spec: {
                ports: [
                    {
                        port: DEFAULT_RDP_PORT,
                        targetPort: DEFAULT_RDP_PORT,
                    },
                ],
                selector: (_a = {},
                    _a[VMI_LABEL_AS_RDP_SERVICE_SELECTOR] = labelSelector,
                    _a),
                type: 'NodePort',
            },
        },
        model: ServiceModel,
        ns: namespace,
    });
    return Promise.all([vmPromise, vmiPromise, servicePromise]);
};
//# sourceMappingURL=utils.js.map