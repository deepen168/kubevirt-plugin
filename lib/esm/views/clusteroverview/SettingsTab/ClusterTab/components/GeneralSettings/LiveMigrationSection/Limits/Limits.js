import React, { useEffect, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NumberInput, Skeleton, Text, TextVariants, Title } from '@patternfly/react-core';
import { useDebounceCallback } from '../../../../../../utils/hooks/useDebounceCallback';
import { getLiveMigrationConfig, MIGRATION_PER_CLUSTER, MIGRATION_PER_NODE, updateLiveMigrationConfig, } from '../utils/utils';
var Limits = function (_a) {
    var hyperConverge = _a.hyperConverge;
    var t = useKubevirtTranslation().t;
    var _b = useState(), migrationPerNode = _b[0], setMigrationPerNode = _b[1];
    var _c = useState(), migrationPerCluster = _c[0], setMigrationPerCluster = _c[1];
    var updateValuesCluster = useDebounceCallback(updateLiveMigrationConfig, 500);
    var updateValuesNode = useDebounceCallback(updateLiveMigrationConfig, 500);
    useEffect(function () {
        if (hyperConverge) {
            var liveMigrationConfig = getLiveMigrationConfig(hyperConverge);
            migrationPerCluster !== null && migrationPerCluster !== void 0 ? migrationPerCluster : setMigrationPerCluster(Number(liveMigrationConfig === null || liveMigrationConfig === void 0 ? void 0 : liveMigrationConfig.parallelMigrationsPerCluster) || 0);
            migrationPerCluster !== null && migrationPerCluster !== void 0 ? migrationPerCluster : setMigrationPerNode(Number(liveMigrationConfig === null || liveMigrationConfig === void 0 ? void 0 : liveMigrationConfig.parallelOutboundMigrationsPerNode) || 0);
        }
    }, [hyperConverge, migrationPerCluster, migrationPerNode]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { component: TextVariants.small }, t('Set live migration limits')),
        React.createElement("div", { className: "live-migration-tab__number--container" },
            React.createElement("div", { className: "live-migration-tab__number--cluster" },
                React.createElement(Title, { headingLevel: "h6", size: "md" }, t('Max. migrations per cluster')),
                !isNaN(migrationPerCluster) ? (React.createElement(NumberInput, { onChange: function (event) {
                        Number(event.target.value) >= 0 &&
                            setMigrationPerCluster(function () {
                                updateValuesCluster(hyperConverge, Number(event.target.value), MIGRATION_PER_CLUSTER);
                                return Number(event.target.value);
                            });
                    }, onMinus: function () {
                        return setMigrationPerCluster(function (newMigrationPerCluster) {
                            updateValuesCluster(hyperConverge, newMigrationPerCluster - 1, MIGRATION_PER_CLUSTER);
                            return newMigrationPerCluster - 1;
                        });
                    }, onPlus: function () {
                        return setMigrationPerCluster(function (newMigrationPerCluster) {
                            updateValuesCluster(hyperConverge, newMigrationPerCluster + 1, MIGRATION_PER_CLUSTER);
                            return newMigrationPerCluster + 1;
                        });
                    }, inputName: MIGRATION_PER_CLUSTER, min: 0, value: migrationPerCluster })) : (React.createElement(Skeleton, { height: '33px', width: '140px' }))),
            React.createElement("div", null,
                React.createElement(Title, { headingLevel: "h6", size: "md" }, t('Max. migrations per node')),
                !isNaN(migrationPerNode) ? (React.createElement(NumberInput, { onChange: function (event) {
                        return Number(event.target.value) >= 0 &&
                            setMigrationPerNode(function () {
                                updateValuesNode(hyperConverge, Number(event.target.value), MIGRATION_PER_NODE);
                                return Number(event.target.value);
                            });
                    }, onMinus: function () {
                        return setMigrationPerNode(function (newMigrationPerNode) {
                            updateValuesNode(hyperConverge, newMigrationPerNode - 1, MIGRATION_PER_NODE);
                            return newMigrationPerNode - 1;
                        });
                    }, onPlus: function () {
                        return setMigrationPerNode(function (newMigrationPerNode) {
                            updateValuesNode(hyperConverge, newMigrationPerNode + 1, MIGRATION_PER_NODE);
                            return newMigrationPerNode + 1;
                        });
                    }, inputName: MIGRATION_PER_NODE, min: 0, value: migrationPerNode })) : (React.createElement(Skeleton, { height: '33px', width: '140px' }))))));
};
export default Limits;
//# sourceMappingURL=Limits.js.map