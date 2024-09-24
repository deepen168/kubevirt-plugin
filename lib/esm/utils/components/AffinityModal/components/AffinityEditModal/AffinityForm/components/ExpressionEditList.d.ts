import { FC, ReactNode } from 'react';
import { useIDEntitiesValue } from '../AffinityForm';
declare type ExpressionEditListProps = {
    errorHelperText: ReactNode;
    expressions: useIDEntitiesValue;
    helperText: ReactNode;
    label: string;
};
declare const ExpressionEditList: FC<ExpressionEditListProps>;
export default ExpressionEditList;
