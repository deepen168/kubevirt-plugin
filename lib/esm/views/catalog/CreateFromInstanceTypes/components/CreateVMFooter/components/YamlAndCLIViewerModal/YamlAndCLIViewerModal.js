import React, { Suspense, useState } from 'react';
import { dump } from 'js-yaml';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import Loading from '@kubevirt-utils/components/Loading/Loading';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Modal, ModalVariant, Tab, Tabs } from '@patternfly/react-core';
import YamlAndCLIEditor from '../YamlAndCLIEditor/YamlAndCLIEditor';
import { TAB } from './utils/constants';
import { getCreateVMVirtctlCommand } from './utils/utils';
var YamlAndCLIViewerModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = useState(TAB.YAML), activeTabKey = _b[0], setActiveTabKey = _b[1];
    var instanceTypeVMState = useInstanceTypeVMStore().instanceTypeVMState;
    var selectedBootableVolume = instanceTypeVMState.selectedBootableVolume, sshSecretCredentials = instanceTypeVMState.sshSecretCredentials, vmName = instanceTypeVMState.vmName;
    var handleTabClick = function (_, tabIndex) {
        setActiveTabKey(tabIndex);
    };
    return (React.createElement(Modal, { isOpen: isOpen, onClose: onClose, title: "".concat(activeTabKey, " for ").concat(vmName), variant: ModalVariant.large },
        React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
            React.createElement(Tabs, { activeKey: activeTabKey, onSelect: handleTabClick },
                React.createElement(Tab, { eventKey: TAB.YAML, title: t('YAML') },
                    React.createElement(YamlAndCLIEditor, { code: dump(vm || ''), minHeight: 350 })),
                React.createElement(Tab, { eventKey: TAB.CLI, title: t('CLI') },
                    React.createElement(YamlAndCLIEditor, { code: getCreateVMVirtctlCommand(vm, selectedBootableVolume, sshSecretCredentials === null || sshSecretCredentials === void 0 ? void 0 : sshSecretCredentials.sshPubKey), minHeight: 150 }))))));
};
export default YamlAndCLIViewerModal;
//# sourceMappingURL=YamlAndCLIViewerModal.js.map