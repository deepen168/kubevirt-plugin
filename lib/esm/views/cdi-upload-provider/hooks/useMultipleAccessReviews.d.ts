import { AccessReviewResourceAttributes } from '@openshift-console/dynamic-plugin-sdk';
import { ImpersonateKind } from '@openshift-console/dynamic-plugin-sdk/lib/app/redux-types';
declare type UseMultipleAccessReviews = (multipleResourceAttributes: AccessReviewResourceAttributes[], impersonate?: ImpersonateKind) => [{
    allowed: boolean;
    resourceAttributes: AccessReviewResourceAttributes;
}[], boolean];
declare const useMultipleAccessReviews: UseMultipleAccessReviews;
export default useMultipleAccessReviews;
