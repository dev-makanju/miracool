module.exports = {
    //...other vue cli plugin functions
    pwa: {
        name:'Portfolio',
        themeColor:'  #156373',
        msTitleColor:'#156373',
        AppleMobileWebAppCapable: 'yes',
        AppleMobileStatusBarStyle:'  #156373',

        //configure the workbox plugin
        workboxPluginMode:'InjectManifest',
        workboxOptions:{
            //swSrc is required in injectManifest mode.
            swSrc:'src/sw.js',
            //...other workbox options
        }
    }   
}