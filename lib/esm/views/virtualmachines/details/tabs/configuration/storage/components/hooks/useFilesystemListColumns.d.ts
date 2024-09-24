declare const useFilesystemTableColumns: () => {
    id: string;
    sort: string;
    title: any;
    transforms: import("@patternfly/react-table").ITransform[];
}[];
export default useFilesystemTableColumns;
