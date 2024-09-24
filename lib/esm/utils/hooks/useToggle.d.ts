import { Dispatch, SetStateAction } from 'react';
declare type UseToggle = (key: string, defaultValue?: boolean) => [isToggled: boolean, toggle: Dispatch<SetStateAction<boolean>>];
export declare const useToggle: UseToggle;
export {};
