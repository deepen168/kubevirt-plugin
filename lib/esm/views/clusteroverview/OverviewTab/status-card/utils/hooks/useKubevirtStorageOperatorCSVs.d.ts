import { ClusterServiceVersionKind } from '../types';
declare const useKubevirtStorageOperatorCSVs: () => {
    loaded: boolean;
    loadErrors: string[];
    lsoCSV: ClusterServiceVersionKind | null;
    odfCSV: ClusterServiceVersionKind | null;
};
export default useKubevirtStorageOperatorCSVs;
