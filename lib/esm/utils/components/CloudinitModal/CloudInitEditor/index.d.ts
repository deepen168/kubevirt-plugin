import React from 'react';
declare const CloudInitEditor: React.LazyExoticComponent<React.FC<{
    cloudInitVolume: import("@kubevirt-ui/kubevirt-api/kubevirt").V1Volume;
    onSave: (yaml: string) => void;
}>>;
export default CloudInitEditor;
