import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
/**
 * A Hook that processes a given template and returns the processed template.
 * @param {V1Template} template V1Template to process
 * @param {string} namespace Namespace to process the template in
 * @returns the processed template.
 */
export declare const useProcessedTemplate: (template: V1Template, namespace?: string) => [V1Template, boolean, any];
