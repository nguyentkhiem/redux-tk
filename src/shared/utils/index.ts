import { RcFile } from 'antd/es/upload';
import { compile } from 'path-to-regexp';
import { v4 as uuidv4 } from 'uuid';

export const compileUrl = (link: string, params?: Object) => {
  const url = compile(link)(params);
  return {
    url: url.toString(),
    data: params,
  };
};

/**
 * @input @Number digit
 * @description getLocalTimeZone
 */
export const digitToStr = (digit: number) => `${digit < 10 ? '0' : ''}${digit}`;

/**
 * @description getLocalTimeZone
 */
export const getLocalTimeZone = () => {
  const currentTime = new Date();
  const currentTimezone = currentTime.getTimezoneOffset();
  const hourTimeZone = Math.abs(currentTimezone) / 60;
  const minTimeZone = Math.abs(currentTimezone) % 60;
  const timeZone = `${digitToStr(hourTimeZone)}:${digitToStr(minTimeZone)}`;
  return `${currentTimezone < 0 ? '+' : '-'}${timeZone}`;
};

/**
 * @description generateUuidv4
 */
export const generateUuidv4 = (): any => uuidv4();

/**
 *
 * @param data
 */
export const formatFormData = (data: { [x: string]: any } = {}): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

/**
 *
 * @param f
 * @param size
 */
export const checkFileSize = (f: RcFile, size: number): boolean => {
  if (f.size / 1024 / 1024 > size) {
    return false;
  }
  return true;
};

/**
 *
 * @param f
 * @param typesAllow
 */
export const checkFileType = (f: RcFile, typesAllow: string[]): boolean => {
  if (!typesAllow.includes(f.type)) {
    return false;
  }
  return true;
};

/**
 *
 * @param f
 * @param typesAllow
 */
export const checkFileExtension = (f: RcFile, typesAllow: string[]): boolean => {
  const fileNameSplit = f.name.split('.');
  const fileExtension = fileNameSplit[fileNameSplit.length - 1];
  if (!typesAllow.includes(fileExtension)) {
    return false;
  }
  return true;
};
