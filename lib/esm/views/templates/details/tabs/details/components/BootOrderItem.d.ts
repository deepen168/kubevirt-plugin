import React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type BootOrderProps = {
    template: V1Template;
};
declare const BootOrderItem: React.FC<BootOrderProps>;
export default BootOrderItem;
