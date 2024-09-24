var _a;
import { ConfigMapModel, GroupModel, RoleModel } from '@kubevirt-ui/kubevirt-api/console';
import { OPENSHIFT_CNV } from '@kubevirt-utils/constants/constants';
export var AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY = 'automaticSubscriptionActivationKey';
export var AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID = 'automaticSubscriptionOrganizationId';
export var AUTOMATIC_SUBSCRIPTION_CUSTOM_URL = 'automaticSubscriptionCustomUrl';
export var AUTOMATIC_SUBSCRIPTION_TYPE_KEY = 'automaticSubscriptionType';
export var INSTANCE_TYPE_ENABLED = 'instanceTypesEnabled';
export var KUBEVIRT_APISERVER_PROXY = 'kubevirtApiserverProxy';
export var LOAD_BALANCER_ENABLED = 'loadBalancerEnabled';
export var NODE_PORT_ADDRESS = 'nodePortAddress';
export var NODE_PORT_ENABLED = 'nodePortEnabled';
export var DISABLED_GUEST_SYSTEM_LOGS_ACCESS = 'disabledGuestSystemLogsAccess';
export var FEATURES_CONFIG_MAP_NAME = 'kubevirt-ui-features';
var FEATURES_ROLE_NAME = 'kubevirt-ui-features-reader';
var FEATURES_ROLE_BINDING_NAME = 'kubevirt-ui-features-reader-binding';
export var FEATURE_HCO_PERSISTENT_RESERVATION = 'persistentReservationHCO';
export var featuresConfigMapInitialState = {
    data: (_a = {},
        _a[AUTOMATIC_SUBSCRIPTION_ACTIVATION_KEY] = '',
        _a[AUTOMATIC_SUBSCRIPTION_ORGANIZATION_ID] = '',
        _a[DISABLED_GUEST_SYSTEM_LOGS_ACCESS] = 'false',
        _a[KUBEVIRT_APISERVER_PROXY] = 'true',
        _a[LOAD_BALANCER_ENABLED] = 'false',
        _a[NODE_PORT_ADDRESS] = '',
        _a[NODE_PORT_ENABLED] = 'false',
        _a),
    metadata: {
        name: FEATURES_CONFIG_MAP_NAME,
        namespace: OPENSHIFT_CNV,
    },
};
export var featuresRole = {
    metadata: {
        name: FEATURES_ROLE_NAME,
        namespace: OPENSHIFT_CNV,
    },
    rules: [
        {
            apiGroups: [''],
            resourceNames: [FEATURES_CONFIG_MAP_NAME],
            resources: [ConfigMapModel.plural],
            verbs: ['list', 'get', 'watch'],
        },
    ],
};
export var featuresRoleBinding = {
    metadata: {
        name: FEATURES_ROLE_BINDING_NAME,
        namespace: OPENSHIFT_CNV,
    },
    roleRef: {
        apiGroup: RoleModel.apiGroup,
        kind: RoleModel.kind,
        name: FEATURES_ROLE_NAME,
    },
    subjects: [
        {
            apiGroup: RoleModel.apiGroup,
            kind: GroupModel.kind,
            name: 'system:authenticated',
        },
    ],
};
//# sourceMappingURL=constants.js.map