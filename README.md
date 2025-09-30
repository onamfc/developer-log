# @onamfc/developer-log

A lightweight wrapper for all `console` methods that automatically suppresses output in production environments.

## Installation

```bash
npm install @onamfc/developer-log
```

## Usage

Import and use just like you would use the native `console` object:

```typescript
import { developer } from '@onamfc/developer-log';

// Basic logging
developer.log('Hello, world!');
developer.error('An error occurred');
developer.warn('This is a warning');
developer.info('Informational message');
developer.debug('Debug information');

// Advanced methods
developer.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
developer.trace('Stack trace');
developer.dir({ foo: 'bar' });

// Grouping
developer.group('My Group');
developer.log('Inside group');
developer.groupEnd();

developer.groupCollapsed('Collapsed Group');
developer.log('Hidden by default');
developer.groupEnd();

// Timing
developer.time('operation');
// ... your code ...
developer.timeEnd('operation');
developer.timeLog('operation', 'Checkpoint');

// Counting
developer.count('clicks');
developer.count('clicks');
developer.countReset('clicks');

// Assertions
developer.assert(value === expected, 'Values do not match');

// Other methods
developer.clear();
developer.dirxml(document.body);
```

### Default Export

You can also use the default export:

```typescript
import developer from '@onamfc/developer-log';

developer.log('Using default export');
```

## How it Works

The package checks `process.env.NODE_ENV` and suppresses all output when it equals `'production'`. In all other environments (development, test, etc.), it behaves exactly like the native `console` methods.

### Supported Methods

All standard console methods are supported:

- `log` - General logging
- `error` - Error messages
- `warn` - Warning messages
- `info` - Informational messages
- `debug` - Debug messages
- `trace` - Stack trace
- `table` - Tabular data
- `dir` - Object inspection
- `dirxml` - XML/HTML element inspection
- `group` - Create a message group
- `groupCollapsed` - Create a collapsed message group
- `groupEnd` - End a message group
- `clear` - Clear the console
- `count` - Count occurrences
- `countReset` - Reset counter
- `assert` - Assertion testing
- `time` - Start a timer
- `timeEnd` - End a timer
- `timeLog` - Log elapsed time

## Why Use This?

- **Clean production builds**: No need to manually remove debug statements
- **Type-safe**: Full TypeScript support
- **Zero dependencies**: Lightweight and efficient
- **Drop-in replacement**: Works exactly like `console` in development
- **Performance**: No overhead in production (all methods are no-ops)

## Migration from console

Simply replace `console` with `developer`:

```typescript
// Before
console.log('Debug message');
console.error('Error message');
console.table(data);

// After
import { developer } from '@onamfc/developer-log';

developer.log('Debug message');
developer.error('Error message');
developer.table(data);
```

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

## License

MIT
