// external vor builtin (falsch), internal mitten drin ohne Leerzeilen (falsch)
import fs from 'node:fs';
import React from 'react';
import zod from 'zod';
import util from '../util';
import comp from './comp';
import { api } from '@/lib/api';

export const bad = () => {
  console.log(fs.existsSync ? 'ok' : 'no');
  return api() + String(util) + String(comp) + String(zod) + String(React);
};
