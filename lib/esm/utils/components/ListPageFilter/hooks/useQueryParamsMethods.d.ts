export declare const useQueryParamsMethods: () => {
    removeQueryArguments: (...keys: string[]) => void;
    setAllQueryArguments: (newParams: {
        [k: string]: string;
    }) => void;
    setOrRemoveQueryArgument: (k: string, v?: string) => void;
};
