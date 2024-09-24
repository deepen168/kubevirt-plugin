import { VolumeSnapshotKind } from './types';
declare type UseSnapshotsReturnType = {
    error: Error;
    projectsLoaded: boolean;
    projectsNames: string[];
    snapshots: VolumeSnapshotKind[];
    snapshotsLoaded: boolean;
};
declare const useSnapshots: (projectSelected: string) => UseSnapshotsReturnType;
export default useSnapshots;
