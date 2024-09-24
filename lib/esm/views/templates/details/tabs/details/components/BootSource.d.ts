import React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type BootSourceProps = {
    template: V1Template;
};
declare const BootSource: React.FC<BootSourceProps>;
export default BootSource;
