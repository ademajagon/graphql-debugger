#!/usr/bin/env node
import { debugRootNamespace } from './debug';
process.env.DEBUG = `${debugRootNamespace}:*`;
import { debug } from './debug';

import * as app from '@graphql-debugger/collector-proxy';

async function start() {
  try {
    debug('Starting debugger');

    const PORT = process.env.PORT || 16686;

    await app.start();

    debug(`Debugger Online http://localhost:${PORT}`);
  } catch (error) {
    debug('Failed to connect to start app', error);
    throw error;
  }
}

start();
