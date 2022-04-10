export interface TypeCheckerInterface {
  isString(value: any): boolean
  isArray(value: any): boolean
}

export class TypeChecker implements TypeCheckerInterface {
  isString<T>(value: T | string): value is string {
    return typeof value === 'string' || value instanceof String;
  }

  isArray(value: any): boolean {
    return Boolean(value && typeof value === 'object' && value.constructor === Array);
  }
}
