import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
export var updateLiveMigrationConfig = function (hyperConverged, value, name) {
    return k8sPatch({
        data: [
            {
                op: 'replace',
                path: "/spec/liveMigrationConfig/".concat(name),
                value: value,
            },
        ],
        model: HyperConvergedModel,
        resource: hyperConverged,
    });
};
export var getLiveMigrationNetwork = function (hyperConverged) { var _a, _b; return (_b = (_a = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.spec) === null || _a === void 0 ? void 0 : _a.liveMigrationConfig) === null || _b === void 0 ? void 0 : _b.network; };
export var getLiveMigrationConfig = function (hyperConverge) { var _a; return (_a = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _a === void 0 ? void 0 : _a.liveMigrationConfig; };
export var MIGRATION_PER_CLUSTER = 'parallelMigrationsPerCluster';
export var MIGRATION_PER_NODE = 'parallelOutboundMigrationsPerNode';
export var PRIMARY_NETWORK = 'Primary live migration network';
//# sourceMappingURL=utils.js.map