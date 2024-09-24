import * as React from 'react';
import { IoK8sApiCoreV1Node } from '@kubevirt-ui/kubevirt-api/kubernetes';
import { AffinityLabel, AffinityRowData } from '../../../utils/types';
export declare type useIDEntitiesValue = {
    entities: AffinityLabel[];
    initialEntitiesChanged: boolean;
    onEntityAdd: (newEntity: AffinityLabel) => void;
    onEntityChange: (updatedEntity: AffinityLabel) => void;
    onEntityDelete: (idToDelete: number) => void;
    setEntities: React.Dispatch<React.SetStateAction<AffinityLabel[]>>;
};
declare type AffinityFormProps = {
    expressions: useIDEntitiesValue;
    fields: useIDEntitiesValue;
    focusedAffinity: AffinityRowData;
    isSubmitDisabled: boolean;
    nodesLoaded: boolean;
    qualifiedNodes: IoK8sApiCoreV1Node[];
    setFocusedAffinity: React.Dispatch<React.SetStateAction<AffinityRowData>>;
    setSubmitDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const AffinityForm: React.FC<AffinityFormProps>;
export default AffinityForm;
