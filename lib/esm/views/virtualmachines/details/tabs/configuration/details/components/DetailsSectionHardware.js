import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom-v5-compat';
import HardwareDevicesTable from '@kubevirt-utils/components/HardwareDevices/HardwareDevicesTable';
import HardwareDeviceTitle from '@kubevirt-utils/components/HardwareDevices/HardwareDeviceTitle';
import HardwareDevicesModal from '@kubevirt-utils/components/HardwareDevices/modal/HardwareDevicesModal';
import { HARDWARE_DEVICE_TYPE } from '@kubevirt-utils/components/HardwareDevices/utils/constants';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import SearchItem from '@kubevirt-utils/components/SearchItem/SearchItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useToggle } from '@kubevirt-utils/hooks/useToggle';
import { getGPUDevices, getHostDevices } from '@kubevirt-utils/resources/vm';
import { Bullseye, Divider, ExpandableSection, Flex, Grid, GridItem } from '@patternfly/react-core';
import { getSearchItemsIds } from '../../search/utils/utils';
import { expandURLHash, getDetailsTabHardwareIds } from '../../utils/search';
import { updateHardwareDevices } from '../utils/utils';
var DetailsSectionHardware = function (_a) {
    var onSubmitProp = _a.onSubmit, vm = _a.vm, vmi = _a.vmi;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var location = useLocation();
    var _b = useToggle('hardware-devices'), isExpanded = _b[0], setIsExpanded = _b[1];
    var onSubmit = onSubmitProp || updateHardwareDevices;
    var hostDevices = getHostDevices(vm);
    var gpus = getGPUDevices(vm);
    useEffect(function () {
        expandURLHash(getSearchItemsIds(getDetailsTabHardwareIds(vm)), location === null || location === void 0 ? void 0 : location.hash, setIsExpanded);
    }, [location === null || location === void 0 ? void 0 : location.hash, vm]);
    var onEditHostDevices = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(HardwareDevicesModal, { btnText: t('Add Host device'), headerText: t('Host devices'), initialDevices: hostDevices, isOpen: isOpen, onClose: onClose, onSubmit: function (updatedVM) { return onSubmit(HARDWARE_DEVICE_TYPE.HOST_DEVICES, updatedVM); }, type: HARDWARE_DEVICE_TYPE.HOST_DEVICES, vm: vm, vmi: vmi }));
        });
    };
    var onEditGPU = function () {
        createModal(function (_a) {
            var isOpen = _a.isOpen, onClose = _a.onClose;
            return (React.createElement(HardwareDevicesModal, { btnText: t('Add GPU device'), headerText: t('GPU devices'), initialDevices: gpus, isOpen: isOpen, onClose: onClose, onSubmit: function (updatedVM) { return onSubmit(HARDWARE_DEVICE_TYPE.GPUS, updatedVM); }, type: HARDWARE_DEVICE_TYPE.GPUS, vm: vm, vmi: vmi }));
        });
    };
    return (React.createElement(ExpandableSection, { toggleContent: React.createElement(SearchItem, { id: "hardware-devices" }, t('Hardware devices ({{devices}})', {
            devices: (gpus === null || gpus === void 0 ? void 0 : gpus.length) + (hostDevices === null || hostDevices === void 0 ? void 0 : hostDevices.length) || 0,
        })), isExpanded: isExpanded, isIndented: true, onToggle: function (_event, val) { return setIsExpanded(val); } },
        React.createElement(Grid, null,
            React.createElement(GridItem, { span: 4 },
                React.createElement(HardwareDeviceTitle, { canEdit: true, onClick: onEditGPU, title: t('GPU devices') }),
                React.createElement(HardwareDevicesTable, { devices: gpus })),
            React.createElement(GridItem, { span: 1 },
                React.createElement(Bullseye, null,
                    React.createElement(Flex, { className: 'DetailsSection-divider__height' },
                        React.createElement(Divider, { orientation: { default: 'vertical' } })))),
            React.createElement(GridItem, { span: 4 },
                React.createElement(HardwareDeviceTitle, { canEdit: true, onClick: onEditHostDevices, title: t('Host devices') }),
                React.createElement(HardwareDevicesTable, { devices: hostDevices })))));
};
export default DetailsSectionHardware;
//# sourceMappingURL=DetailsSectionHardware.js.map