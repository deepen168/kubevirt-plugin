import { FC, FormEventHandler } from 'react';
declare type HTTPSourceProps = {
    httpSourceHelperURL: string;
    onInputValueChange: FormEventHandler<HTMLInputElement>;
    testId: string;
};
declare const HTTPSource: FC<HTTPSourceProps>;
export default HTTPSource;
