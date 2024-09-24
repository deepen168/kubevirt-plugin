import useKubevirtHyperconvergeConfiguration from '@kubevirt-utils/hooks/useKubevirtHyperconvergeConfiguration.ts';
var useHCPermittedHostDevices = function () {
    var _a;
    var _b = useKubevirtHyperconvergeConfiguration(), hcConfig = _b[0], hcLoaded = _b[1], hcError = _b[2];
    var permittedHostDevices = (((_a = hcConfig === null || hcConfig === void 0 ? void 0 : hcConfig.spec) === null || _a === void 0 ? void 0 : _a.configuration) || {}).permittedHostDevices;
    return { hcError: hcError, hcLoaded: hcLoaded, permittedHostDevices: permittedHostDevices };
};
export default useHCPermittedHostDevices;
//# sourceMappingURL=useHCPermittedHostDevices.js.map