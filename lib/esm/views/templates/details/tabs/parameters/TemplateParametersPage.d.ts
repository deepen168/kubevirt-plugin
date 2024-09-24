import { FC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import './template-parameters-page.scss';
declare type TemplateParametersPageProps = {
    obj?: V1Template;
};
declare const TemplateParametersPage: FC<TemplateParametersPageProps>;
export default TemplateParametersPage;
