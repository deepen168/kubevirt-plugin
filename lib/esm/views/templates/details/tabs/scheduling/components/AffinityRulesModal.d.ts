import * as React from 'react';
import { V1Template } from '@kubevirt-utils/models';
declare type AffinityModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const AffinityRulesModal: React.FC<AffinityModalProps>;
export default AffinityRulesModal;
