import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './TemplateDetailsPage.scss';
export declare type TemplateDetailsGridProps = {
    editable?: boolean;
    template: V1Template;
};
export declare type LabelsAnnotationsType = {
    [key: string]: string;
};
declare type TemplateDetailsPageProps = {
    obj?: V1Template;
};
declare const TemplateDetailsPage: FC<TemplateDetailsPageProps>;
export default TemplateDetailsPage;
