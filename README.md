# @onamfc/developer-log

A lightweight wrapper for `console.log` and `console.error` that automatically suppresses output in production environments.

## Installation

```bash
npm install @onamfc/developer-log
```

## Usage

```typescript
import { developer } from '@onamfc/developer-log';

// These will log in development, but not in production
developer.log('This is a log message');
developer.error('This is an error message');
```

## How it works

The package checks `process.env.NODE_ENV` and suppresses all output when it equals `'production'`. In all other environments, it behaves exactly like `console.log` and `console.error`.

## License

MIT
