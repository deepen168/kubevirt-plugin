import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { generatePrettyName } from '@kubevirt-utils/utils/utils';
import { Form, FormGroup, FormSection, Grid, GridItem, TextInput } from '@patternfly/react-core';
import CheckupsNetworkFormActions from './CheckupsNetworkFormActions';
import CheckupsNetworkFormLatency from './CheckupsNetworkFormLatency';
import CheckupsNetworkFormNADS from './CheckupsNetworkFormNADS';
import CheckupsNetworkFormNodes from './CheckupsNetworkFormNodes';
import './checkups-network-form.scss';
var CheckupsNetworkForm = function () {
    var t = useKubevirtTranslation().t;
    var _a = useState(false), isDesiredLatency = _a[0], setIsDesiredLatency = _a[1];
    var _b = useState(false), isNodesChecked = _b[0], setIsNodesChecked = _b[1];
    var _c = useState(generatePrettyName('kubevirt-vm-latency-checkup')), name = _c[0], setName = _c[1];
    var _d = useState('5'), sampleDuration = _d[0], setSampleDuration = _d[1];
    var _e = useState(), desiredLatency = _e[0], setDesiredLatency = _e[1];
    var _f = useState(), selectedNAD = _f[0], setSelectedNAD = _f[1];
    var _g = useState(), nodeTarget = _g[0], setNodeTarget = _g[1];
    var _h = useState(), nodeSource = _h[0], setNodeSource = _h[1];
    return (React.createElement(Grid, null,
        React.createElement(GridItem, { span: 6 },
            React.createElement(Form, { className: 'CheckupsNetworkForm--main' },
                React.createElement(FormSection, { title: t('Run network latency checkup'), titleElement: "h1" },
                    t("Network latency checkup verifies network connectivity and measures the latency between two \n          VirtualMachines attached to a secondary network interface by using the ping utility"),
                    React.createElement(FormGroup, { fieldId: "name", isRequired: true, label: t('Name') },
                        React.createElement(TextInput, { id: "name", isRequired: true, name: "name", onChange: function (_event, value) { return setName(value); }, value: name })),
                    React.createElement(CheckupsNetworkFormNADS, { selectedNAD: selectedNAD, setSelectedNAD: setSelectedNAD }),
                    React.createElement(FormGroup, { fieldId: "sample-duration", label: t('Sample duration (seconds)') },
                        React.createElement(TextInput, { className: "CheckupsNetworkForm--main__number-input", id: "sample-duration", name: "sample-duration", onChange: function (_event, val) { return setSampleDuration(val); }, type: "number", value: sampleDuration })),
                    React.createElement(CheckupsNetworkFormLatency, { desiredLatency: desiredLatency, isDesiredLatency: isDesiredLatency, setDesiredLatency: setDesiredLatency, setIsDesiredLatency: setIsDesiredLatency }),
                    React.createElement(CheckupsNetworkFormNodes, { isNodesChecked: isNodesChecked, nodeSource: nodeSource, nodeTarget: nodeTarget, setIsNodesChecked: setIsNodesChecked, setNodeSource: setNodeSource, setNodeTarget: setNodeTarget }),
                    React.createElement(CheckupsNetworkFormActions, { desiredLatency: desiredLatency, isNodesChecked: isNodesChecked, name: name, nodeSource: nodeSource, nodeTarget: nodeTarget, sampleDuration: sampleDuration, selectedNAD: selectedNAD }))))));
};
export default CheckupsNetworkForm;
//# sourceMappingURL=CheckupsNetworkForm.js.map