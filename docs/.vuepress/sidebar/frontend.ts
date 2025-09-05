export default [
  {
    text: '基础知识',
    icon: 'basic',
    collapsible: true,
    prefix: '/frontend/basic/',
    children: [
      {
        text: 'HTML',
        icon: 'html5',
        prefix: 'html/',
        collapsible: true,
        children: [
          '',
          '001-html-history',
          '002-quick-start',
          '003-doctype',
          '004-common-element',
          '005-advanced-element',
          '006-semantically-meaningful-tags',
          '007-media-tag',
          '008-canvas-svg',
          '009-src-vs-href',
          '010-html5',
          '011-defer-vs-async',
          '012-form-validation',
          '013-seo'
        ]
      },
      {
        text: 'CSS',
        icon: 'css3',
        prefix: 'css/',
        collapsible: true,
        children: [
          '',
          '001-quick-start',
          '002-selector',
          '003-box-model',
          '004-text-font',
          '005-cascade-inheritance',
          '006-background-border',
          '007-position',
          '008-float',
          '009-flex',
          '010-unit',
          '011-center',
          '012-grid',
          '013-BFC',
          '014-responsive-design-intro',
          '015-responsive-design',
          '016-how-to-responsive',
          '017-loading-spinner',
          '018-autofill'
        ]
      },
      {
        text: 'JavaScript',
        icon: 'js',
        prefix: 'javascript/',
        collapsible: true,
        children: [
          '',
          '001-var-let-const',
          '002-types',
          '003-judge-type',
          '004-primitive-value-reference-value',
          '005-execution-context',
          '006-toString-toLocalString-valueOf',
          '007-basic-reference-type',
          '008-collection-reference-type',
          '009-array-like-object',
          '010-object-property',
          '011-create-object',
          '012-extends',
          '013-class',
          '014-implement-new',
          '015-function',
          '016-this',
          '017-implement-call-apply-bind',
          '018-addEventListener'
        ]
      }
    ]
  },
  {
    text: '框架和库',
    collapsible: true,
    icon: 'framework',
    prefix: '/frontend/framework/',
    children: [
      {
        text: 'React',
        collapsible: true,
        prefix: 'react/',
        icon: 'react',
        children: [
          '00-fundaments',
          '01-useState',
          '02-useEffect',
          '03-useRef',
          '04-useId',
          '05-useReducer',
          '06-createPortal',
          '07-useImperativeHandle',
          '08-flushSync',
          '09-useSyncExternalStore',
          '10-suspense',
          '11-useTransition',
          '12-useOptimistic',
          '13-useDeferredValue',
          '14-useMemo-useCallback-memo'
        ]
      },
      {
        text: 'Expo',
        collapsible: true,
        prefix: 'expo/',
        icon: 'expo',
        children: ['']
      },
      {
        text: 'Vue',
        collapsible: true,
        prefix: 'vue/',
        icon: 'vue',
        children: []
      },
      {
        text: 'Next',
        collapsible: true,
        prefix: 'next/',
        icon: 'next-js',
        children: [
          {
            text: 'Pages Router',
            collapsible: true,
            prefix: 'pages-router/',
            icon: 'page-dir',
            children: ['01-pages-layouts']
          }
        ]
      },
      {
        text: 'chakra',
        collapsible: true,
        prefix: 'chakra/',
        icon: 'chakra',
        children: ['01-getting-started', '02-style-props']
      },
      {
        text: 'Node',
        collapsible: true,
        prefix: 'node/',
        icon: 'nodejs',
        children: []
      },
      {
        text: 'Pixi',
        collapsible: true,
        prefix: 'pixi/',
        icon: 'pixi',
        children: ['01-quick-start', '02-architecture-overview', '03-render-loop', '04-scene-graph']
      }
    ]
  },
  {
    text: '工程化',
    collapsible: true,
    icon: 'jiejiangongcheng',
    prefix: '/frontend/engineering/',
    children: [
      {
        text: '基础概念',
        collapsible: true,
        icon: 'basic',
        prefix: 'basic/',
        children: [
          '01-modularization',
          '02-package-manager',
          '03-tool',
          '04-project-standards',
          '05-yeoman',
          '06-fnm-nvm',
          '07-fnm-global-module-shared'
        ]
      },
      {
        text: '打包工具',
        collapsible: true,
        icon: 'auto-set-up',
        prefix: 'build-tool/',
        children: [
          {
            text: 'Webpack',
            collapsible: true,
            prefix: 'webpack/',
            icon: 'webpack',
            children: [
              '001-webpack-basic',
              '002-webpack-css',
              '003-webpack-assets',
              '004-webpack-plugin',
              '005-webpack-babel',
              '006-webpack-vue',
              '007-webpack-dev-server',
              '008-webpack-resolve',
              '009-webpack-env-split'
            ]
          },
          {
            text: 'Vite',
            collapsible: true,
            prefix: 'vite/',
            icon: 'vite',
            children: ['001-hello-vite']
          },
          {
            text: 'Rspack',
            collapsible: true,
            prefix: 'rspack/',
            icon: 'r-mark',
            children: ['001-hello-rspack']
          }
        ]
      },
      {
        text: '服务端渲染',
        collapsible: true,
        icon: '7',
        prefix: 'ssr/',
        children: ['005-qwik', '006-react-server-component', '007-hydration-is-pure-overhead']
      }
    ]
  },
  {
    text: '实践',
    collapsible: true,
    icon: 'practice',
    prefix: '/frontend/practice/',
    children: [
      '001-dnd-kit',
      '002-annotation',
      '003-file-upload',
      '004-global-upload',
      '005-postcss-px-to-viewport',
      '006-animation-svg',
      '007-offline-export-in-highcharts',
      '010-antd-textarea-placeholder-pre-line',
      '015-auto-change-node',
      '016-rest-client-error',
      '017-whistle-debug-real-phone',
      '018-monaco-editor-react',
      '019-ios-prevent-touch',
      '020-ios-img',
      '022-videojs-component',
      '023-weixin-video-preload'
    ]
  },
  {
    text: '浏览器',
    collapsible: true,
    icon: 'gugeliulanqi',
    prefix: '/frontend/browser/',
    children: [
      '',
      '01-how-browser-rendering-works',
      '02-V8',
      '03-memory-management',
      '04-cross-domain',
      '05-what-happens-after-entering-the-URL'
    ]
  }
]
