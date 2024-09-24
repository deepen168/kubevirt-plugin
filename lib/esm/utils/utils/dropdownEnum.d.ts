import { ObjectEnum } from '@kubevirt-utils/utils/ObjectEnum';
export declare type DropdownProps = {
    dropdownLabel: string;
};
declare abstract class DropdownEnum<T> extends ObjectEnum<T> {
    protected readonly dropdownLabel: string;
    getDropdownLabel: () => string;
    protected constructor(value: T, { dropdownLabel }: {
        dropdownLabel: any;
    });
}
export default DropdownEnum;
