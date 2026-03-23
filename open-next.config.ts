import { defineCloudflareConfig } from '@opennextjs/cloudflare';

const config = defineCloudflareConfig({
  incrementalCache: 'dummy',
  tagCache: 'dummy',
  queue: 'dummy',
  cachePurge: 'dummy',
});

const openNextConfig = {
  ...config,
  buildCommand: 'npm run build:next',
};

export default openNextConfig;
