import * as React from 'react';
import { IDEntity } from '../utils/types';
declare type UseIDEntitiesProps = <T extends IDEntity = IDEntity>(initialEntities: T[]) => {
    entities: T[];
    initialEntitiesChanged: boolean;
    onEntityAdd: (newEntity: T) => void;
    onEntityChange: (updatedEntity: T) => void;
    onEntityDelete: (idToDelete: number) => void;
    setEntities: React.Dispatch<React.SetStateAction<T[]>>;
};
export declare const useIDEntities: UseIDEntitiesProps;
export {};
