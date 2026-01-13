
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-management-application/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29361, hash: 'a39414f904310d10fd42bdd9627e1366673226fc8e100e21627452472c40c429', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17725, hash: '5d4752c1d16d7da27e55d32bd24f66851db05ddd840c63db56a020fb6845e5ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BYXELOES.css': {size: 24594, hash: 'yYC1MqGw+DU', text: () => import('./assets-chunks/styles-BYXELOES_css.mjs').then(m => m.default)}
  },
};
