// 注入
const { injectBabelPlugin } = require('react-app-rewired');
const rewireMobX = require('react-app-rewire-mobx');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// less
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // do stuff with the webpack config...

  config = rewireMobX(config, env);
  // antd
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#1DA57A' },
    javascriptEnabled: true
  })(config, env);

  config = rewireReactHotLoader(config, env);

  return config;
};
