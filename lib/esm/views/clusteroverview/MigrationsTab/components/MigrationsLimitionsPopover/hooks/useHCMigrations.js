import useHyperConvergeConfiguration from '@kubevirt-utils/hooks/useHyperConvergeConfiguration';
var useHCMigrations = function () {
    var _a;
    var hyperConverge = useHyperConvergeConfiguration()[0];
    return ((_a = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _a === void 0 ? void 0 : _a.liveMigrationConfig) || {};
};
export default useHCMigrations;
//# sourceMappingURL=useHCMigrations.js.map