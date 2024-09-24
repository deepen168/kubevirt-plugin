import React from 'react';
var CloudInitEditor = React.lazy(function () {
    return import('./CloudInitEditor').then(function (module) { return ({ default: module._CloudInitEditor }); });
});
export default CloudInitEditor;
//# sourceMappingURL=index.js.map