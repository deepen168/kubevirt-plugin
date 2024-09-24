import { useEffect, useState } from 'react';
import { checkAccess } from '@openshift-console/dynamic-plugin-sdk';
var useMultipleAccessReviews = function (multipleResourceAttributes, impersonate) {
    var _a = useState(true), loading = _a[0], setLoading = _a[1];
    var _b = useState([]), allowedResourceAttributes = _b[0], setAllowedResourceAttributes = _b[1];
    useEffect(function () {
        var promises = multipleResourceAttributes.map(function (resourceAttributes) {
            return checkAccess(resourceAttributes, impersonate);
        });
        Promise.all(promises)
            .then(function (values) {
            setLoading(false);
            var updatedAllowedArr = values.map(function (result) { return ({
                allowed: result.status.allowed,
                resourceAttributes: result.spec.resourceAttributes,
            }); });
            setAllowedResourceAttributes(updatedAllowedArr);
        })
            .catch(function (e) {
            // eslint-disable-next-line no-console
            console.warn('SelfSubjectAccessReview failed', e);
            setLoading(false);
        });
    }, [impersonate, multipleResourceAttributes]);
    return [allowedResourceAttributes, loading];
};
export default useMultipleAccessReviews;
//# sourceMappingURL=useMultipleAccessReviews.js.map