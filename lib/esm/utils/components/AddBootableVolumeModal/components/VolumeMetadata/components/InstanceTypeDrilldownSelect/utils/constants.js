import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { MemoryIcon, MicrochipIcon, ModuleIcon, NetworkIcon, RedhatIcon, RegistryIcon, ServerGroupIcon, ServerIcon, TrendUpIcon, UserIcon, } from '@patternfly/react-icons';
export var MENUS = {
    redHatProvided: 'redHatProvided',
    root: 'root',
    series: 'series',
    sizes: 'sizes',
    userProvided: 'userProvided',
};
export var initialMenuItems = {
    redHatProvided: {
        Icon: RedhatIcon,
        id: MENUS.redHatProvided,
        items: [],
        label: t('Red Hat provided'),
    },
    userProvided: {
        Icon: UserIcon,
        id: MENUS.userProvided,
        items: [],
        label: t('User provided'),
    },
};
export var instanceTypeSeriesNameMapper = {
    cx1: {
        Icon: RegistryIcon,
        possibleSizes: ['medium', 'large', 'xlarge', '2xlarge', '4xlarge', '8xlarge'],
        seriesLabel: t('CX series'),
    },
    gn1: {
        Icon: MicrochipIcon,
        possibleSizes: ['xlarge', '2xlarge', '4xlarge', '8xlarge'],
        seriesLabel: t('GN series'),
    },
    highperformance: {
        disabled: true,
        Icon: TrendUpIcon,
        seriesLabel: t('HP series'),
    },
    m1: {
        Icon: MemoryIcon,
        possibleSizes: ['large', 'xlarge', '2xlarge', '4xlarge', '8xlarge'],
        seriesLabel: t('M series'),
    },
    n1: {
        Icon: NetworkIcon,
        possibleSizes: ['medium', 'large', 'xlarge', '2xlarge', '4xlarge', '8xlarge'],
        seriesLabel: t('N series'),
    },
    o1: {
        Icon: ModuleIcon,
        possibleSizes: [
            'nano',
            'micro',
            'small',
            'medium',
            'large',
            'xlarge',
            '2xlarge',
            '4xlarge',
            '8xlarge',
        ],
        seriesLabel: t('O series'),
    },
    server: {
        disabled: true,
        Icon: ServerIcon,
        seriesLabel: t('S series'),
    },
    u1: {
        Icon: ServerGroupIcon,
        possibleSizes: [
            'nano',
            'micro',
            'small',
            'medium',
            'large',
            'xlarge',
            '2xlarge',
            '4xlarge',
            '8xlarge',
        ],
        seriesLabel: t('U series'),
    },
};
export var REDHAT_COM = 'redhat.com';
export var INSTANCETYPE_CLASS_ANNOTATION = 'instancetype.kubevirt.io/class';
export var INSTANCETYPE_DESCRIPTION_ANNOTATION = 'instancetype.kubevirt.io/description';
export var INSTANCETYPE_CLASS_DISPLAY_NAME = 'instancetype.kubevirt.io/displayName';
//# sourceMappingURL=constants.js.map