import React, { useState } from 'react';
import VCPUInput from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/components/vCPUInput/VCPUInput';
import { convertTopologyToVCPUs, CPUInputType, formatVCPUsAsSockets, } from '@kubevirt-utils/components/CPUMemoryModal/components/CPUInput/utils/utils';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, ButtonVariant, Popover, Radio, Title, TitleSizes } from '@patternfly/react-core';
import { HelpIcon } from '@patternfly/react-icons';
import CPUTopologyInput from './components/CPUTopologyInput/CPUTopologyInput';
import CPUHelperText from './components/vCPUInput/components/CPUHelperText/CPUHelperText';
import './CPUInput.scss';
var CPUInput = function (_a) {
    var currentCPU = _a.currentCPU, setUserEnteredCPU = _a.setUserEnteredCPU, userEnteredCPU = _a.userEnteredCPU;
    var t = useKubevirtTranslation().t;
    var _b = useState(CPUInputType.editVCPU), selectedRadioOption = _b[0], setSelectedRadioOption = _b[1];
    var radioInputName = 'cpu-input-type';
    return (React.createElement("div", { className: "cpu-input" },
        React.createElement(Title, { className: "cpu-input__title", headingLevel: "h6", size: TitleSizes.md },
            t('CPU'),
            React.createElement(Popover, { bodyContent: t('As a default, the VirtualMachine CPU uses sockets to enable hotplug. You can also define the topology manually') },
                React.createElement(Button, { "aria-label": "Action", className: "cpu-input__title--help-text-button", variant: ButtonVariant.plain },
                    React.createElement(HelpIcon, null)))),
        React.createElement(Radio, { body: React.createElement(VCPUInput, { cpu: formatVCPUsAsSockets(userEnteredCPU), isDisabled: selectedRadioOption !== CPUInputType.editVCPU, setCPU: setUserEnteredCPU }), onClick: function () {
                setSelectedRadioOption(CPUInputType.editVCPU);
            }, id: CPUInputType.editVCPU, isChecked: selectedRadioOption === CPUInputType.editVCPU, isLabelWrapped: true, name: radioInputName }),
        React.createElement(CPUHelperText, { cpu: userEnteredCPU, hide: (userEnteredCPU === null || userEnteredCPU === void 0 ? void 0 : userEnteredCPU.sockets) === convertTopologyToVCPUs(currentCPU) }),
        React.createElement(Radio, { body: React.createElement(CPUTopologyInput, { cpu: userEnteredCPU, hide: selectedRadioOption !== CPUInputType.editTopologyManually, isDisabled: selectedRadioOption !== CPUInputType.editTopologyManually, setCPU: setUserEnteredCPU }), onClick: function () {
                setSelectedRadioOption(CPUInputType.editTopologyManually);
            }, className: "cpu-input__edit-topology-manually", id: CPUInputType.editTopologyManually, isChecked: selectedRadioOption === CPUInputType.editTopologyManually, label: React.createElement(React.Fragment, null, t('Set CPU topology manually')), name: radioInputName })));
};
export default CPUInput;
//# sourceMappingURL=CPUInput.js.map