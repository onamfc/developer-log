type LogMethod = (...args: any[]) => void;

interface Developer {
  log: LogMethod;
  error: LogMethod;
  warn: LogMethod;
  info: LogMethod;
  debug: LogMethod;
  trace: LogMethod;
  table: LogMethod;
  dir: LogMethod;
  dirxml: LogMethod;
  group: LogMethod;
  groupCollapsed: LogMethod;
  groupEnd: LogMethod;
  clear: LogMethod;
  count: LogMethod;
  countReset: LogMethod;
  assert: LogMethod;
  time: LogMethod;
  timeEnd: LogMethod;
  timeLog: LogMethod;
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
  warn: isProduction() ? noop : console.warn.bind(console),
  info: isProduction() ? noop : console.info.bind(console),
  debug: isProduction() ? noop : console.debug.bind(console),
  trace: isProduction() ? noop : console.trace.bind(console),
  table: isProduction() ? noop : console.table.bind(console),
  dir: isProduction() ? noop : console.dir.bind(console),
  dirxml: isProduction() ? noop : console.dirxml.bind(console),
  group: isProduction() ? noop : console.group.bind(console),
  groupCollapsed: isProduction() ? noop : console.groupCollapsed.bind(console),
  groupEnd: isProduction() ? noop : console.groupEnd.bind(console),
  clear: isProduction() ? noop : console.clear.bind(console),
  count: isProduction() ? noop : console.count.bind(console),
  countReset: isProduction() ? noop : console.countReset.bind(console),
  assert: isProduction() ? noop : console.assert.bind(console),
  time: isProduction() ? noop : console.time.bind(console),
  timeEnd: isProduction() ? noop : console.timeEnd.bind(console),
  timeLog: isProduction() ? noop : console.timeLog.bind(console),
};

export default developer;
