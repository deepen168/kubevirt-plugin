import { FC } from 'react';
import { EnvironmentKind } from '../constants';
declare type EnvironmentSelectOptionProps = {
    isDisabled?: boolean;
    kind: EnvironmentKind;
    name: string;
};
declare const EnvironmentSelectOption: FC<EnvironmentSelectOptionProps>;
export default EnvironmentSelectOption;
