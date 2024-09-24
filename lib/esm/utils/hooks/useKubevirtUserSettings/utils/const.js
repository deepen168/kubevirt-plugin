import { ConfigMapModel, GroupModel, RoleModel } from '@kubevirt-ui/kubevirt-api/console';
import { OPENSHIFT_CNV } from '@kubevirt-utils/constants/constants';
export var TOP_CONSUMERS_CARD = 'topConsumersCard';
export var KUBEVIRT_USER_SETTINGS_CONFIG_MAP_NAME = 'kubevirt-user-settings';
var KUBEVIRT_USER_SETTINGS_ROLE_NAME = 'kubevirt-user-settings-reader';
var KUBEVIRT_USER_SETTINGS_ROLE_BINDING_NAME = 'kubevirt-user-settings-reader-binding';
export var userSettingsRole = {
    metadata: {
        name: KUBEVIRT_USER_SETTINGS_ROLE_NAME,
        namespace: OPENSHIFT_CNV,
    },
    rules: [
        {
            apiGroups: [''],
            resourceNames: [KUBEVIRT_USER_SETTINGS_CONFIG_MAP_NAME],
            resources: [ConfigMapModel.plural],
            verbs: ['list', 'get', 'update', 'patch'],
        },
    ],
};
export var userSettingsRoleBinding = {
    metadata: {
        name: KUBEVIRT_USER_SETTINGS_ROLE_BINDING_NAME,
        namespace: OPENSHIFT_CNV,
    },
    roleRef: {
        apiGroup: RoleModel.apiGroup,
        kind: RoleModel.kind,
        name: KUBEVIRT_USER_SETTINGS_ROLE_NAME,
    },
    subjects: [
        {
            apiGroup: RoleModel.apiGroup,
            kind: GroupModel.kind,
            name: 'system:authenticated',
        },
    ],
};
//# sourceMappingURL=const.js.map