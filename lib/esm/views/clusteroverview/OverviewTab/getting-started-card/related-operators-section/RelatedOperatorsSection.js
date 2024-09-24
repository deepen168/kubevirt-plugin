import * as React from 'react';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import GettingStartedSectionContents from '../utils/getting-started-content/GettingStartedSectionContents';
import useMTVResources from '../utils/hooks/useMTVResources';
import './RelatedOperatorsSection.scss';
var RelatedOperatorsSection = function () {
    var t = useKubevirtTranslation().t;
    var _a = useMTVResources(), mtvLink = _a.mtvLink, mtvLoaded = _a.mtvLoaded;
    var isAdmin = useIsAdmin();
    var moreLink = {
        external: true,
        href: 'https://access.redhat.com/documentation/en-us/openshift_container_platform/4.14/html/operators/',
        id: 'openshift-virtualization-related-operators',
        title: t('Learn more about Operators'),
    };
    var links = [
        {
            external: !isAdmin,
            href: isAdmin
                ? '/operatorhub/all-namespaces?keyword=nmstate'
                : 'https://docs.openshift.com/container-platform/4.14/networking/k8s_nmstate/k8s-nmstate-about-the-k8s-nmstate-operator.html',
            id: 'kubernetes-nmstate',
            title: t('Kubernetes NMState Operator'),
        },
        {
            external: !isAdmin,
            href: isAdmin
                ? '/operatorhub/all-namespaces?keyword=ODF'
                : 'https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/4.14/html-single/red_hat_openshift_data_foundation_architecture/index',
            id: 'openshift-data-foundation',
            title: t('OpenShift Data Foundation'),
        },
        {
            description: t('Migrate multiple virtual machine workloads to OpenShift Virtualization. '),
            external: !isAdmin,
            href: isAdmin
                ? '/operatorhub/all-namespaces?keyword=MTV'
                : 'https://access.redhat.com/documentation/en-us/migration_toolkit_for_virtualization/2.5/html/installing_and_using_the_migration_toolkit_for_virtualization/index',
            id: 'openshift-virtualization-mtv',
            secondaryLinkExternal: true,
            secondaryLinkHref: mtvLink,
            secondaryLinkText: t('Launch Migration Toolkit for Virtualization web console'),
            showSecondaryLink: mtvLoaded && !!mtvLink,
            title: t('Migration Toolkit for Virtualization'),
        },
    ];
    return (React.createElement(GettingStartedSectionContents, { icon: React.createElement("i", { "aria-hidden": "true", className: "fas fa-cubes", color: "var(--pf-global--primary-color--100)", id: "kv-getting-started--related-operators-icon" }), description: t('Ease operational complexity with virtualization by using Operators.'), id: "related-operators", links: links, moreLink: moreLink, title: t('Related operators'), titleColor: 'var(--co-global--palette--orange-400)' }));
};
export default RelatedOperatorsSection;
//# sourceMappingURL=RelatedOperatorsSection.js.map