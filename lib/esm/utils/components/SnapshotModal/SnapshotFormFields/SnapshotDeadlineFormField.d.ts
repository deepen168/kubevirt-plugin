import { Dispatch, FC, SetStateAction } from 'react';
declare type SnapshotDeadlineFormFieldProps = {
    deadline: string;
    deadlineUnit: string;
    setDeadline: Dispatch<SetStateAction<string>>;
    setDeadlineUnit: Dispatch<SetStateAction<string>>;
    setIsError: Dispatch<SetStateAction<boolean>>;
};
declare const SnapshotDeadlineFormField: FC<SnapshotDeadlineFormFieldProps>;
export default SnapshotDeadlineFormField;
