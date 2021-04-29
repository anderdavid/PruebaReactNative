export const API_URL = process.env.REACT_APP_API_URL;

 export const PAGINATION = {
  results: [],
  pages: 0,
  current: 0,
  total: 0,
  pageSize: 10
};

export const REQUEST_STATUSES = {
  NOT_LOADED: 'notLoaded',
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed'
};
/*
export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  PASSWORD: /^(?=.*[0-9])(?=.*[A-zñ!@#$%^&*])([A-z0-9ñ!@#$%^&*]+)$/,
  NUMERIC: /^[0-9]+$/,
  CELLPHONE: /^(\+)?[0-9]+$/,
  CURRENCY: /^[0-9,.]+$/,
  ALPHANUMERIC: /^[0-9A-z]+$/,
  VERIFICATION_CODE: /^\d{0,3}[A-Z]{0,1}$/
};

export const COLORS = {
  error: '#ea172a',
  primary: '#0078D7',
  success: '#2DCE98',
  warning: '#FFE250',
  secondary: '#172B4D'
};

export const VALIDATION_ERRORS = {
  REQUIRED_FIELD: 'This field is required.',
  INVALID_DATE: 'Please enter a valid date.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  INVALID_FORMAT: 'Please enter a valid format',
  INVALID_FORMAT2: `Please enter a valid format, at least
6 characters in this field, letters and numbers
`,
  MIN_LENGTH: (min) => `Please enter at least ${min} characters in this field.`,
  MAX_LENGTH: (max) => `Please enter ${max} characters maximum in this field.`,
  EXACT_LENGTH: (length) =>
    `Please enter exactly ${length} characters in this field.`,
  EXACT_LENGTH_ZIPCODE: 'Invalid Zip code',
  IS_NAN: 'Please enter a number',
  INVALID_PHONE_FORMAT: 'Please enter a valid phone format.',
  INVALID_DATA: (value) => `Please enter a valid ${value}.`,
  BETWEEN: (one, two) => `Please enter a value between ${one} and ${two}.`,
  NOT_EXIST: (value) => `This ${value} not exist.`,
  EXIST: (value) => `This ${value} was taken already.`,
  NOT_MATCH: (value) => `This ${value} does not match.`
};

export const IMAGES = {
  logo: require('../assets/images/logo.svg'),
  logoName: require('../assets/images/logo_name.svg'),
  shield: require('../assets/images/shield.svg'),
  padlock: require('../assets/images/padlock.svg'),
  menu: require('../assets/images/menu.svg'),
  homeCover: require('../assets/images/home_cover1.png'),
  cover1: require('../assets/images/cover_01.jpg'),
  cover2: require('../assets/images/cover_02.jpg'),
  cover3: require('../assets/images/cover_03.jpg'),
  vesselStowage: require('../assets/images/vessel-stowage.svg')
};

export const LOGIN_SLIDES = [IMAGES.cover1, IMAGES.cover2, IMAGES.cover3]; */
