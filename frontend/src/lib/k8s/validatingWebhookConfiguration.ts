import { KubeObjectInterface, LabelSelector, makeKubeObject } from './cluster';
import { KubeRuleWithOperations, KubeWebhookClientConfig } from './mutatingWebhookConfiguration';

export interface KubeValidatingWebhookConfiguration extends KubeObjectInterface {
  webhooks: {
    admissionReviewVersions: string[];
    clientConfig: KubeWebhookClientConfig;
    failurePolicy?: string;
    matchPolicy?: string;
    name: string;
    namespaceSelector?: {
      matchExpressions: LabelSelector['matchExpressions'];
      matchLabels: LabelSelector['matchLabels'];
    };
    objectSelector?: {
      matchExpressions: LabelSelector['matchExpressions'];
      matchLabels: LabelSelector['matchLabels'];
    };
    rules?: KubeRuleWithOperations[];
    sideEffects?: string;
    timeoutSeconds?: number;
  }[];
}

class ValidatingWebhookConfiguration extends makeKubeObject<KubeValidatingWebhookConfiguration>() {
  static kind = 'ValidatingWebhookConfiguration';
  static apiName = 'validatingwebhookconfigurations';
  static apiVersion = 'admissionregistration.k8s.io/v1';
  static isNamespaced = false;

  get webhooks(): KubeValidatingWebhookConfiguration['webhooks'] {
    return this.jsonData!.webhooks;
  }
}

export default ValidatingWebhookConfiguration;
