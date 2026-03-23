import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

const config = defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
  tagCache: 'dummy',
  queue: 'dummy',
  cachePurge: 'dummy',
});

const openNextConfig = {
  ...config,
  buildCommand: 'npm run build:next',
};

export default openNextConfig;
