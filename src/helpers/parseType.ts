/* eslint-disable @typescript-eslint/no-explicit-any */
function isObject(val: string | object) {
  return val.constructor === Object;
}

function isNumber(val: string) {
  return !Number.isNaN(parseFloat(val)) && Number.isFinite(val);
}

function isBoolean(val: string | object) {
  return val === 'false' || val === 'true';
}

function isArray(val: string | object) {
  return Array.isArray(val);
}

function parseValue(val: string | object) {
  if (typeof val === 'undefined' || val === '') {
    return null;
  }
  if (isBoolean(val)) {
    return parseBoolean(val);
  }
  if (isArray(val)) {
    return parseArray(val);
  }
  if (isObject(val)) {
    return parseObject(val as object);
  }
  if (isNumber(val as string)) {
    return parseNumber(val as string);
  }
  return val;
}

function parseObject(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  let key;
  let val;
  for (key in obj) {
    val = parseValue(obj[key]);
    if (val !== null) result[key] = val; // ignore null values
  }
  return result;
}

function parseArray(arr: any[]) {
  const result: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = parseValue(arr[i]);
  }
  return result;
}

function parseNumber(val: string) {
  return Number(val);
}

function parseBoolean(val: string) {
  return val === 'true';
}

export default parseObject;
