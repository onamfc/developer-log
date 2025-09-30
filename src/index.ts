type LogMethod = (...args: any[]) => void;

interface Developer {
  log: LogMethod;
  error: LogMethod;
}

const isProduction = (): boolean => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NODE_ENV === 'production';
  }
  return false;
};

const noop = (): void => {};

export const developer: Developer = {
  log: isProduction() ? noop : console.log.bind(console),
  error: isProduction() ? noop : console.error.bind(console),
};

export default developer;
