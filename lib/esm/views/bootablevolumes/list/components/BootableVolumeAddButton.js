var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { DataSourceModelRef } from '@kubevirt-ui/kubevirt-api/console';
import AddBootableVolumeModal from '@kubevirt-utils/components/AddBootableVolumeModal/AddBootableVolumeModal';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useCanCreateBootableVolume from '@kubevirt-utils/resources/bootableresources/hooks/useCanCreateBootableVolume';
import { ListPageCreateDropdown } from '@openshift-console/dynamic-plugin-sdk';
var BootableVolumeAddButton = function (_a) {
    var buttonText = _a.buttonText, namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var navigate = useNavigate();
    var _b = useCanCreateBootableVolume(namespace), canCreateDS = _b.canCreateDS, canCreatePVC = _b.canCreatePVC, canListInstanceTypesPreference = _b.canListInstanceTypesPreference;
    var createItems = {
        form: t('With form'),
        yaml: t('With YAML'),
    };
    var onCreate = function (type) {
        return type === 'form'
            ? createModal(function (props) { return React.createElement(AddBootableVolumeModal, __assign({}, props)); })
            : navigate("/k8s/ns/".concat(namespace || DEFAULT_NAMESPACE, "/").concat(DataSourceModelRef, "/~new"));
    };
    if ((canCreateDS || canCreatePVC) && canListInstanceTypesPreference) {
        return (React.createElement(ListPageCreateDropdown, { items: createItems, onClick: onCreate }, buttonText || t('Add volume')));
    }
    return React.createElement(React.Fragment, null);
};
export default BootableVolumeAddButton;
//# sourceMappingURL=BootableVolumeAddButton.js.map