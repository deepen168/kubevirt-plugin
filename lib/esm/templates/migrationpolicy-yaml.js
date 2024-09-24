import MigrationPolicyModel from '@kubevirt-ui/kubevirt-api/console/models/MigrationPolicyModel';
export var defaultMigrationPolicyYamlTemplate = "\napiVersion: ".concat(MigrationPolicyModel.apiGroup, "/").concat(MigrationPolicyModel.apiVersion, "\nkind: ").concat(MigrationPolicyModel.kind, "\nmetadata:\n  name: example\nspec: \n  selectors: {}\n");
//# sourceMappingURL=migrationpolicy-yaml.js.map