import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
declare type AdditionalResourcesProps = {
    template: V1Template;
};
declare const AdditionalResources: React.FC<AdditionalResourcesProps>;
export default AdditionalResources;
