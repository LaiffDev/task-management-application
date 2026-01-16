
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-management-application/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29361, hash: 'e522bdfcb118254e316497c518a7e04d0d9eb5bc1c89f5ff8ec802c82b9347fe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17725, hash: '083d43e53d6a7786f0e4100b36f26a36e20c00f21f5205d6dd9a7e8abeca9375', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BYXELOES.css': {size: 24594, hash: 'yYC1MqGw+DU', text: () => import('./assets-chunks/styles-BYXELOES_css.mjs').then(m => m.default)}
  },
};
