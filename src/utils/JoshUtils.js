// TODO: Modernize
/* eslint-disable */
export const range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;
  
    if (step === 0) {
      throw TypeError('Step cannot be zero.');
    }
  
    if (typeof end === 'undefined' && typeof 'step' === 'undefined') {
      end = start;
      start = 0;
      typeofStart = typeof start;
      typeofEnd = typeof end;
    }
  
    if (typeofStart == 'undefined' || typeofEnd == 'undefined') {
      throw TypeError('Must pass start and end arguments.');
    } else if (typeofStart != typeofEnd) {
      throw TypeError('Start and end arguments must be of same type.');
    }
  
    typeof step == 'undefined' && (step = 1);
  
    if (end < start) {
      step = -step;
    }
  
    if (typeofStart == 'number') {
      while (step > 0 ? end >= start : end <= start) {
        range.push(start);
        start += step;
      }
    } else if (typeofStart == 'string') {
      if (start.length != 1 || end.length != 1) {
        throw TypeError('Only strings with one character are supported.');
      }
  
      start = start.charCodeAt(0);
      end = end.charCodeAt(0);
  
      while (step > 0 ? end >= start : end <= start) {
        range.push(String.fromCharCode(start));
        start += step;
      }
    } else {
      throw TypeError('Only string and number types are supported');
    }
  
    return range;
  };
  /* eslint-enable */
  
  export const sample = (arr, len = 1) => {
    let output = [];
  
    for (let i = 0; i < len; i++) {
      output.push(arr[Math.floor(Math.random() * arr.length)]);
    }
  
    return output;
  };
  
  export const random = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min;
  
  export const sum = values => values.reduce((sum, value) => sum + value, 0);
  export const mean = values => sum(values) / values.length;
  
  export const clamp = (val, min = 0, max = 1) =>
    Math.max(min, Math.min(max, val));
  
  export const roundTo = (number, places = 0) =>
    Math.round(number * 10 ** places) / 10 ** places;
  
  export const debounce = (callback, wait, timeoutId = null) => (...args) => {
    window.clearTimeout(timeoutId);
  
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
  
  export const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function() {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
  
  export const isEmpty = obj => Object.keys(obj).length === 0;
  
  export const getInterpolatedValue = (y1, y2, ratio) => {
    // We're assuming that `ratio` is a value between 0 and 1.
    // If this were a graph, it'd be our `x`, and we're trying to solve for `y`.
    // First, find the slope of our line.
    const slope = y2 - y1;
  
    return slope * ratio + y1;
  };
  
  export const pick = (obj, keys) => {
    var o = {};
    var i = 0;
    var key;
  
    keys = Array.isArray(keys) ? keys : [keys];
  
    while ((key = keys[i++])) {
      if (typeof obj[key] !== 'undefined') {
        o[key] = obj[key];
      }
    }
    return o;
  };
  
  export const omit = function(obj, key) {
    var newObj = {};
  
    for (var name in obj) {
      if (name !== key) {
        newObj[name] = obj[name];
      }
    }
  
    return newObj;
  };
  
  export const convertArrayToMap = list =>
    list.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: item,
      }),
      {}
    );
  
  // Either removes or adds an item to an array
  // EXAMPLE: toggleInArray([1, 2], 3) -> [1, 2, 3]
  // EXAMPLE: toggleInArray([1, 2], 2) -> [1]
  export const toggleInArray = (arr, item) =>
    arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item];
  
  // Combines 2 arrays, removing duplicates.
  // EXAMPLE: mergeUnique([1, 2], [2, 3]) -> [1, 2, 3]
  export const mergeUnique = (arr1, arr2) =>
    arr1.concat(arr2.filter(item => arr1.indexOf(item) === -1));
  
  export const findRight = (arr, predicate) =>
    arr
      .slice()
      .reverse()
      .find(predicate);
  
  export function requestAnimationFramePromise() {
    return new Promise(resolve => window.requestAnimationFrame(resolve));
  }
  
  export function setTimeoutPromise(duration) {
    return new Promise(resolve => window.setTimeout(resolve, duration));
  }
  
  export const capitalize = str => str[0].toUpperCase() + str.slice(1);
  
  export const deleteCookie = key => {
    document.cookie = `${encodeURIComponent(
      key
    )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };
  
  export const convertHexToRGBA = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  
  export const hyphenate = str => str.replace(/([A-Z])/g, '-$1').toLowerCase();
  
  export const delay = duration =>
    new Promise(resolve => window.setTimeout(resolve, duration));
  
  export const getTimeOfDay = () => {
    const now = new Date();
    const hourOfDay = now.getHours();
  
    if (hourOfDay <= 4) {
      return 'night';
    } else if (hourOfDay <= 11) {
      return 'morning';
    } else if (hourOfDay <= 17) {
      return 'afternoon';
    } else if (hourOfDay <= 21) {
      return 'evening';
    } else {
      return 'night';
    }
  };
  
  export const generateID = (len = 4) => {
    // prettier-ignore
    const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
    return sample(characters, len).join('');
  };
  
  export const normalize = (
    number,
    currentScaleMin,
    currentScaleMax,
    newScaleMin = 0,
    newScaleMax = 1
  ) => {
    // FIrst, normalize the value between 0 and 1.
    const standardNormalization =
      (number - currentScaleMin) / (currentScaleMax - currentScaleMin);
  
    // Next, transpose that value to our desired scale.
    return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
  };