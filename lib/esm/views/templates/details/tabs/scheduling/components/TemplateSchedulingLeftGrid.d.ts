import React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
export declare type TemplateSchedulingGridProps = {
    editable: boolean;
    onSubmit?: (updatedTemplate: V1Template) => Promise<V1Template | void>;
    template: V1Template;
};
declare const TemplateSchedulingLeftGrid: React.FC<TemplateSchedulingGridProps>;
export default TemplateSchedulingLeftGrid;
