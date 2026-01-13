
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/task-management-application/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 29361, hash: '3e3ec4fe9f8bd72bd75ef4892b82f01b39e44f012b67cfd3f2bb2b07bac1f032', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17725, hash: '9a757ca555faf43f2530023bb060b8c3fb7c31a28a0dc9d04017e15a3ce9a216', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BYXELOES.css': {size: 24594, hash: 'yYC1MqGw+DU', text: () => import('./assets-chunks/styles-BYXELOES_css.mjs').then(m => m.default)}
  },
};
