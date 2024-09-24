import React, { useCallback, useState } from 'react';
import { useDebounceCallback } from 'src/views/clusteroverview/utils/hooks/useDebounceCallback';
import { ConfigMapModel } from '@kubevirt-ui/kubevirt-api/console';
import SectionWithSwitch from '@kubevirt-utils/components/SectionWithSwitch/SectionWithSwitch';
import { LOAD_BALANCER_ENABLED, NODE_PORT_ADDRESS, NODE_PORT_ENABLED, } from '@kubevirt-utils/hooks/useFeatures/constants';
import useFeaturesConfigMap from '@kubevirt-utils/hooks/useFeatures/useFeaturesConfigMap';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useMetalLBOperatorInstalled } from '@kubevirt-utils/hooks/useMetalLBOperatorInstalled/useMetalLBOperatorInstalled';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Form, FormGroup, TextInput } from '@patternfly/react-core';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
var SSHConfiguration = function (_a) {
    var _b, _c, _d, _e, _f;
    var newBadge = _a.newBadge;
    var t = useKubevirtTranslation().t;
    var _g = useState(null), url = _g[0], setUrl = _g[1];
    var _h = useFeaturesConfigMap(), _j = _h.featuresConfigMapData, featureConfigMap = _j[0], loaded = _j[1], isAdmin = _h.isAdmin;
    var hasMetalLBInstalled = useMetalLBOperatorInstalled();
    var onChange = useCallback(function (val, field) {
        k8sPatch({
            data: [
                {
                    op: 'replace',
                    path: "/data/".concat(field),
                    value: val,
                },
            ],
            model: ConfigMapModel,
            resource: featureConfigMap,
        });
    }, [featureConfigMap]);
    var onTextChange = useDebounceCallback(function (val, field) {
        onChange(val, field);
    }, 700);
    return (React.createElement(ExpandSection, { toggleText: t('SSH configurations') },
        React.createElement(SectionWithSwitch, { helpTextIconContent: t('Enable the creation of LoadBalancer services for SSH connections to VirtualMachines. A load balancer must be configured'), switchIsOn: ((_b = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _b === void 0 ? void 0 : _b[LOAD_BALANCER_ENABLED]) === 'true' || hasMetalLBInstalled, id: "load-balancer-feature", isDisabled: !loaded || !isAdmin || hasMetalLBInstalled, newBadge: newBadge, title: t('SSH over LoadBalancer service'), turnOnSwitch: function (checked) { return onChange(checked.toString(), LOAD_BALANCER_ENABLED); } }),
        React.createElement(SectionWithSwitch, { helpTextIconContent: t('Allow the creation of NodePort services for SSH connections to VirtualMachines. An address of a publicly available Node must be provided.'), switchIsOn: ((_c = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _c === void 0 ? void 0 : _c[NODE_PORT_ENABLED]) === 'true' &&
                !isEmpty((_d = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _d === void 0 ? void 0 : _d[NODE_PORT_ADDRESS]), id: "node-port-feature", inlineCheckbox: true, isDisabled: !loaded || !isAdmin || isEmpty((_e = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _e === void 0 ? void 0 : _e[NODE_PORT_ADDRESS]), newBadge: newBadge, title: t('SSH over NodePort service'), turnOnSwitch: function (checked) { return onChange(checked.toString(), NODE_PORT_ENABLED); } },
            React.createElement(Form, { isHorizontal: true },
                React.createElement(FormGroup, { fieldId: "node-address", isRequired: true, label: t('Node address'), placeholder: t('Enter node address to access the cluster') },
                    React.createElement(TextInput, { onChange: function (_event, value) {
                            setUrl(value);
                            onTextChange(value, NODE_PORT_ADDRESS);
                        }, id: "node-address", isRequired: true, name: "node-address", value: url !== null && url !== void 0 ? url : (_f = featureConfigMap === null || featureConfigMap === void 0 ? void 0 : featureConfigMap.data) === null || _f === void 0 ? void 0 : _f[NODE_PORT_ADDRESS] }))))));
};
export default SSHConfiguration;
//# sourceMappingURL=SSHConfiguration.js.map