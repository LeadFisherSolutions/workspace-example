import { Logger } from './log/logger.js';

const a = new Logger(() => {});
a.error('error');
a.debug('debug');
a.log('log');
a.dir({ asd: 123, ad: [12, 32] });
a.system('system');
a.access('access');
