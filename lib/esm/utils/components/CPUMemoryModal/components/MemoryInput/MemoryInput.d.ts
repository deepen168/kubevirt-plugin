import { Dispatch, FC, SetStateAction } from 'react';
import './MemoryInput.scss';
declare type MemoryInputProps = {
    memory: number;
    memoryUnit: string;
    setMemory: Dispatch<SetStateAction<number>>;
    setMemoryUnit: Dispatch<SetStateAction<string>>;
};
declare const MemoryInput: FC<MemoryInputProps>;
export default MemoryInput;
