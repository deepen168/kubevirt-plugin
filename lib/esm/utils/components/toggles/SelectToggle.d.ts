import React, { Ref } from 'react';
import { MenuToggleElement, MenuToggleProps } from '@patternfly/react-core';
declare type SelectToggleProps = MenuToggleProps & {
    'data-test-id'?: string;
    selected: any;
};
declare const SelectToggle: ({ "data-test-id": dataTestID, selected, ...menuProps }: SelectToggleProps) => (toggleRef: Ref<MenuToggleElement>) => React.JSX.Element;
export default SelectToggle;
