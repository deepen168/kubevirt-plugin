import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { NetworkPresentation } from '@kubevirt-utils/resources/vm/utils/network/constants';
declare type TemplatesEditNetworkInterfaceModalProps = {
    isOpen: boolean;
    nicPresentation: NetworkPresentation;
    onClose: () => void;
    template: V1Template;
};
declare const TemplatesEditNetworkInterfaceModal: FC<TemplatesEditNetworkInterfaceModalProps>;
export default TemplatesEditNetworkInterfaceModal;
