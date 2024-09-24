import { FC, FormEventHandler } from 'react';
declare type ContainerSourceProps = {
    onInputValueChange: FormEventHandler<HTMLInputElement>;
    registrySourceHelperText: string;
    selectedSourceType: string;
    testId: string;
};
declare const ContainerSource: FC<ContainerSourceProps>;
export default ContainerSource;
