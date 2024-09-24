import { FC } from 'react';
import { CREATE_VM_TAB } from '@catalog/CreateVMHorizontalNav/constants';
import './TemplatesCatalog.scss';
declare type TemplatesCatalogProps = {
    currentTab: CREATE_VM_TAB;
};
declare const TemplatesCatalog: FC<TemplatesCatalogProps>;
export default TemplatesCatalog;
