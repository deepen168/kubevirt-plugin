import * as React from 'react';
import { DiskPresentation } from '../../utils/virtualMachinesInstancePageDisksTabUtils';
declare type DiskTableRowProps = {
    activeColumnIDs: Set<string>;
    obj: DiskPresentation;
};
declare const DisksTableRow: React.FC<DiskTableRowProps>;
export default DisksTableRow;
