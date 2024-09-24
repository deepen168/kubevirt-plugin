import { SecretsData } from '../utils/types';
declare type UseSecretsData = (secretsNamespace: string, currentNamespace: string) => SecretsData;
declare const useSecretsData: UseSecretsData;
export default useSecretsData;
