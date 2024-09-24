import { PackageManifestKind } from '../constants';
declare type UseMTVResourcesType = () => {
    mtvLink: string;
    mtvLoaded: boolean;
    mtvOperator: PackageManifestKind;
};
declare const useMTVResources: UseMTVResourcesType;
export default useMTVResources;
