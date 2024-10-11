import { KubeObjectInterface, makeKubeObject } from './cluster';

export interface KubeRuntimeClass extends KubeObjectInterface {
  handler: string;
}

export class RuntimeClass extends makeKubeObject<KubeRuntimeClass>() {
  static kind = 'RuntimeClass';
  static apiName = 'runtimeclasses';
  static apiVersion = 'node.k8s.io/v1';
  static isNamespaced = false;

  get spec() {
    return this.jsonData!.spec;
  }
}
