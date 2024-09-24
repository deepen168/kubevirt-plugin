export declare const safeLoad: <Resource>(value: string) => Resource | undefined;
export declare type LineRange = {
    end: number;
    start: number;
};
export declare const getLinesToHighlight: (resourceYAML: string, pathsToHighlight: string[]) => LineRange[];
export declare const createSelection: (range: LineRange) => {
    endColumn: number;
    endLineNumber: number;
    positionColumn: number;
    positionLineNumber: number;
    selectionStartColumn: number;
    selectionStartLineNumber: number;
    startColumn: number;
    startLineNumber: number;
};
