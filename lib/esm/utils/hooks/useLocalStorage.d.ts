declare type UseLocalStorage = <T = string>(key: string, initialValue?: string) => [value: T, setLocalStorageValue: (newValue: any) => void, removeItem: () => void];
declare const useLocalStorage: UseLocalStorage;
export default useLocalStorage;
