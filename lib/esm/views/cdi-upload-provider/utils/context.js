import { createContext } from 'react';
export var CDIUploadContext = createContext({
    uploadData: function () { return null; },
    uploads: [],
});
export var CDIUploadProvider = CDIUploadContext.Provider;
//# sourceMappingURL=context.js.map