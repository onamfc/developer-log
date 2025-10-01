# @onamfc/developer-log

A lightweight wrapper for all `console` methods that automatically suppresses output in production environments.

## Installation

```bash
npm install @onamfc/developer-log
```

## Usage

Import and use just like you would use the native `console` object:

```typescript
import { dev } from '@onamfc/developer-log';

// Basic logging
dev.log('Hello, world!');
dev.error('An error occurred');
dev.warn('This is a warning');
dev.info('Informational message');
dev.debug('Debug information');

// Advanced methods
dev.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
dev.trace('Stack trace');
dev.dir({ foo: 'bar' });

// Grouping
dev.group('My Group');
dev.log('Inside group');
dev.groupEnd();

dev.groupCollapsed('Collapsed Group');
dev.log('Hidden by default');
dev.groupEnd();

// Timing
dev.time('operation');
// ... your code ...
dev.timeEnd('operation');
dev.timeLog('operation', 'Checkpoint');

// Counting
dev.count('clicks');
dev.count('clicks');
dev.countReset('clicks');

// Assertions
dev.assert(value === expected, 'Values do not match');

// Other methods
dev.clear();
dev.dirxml(document.body);
```

### Default Export

You can also use the default export:

```typescript
import dev from '@onamfc/developer-log';

dev.log('Using default export');
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

Simply replace `console` with `dev`:

```typescript
// Before
console.log('Debug message');
console.error('Error message');
console.table(data);

// After
import { dev } from '@onamfc/developer-log';

dev.log('Debug message');
dev.error('Error message');
dev.table(data);
```

## TypeScript

This package is written in TypeScript and includes type definitions out of the box.

## License

MIT
