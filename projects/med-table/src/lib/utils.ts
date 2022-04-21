export const deepClone = <R>(data: R): R => JSON.parse(JSON.stringify(data));
