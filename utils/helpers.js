import { useRef, useEffect } from 'react';

export const createActionTypes = (key, baseAction) => {
  return {
    [`${baseAction}`]: `${key}/${baseAction}`,
    [`${baseAction}_REQUEST`]: `${key}/${baseAction}_REQUEST`,
    [`${baseAction}_SUCCESS`]: `${key}/${baseAction}_SUCCESS`,
    [`${baseAction}_FAILURE`]: `${key}/${baseAction}_FAILURE`
  };
};

export const getLocalStorage = (name) => {
  return window.localStorage.getItem(name);
};

export const setLocalStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const removeLocalStorage = (name) => {
  window.localStorage.removeItem(name);
};

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const getErrors = (response) => {
  let obj = response.errors;
  let mObj = Object.values(obj);
  let msg = mObj[0];
  return msg;
};

export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const formatHour = (hour) => {};
export const objectsToArray = (arrayObjects) => {
  const array = [];
  arrayObjects.map((item) => {
    array.push(item.id);
  });
  return array;
};
