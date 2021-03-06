import { NativeScriptConfig } from '@nativescript/core';

export default {
    id: 'org.nativescript.demovuecanvas',
    appResourcesPath: 'app/App_Resources',
    webpackConfigPath: 'app.webpack.config.js',
    android: {
        v8Flags: '--expose_gc',
        markingMode: 'none',
    },
    version: '0.1.1',
    appPath: 'app',
} as NativeScriptConfig;
