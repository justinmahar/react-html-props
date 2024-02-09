try{
(()=>{var g=__STORYBOOK_API__,{ActiveTabs:S,Consumer:T,ManagerContext:_,Provider:f,addons:r,combineParameters:v,controlOrMetaKey:O,controlOrMetaSymbol:M,eventMatchesShortcut:x,eventToShortcut:P,isMacLike:A,isShortcutTaken:C,keyToSymbol:j,merge:w,mockChannel:R,optionOrAltSymbol:B,shortcutMatchesShortcut:G,shortcutToHumanString:H,types:I,useAddonState:K,useArgTypes:Y,useArgs:D,useChannel:E,useGlobalTypes:L,useGlobals:N,useParameter:J,useSharedState:V,useStoryPrepared:q,useStorybookApi:U,useStorybookState:W}=__STORYBOOK_API__;var Z=__STORYBOOK_THEMING__,{CacheProvider:$,ClassNames:ee,Global:te,ThemeProvider:oe,background:re,color:se,convert:ie,create:s,createCache:ae,createGlobal:ne,createReset:ce,css:pe,darken:le,ensure:me,ignoreSsrWarning:ue,isPropValid:de,jsx:he,keyframes:be,lighten:ke,styled:ye,themes:ge,typography:Se,useTheme:Te,withTheme:_e}=__STORYBOOK_THEMING__;var i={name:"react-html-props",version:"2.0.5",coreVersion:"3.0.4",author:"Justin Mahar <contact@justinmahar.com>",description:"Convenient TypeScript types for all React HTML props.",homepage:"https://github.com/justinmahar/react-html-props",main:"./dist/index.js",types:"./dist/index.d.ts",scripts:{build:"rm -rf ./dist && tsc",test:"npm run build",start:"npm run storybook",storybook:"storybook dev -p 6006","build-storybook":"storybook build",preship:'npm run build && git diff-index HEAD && npm version patch -m "Build, version, and publish."',ship:"npm publish --access public",postship:"git push",update:"rm -rf .lockblocks && git clone -q git@github.com:justinmahar/react-kindling.git ./.lockblocks && lockblocks ./.lockblocks . --verbose && rm -rf .lockblocks && echo '' && echo ' \u2192 Be sure to run `npm i` to install new dependencies.' && echo ''"},license:"MIT",repository:{type:"git",url:"git+https://github.com/justinmahar/react-html-props.git"},bugs:{url:"https://github.com/justinmahar/react-html-props/issues"},keywords:["react","html","props","prop types","typescript","react html props"],peerDependencies:{react:"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0","react-dom":"^16.0.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^20.0.0 || ^21.0.0 || ^22.0.0"},devDependencies:{"@storybook/addon-docs":"^7.6.12","@storybook/addon-essentials":"^7.6.12","@storybook/addon-viewport":"^7.6.12","@storybook/blocks":"^7.6.12","@storybook/react":"^7.6.12","@storybook/react-webpack5":"^7.6.12","@types/react":"^18.2.53","@typescript-eslint/eslint-plugin":"^6.20.0","@typescript-eslint/parser":"^6.20.0",eslint:"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-storybook":"^0.6.15",lockblocks:"^1.1.4",prettier:"^3.2.5",react:"^18.2.0","react-dom":"^18.2.0","react-html-props":"^2.0.4","react-markdown":"^8.0.3","remark-gfm":"^3.0.1","replace-in-file":"^7.1.0",storybook:"^7.6.12",typescript:"^5.3.3",webpack:"^5.90.1"}};var c="React HTML Props",p=i.homepage,l="light",m=void 0,a=s({base:l,brandTitle:c,brandUrl:p,brandImage:m});r.setConfig({theme:a});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
