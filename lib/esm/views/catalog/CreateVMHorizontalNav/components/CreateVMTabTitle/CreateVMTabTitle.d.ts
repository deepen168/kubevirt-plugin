import { ComponentClass, FC, ReactNode } from 'react';
declare type CreateVMTabTitleProps = {
    badge?: ReactNode;
    Icon: ComponentClass;
    titleText: string;
};
declare const CreateVMTabTitle: FC<CreateVMTabTitleProps>;
export default CreateVMTabTitle;
