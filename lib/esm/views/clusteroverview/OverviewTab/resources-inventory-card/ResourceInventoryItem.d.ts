import React from 'react';
import './ResourcesInventoryCard.scss';
declare type ResourceInventoryItemProps = {
    label: string;
    path: string;
    quantity: number;
};
declare const ResourceInventoryItem: React.FC<ResourceInventoryItemProps>;
export default ResourceInventoryItem;
