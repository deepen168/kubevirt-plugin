import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type TemplatesNetworkInterfaceModalProps = {
    headerText: string;
    isOpen: boolean;
    onClose: () => void;
    template: V1Template;
};
declare const TemplatesNetworkInterfaceModal: FC<TemplatesNetworkInterfaceModalProps>;
export default TemplatesNetworkInterfaceModal;
