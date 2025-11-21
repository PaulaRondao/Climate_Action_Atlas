import pino from 'pino';

const transport = pino.transport({
  targets: [
    {
      target: 'pino/file',
      options: { destination: './logs/app.log' },
    },
    {
      target: 'pino-pretty',
      options: { colorize: true, translateTime: true },
    },
  ],
});

const logger = pino({ level: 'info' }, transport);

// logger.trace('trace message');
// logger.debug('debug message');
// logger.info('info message');
// logger.warn('warn message');
// logger.error('error message');
// logger.fatal('fatal message');

export default logger;
