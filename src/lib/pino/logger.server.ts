import pino from 'pino';

const isDev = process.env.NODE_ENV === 'development';

const logger = isDev
  ? pino({
      level: 'info',
      transport: {
        targets: [
          {
            target: 'pino-pretty',
            options: { colorize: true, translateTime: true },
          },
          {
            target: 'pino/file',
            options: { destination: './logs/app.log' },
          },
        ],
      },
    })
  : pino({ level: 'info' });

export default logger;
