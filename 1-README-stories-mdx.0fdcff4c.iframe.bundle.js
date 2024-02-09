/*! For license information please see 1-README-stories-mdx.0fdcff4c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_html_props=self.webpackChunkreact_html_props||[]).push([[836],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ck:()=>withMDXComponents,Eh:()=>MDXContext,Iu:()=>MDXProvider,MN:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qb:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Qb});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/core/1.README.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>_1_README_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const READMEraw_namespaceObject='<h2 align="center">\n  ⚛️ React HTML Props\n</h2>\n<h3 align="center">\n  Convenient TypeScript types for all React HTML props.\n</h3>\n<p align="center">\n  <a href="https://badge.fury.io/js/react-html-props" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-html-props.svg" alt="npm Version" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-html-props/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;\n  <a href="https://github.com/justinmahar/react-html-props/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-html-props/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>\n</p>\n\x3c!-- [lock:donate-badges] 🚫--------------------------------------- --\x3e\n<p align="center">\n  <a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n</p>\n\x3c!-- [/lock:donate-badges] ---------------------------------------🚫 --\x3e\n\n## Documentation\n\nRead the **[official documentation](https://justinmahar.github.io/react-html-props/)**.\n\n## Overview\n\nThis package includes convenient [TypeScript](https://www.typescriptlang.org/) type definitions for all React HTML props.\n\nFor example, this allows you to use the type `DivProps` instead of:\n\n```tsx\nReact.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>\n```\n\n...Because nobody wants to type all of that. 😁\n\nUsing these types makes it easy to support all standard HTML props, such as `style` and `className`, in your own components.\n\n### Features include:\n\n- **🧩 TypeScript types for all React HTML props**\n  - Easily use types for HTML props with simple names like `DivProps`.\n- **🧠 Easy to remember**\n  - All types start with the HTML element name, so you\'ll never end up scratching your head.\n- **👍 Optional types without React ref**\n  - Where needed, use `WithoutRef` types for props that don\'t inherit `ref` from `React.DetailedHTMLProps`.\n\n\x3c!-- [lock:donate] 🚫--------------------------------------- --\x3e\n\n## Donate \n\nIf this project helped you, please consider buying me a coffee or sponsoring me. Your support is much appreciated!\n\n<a href="https://ko-fi.com/justinmahar"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>\n\n\x3c!-- [/lock:donate] ---------------------------------------🚫 --\x3e\n\n## Table of Contents \n\n- [Documentation](#documentation)\n- [Overview](#overview)\n  - [Features include:](#features-include)\n- [Donate](#donate)\n- [Table of Contents](#table-of-contents)\n- [Installation](#installation)\n- [Quick Start](#quick-start)\n- [Unpacking Props](#unpacking-props)\n- [Extending HTML Props](#extending-html-props)\n- [Included HTML Element Props](#included-html-element-props)\n- [Props Without Ref](#props-without-ref)\n- [TypeScript](#typescript)\n- [Icon Attribution](#icon-attribution)\n- [Contributing](#contributing)\n- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)\n- [License](#license)\n\n## Installation\n\n```\nnpm i --save-dev react-html-props\n```\n\n## Quick Start\n\nLet\'s use `div` as an example since it\'s the most common.\n\nYou can use `DivProps` to support all props for `div` in your own components. \n\n```tsx\nimport { DivProps } from "react-html-props";\n\nconst MyComponent = (props: DivProps) => {\n  return <div {...props}>{props.children}</div>;\n};\n```\n\n> Note: `DivProps` is equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>`\n\nIn this example, we\'re using `className`, `style`, and `onClick` on our own component since it supports all `div` props:\n\n```tsx\nconst render = () => (\n  <MyComponent\n    className="text-center"\n    style={{ background: \'blue\', color: \'white\' }}\n    onClick={() => console.log(\'Get schwifty!\')}\n  >\n    Show me what you got\n  </MyComponent>\n);\n```\n\nTypes are available for all HTML props. See below for a table containing all supported types.\n\n## Unpacking Props\n\nWe can use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) and the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to unpack props, such as `children`, from the rest of an element\'s props.\n\nUsing `div` as an example again:\n\n```tsx\nimport { DivProps } from "react-html-props";\n\nexport const MyComponent = ({ children, ...divProps }: DivProps): JSX.Element => {\n  return <div {...divProps}>{children}</div>;\n};\n```\n\n## Extending HTML Props\n\nYou can extend all HTML props to add your own.\n\nThen use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) to unpack and use your own props.\n\nJust follow the example below:\n\n```tsx\ninterface KindleOfKittensProps extends DivProps {\n  kittenCount: 10;\n}\n\nexport const KindleOfKittens = ({ kittenCount, ...divProps }: KindleOfKittensProps): JSX.Element => {\n  return (\n    <div {...divProps}>\n      <h1>I have a kindle of {kittenCount} kittens</h1>\n    </div>\n  );\n};\n```\n\n(Yes, a group of kittens is called a "kindle")\n\n## Included HTML Element Props\n\nThe goal was to make it as easy to use each HTML element\'s props as possible, so the types for all props begin with the exact HTML element.\n\nFor example, the type for the `p` element\'s props is `PProps`. \n\nIn some cases there are multiple types available, such as with headings `h1`, `h2`, `h3`, etc. The props for these elements can be referenced either as `H1Props`, `H2Props`, `H3Props`, etc, or simply as `HeadingProps`. See the table below for more.\n\nYou can import any of the following types:\n\n| HTML Element         | Props Type To Use                 |\n| -------------------- | --------------------------------- |\n| `a`                  | `AProps`                          |\n| `abbr`               | `AbbrProps`                       |\n| `address`            | `AddressProps`                    |\n| `area`               | `AreaProps`                       |\n| `article`            | `ArticleProps`                    |\n| `aside`              | `AsideProps`                      |\n| `audio`              | `AudioProps`                      |\n| `b`                  | `BProps`                          |\n| `base`               | `BaseProps`                       |\n| `bdi`                | `BDIProps`                        |\n| `bdo`                | `BDOProps`                        |\n| `blockquote`         | `BlockQuoteProps`                 |\n| `body`               | `BodyProps`                       |\n| `br`                 | `BRProps`                         |\n| `button`             | `ButtonProps`                     |\n| `canvas`             | `CanvasProps`                     |\n| `caption`            | `CaptionProps`                    |\n| `cite`               | `CiteProps`                       |\n| `code`               | `CodeProps`                       |\n| `col`                | `ColProps`                        |\n| `colgroup`           | `ColGroupProps`                   |\n| `data`               | `DataProps`                       |\n| `datalist`           | `DataListProps`                   |\n| `dd`                 | `DDProps`                         |\n| `del`                | `DelProps`                        |\n| `details`            | `DetailsProps`                    |\n| `dfn`                | `DfnProps`                        |\n| `dialog`             | `DialogProps`                     |\n| `div`                | `DivProps`                        |\n| `dl`                 | `DLProps`                         |\n| `dt`                 | `DTProps`                         |\n| `em`                 | `EmProps`                         |\n| `embed`              | `EmbedProps`                      |\n| `fieldset`           | `FieldSetProps`                   |\n| `figcaption`         | `FigCaptionProps`                 |\n| `figure`             | `FigureProps`                     |\n| `footer`             | `FooterProps`                     |\n| `form`               | `FormProps`                       |\n| `h1`                 | `H1Props`, `HeadingProps`         |\n| `h2`                 | `H2Props`, `HeadingProps`         |\n| `h3`                 | `H3Props`, `HeadingProps`         |\n| `h4`                 | `H4Props`, `HeadingProps`         |\n| `h5`                 | `H5Props`, `HeadingProps`         |\n| `h6`                 | `H6Props`, `HeadingProps`         |\n| `head`               | `HeadProps`                       |\n| `header`             | `HeaderProps`                     |\n| `hgroup`             | `HGroupProps`                     |\n| `hr`                 | `HRProps`                         |\n| `html`               | `HtmlProps`                       |\n| `i`                  | `IProps`                          |\n| `iframe`             | `IFrameProps`                     |\n| `img`                | `ImgProps`                        |\n| `input`              | `InputProps`                      |\n| `ins`                | `InsProps`                        |\n| `kbd`                | `KbdProps`                        |\n| `label`              | `LabelProps`                      |\n| `legend`             | `LegendProps`                     |\n| `li`                 | `LIProps`                         |\n| `link`               | `LinkProps`                       |\n| `main`               | `MainProps`                       |\n| `map`                | `MapProps`                        |\n| `mark`               | `MarkProps`                       |\n| `menu`               | `MenuProps`                       |\n| `meta`               | `MetaProps`                       |\n| `meter`              | `MeterProps`                      |\n| `nav`                | `NavProps`                        |\n| `noscript`           | `NoScriptProps`                   |\n| `object`             | `ObjectProps`                     |\n| `ol`                 | `OLProps`                         |\n| `optgroup`           | `OptGroupProps`                   |\n| `option`             | `OptionProps`                     |\n| `output`             | `OutputProps`                     |\n| `p`                  | `PProps`                          |\n| `param`              | `ParamProps`                      |\n| `picture`            | `PictureProps`                    |\n| `pre`                | `PreProps`                        |\n| `progress`           | `ProgressProps`                   |\n| `q`                  | `QProps`                          |\n| `rp`                 | `RPProps`                         |\n| `rt`                 | `RTProps`                         |\n| `ruby`               | `RubyProps`                       |\n| `s`                  | `SProps`                          |\n| `samp`               | `SampProps`                       |\n| `script`             | `ScriptProps`                     |\n| `section`            | `SectionProps`                    |\n| `select`             | `SelectProps`                     |\n| `slot`               | `SlotProps`                       |\n| `small`              | `SmallProps`                      |\n| `source`             | `SourceProps`                     |\n| `span`               | `SpanProps`                       |\n| `strong`             | `StrongProps`                     |\n| `style`              | `StyleProps`                      |\n| `sub`                | `SubProps`                        |\n| `summary`            | `SummaryProps`                    |\n| `sup`                | `SupProps`                        |\n| `svg`                | `SVGProps`                        |\n| `table`              | `TableProps`                      |\n| `tbody`              | `TBodyProps`, `TableSectionProps` |\n| `td`                 | `TDProps`                         |\n| `template`           | `TemplateProps`                   |\n| `textarea`           | `TextAreaProps`                   |\n| `tfoot`              | `TFootProps`, `TableSectionProps` |\n| `th`                 | `THProps`                         |\n| `thead`              | `THeadProps`, `TableSectionProps` |\n| `time`               | `TimeProps`                       |\n| `title`              | `TitleProps`                      |\n| `tr`                 | `TRProps`                         |\n| `track`              | `TrackProps`                      |\n| `u`                  | `UProps`                          |\n| `ul`                 | `ULProps`                         |\n| `var`                | `VarProps`                        |\n| `video`              | `VideoProps`                      |\n| `wbr`                | `WBRProps`                        |\n| `webview`            | `WebViewProps`                    |\n| Generic HTML Element | `ElementProps`                    |\n\nFor any elements not listed above, use the generic `ElementProps`.\n\n## Props Without Ref\n\nYou may need props that exclude the `ref` field inherited from `React.DetailedHTMLProps`.\n\nFor this, all types have a `WithoutRef` option.\n\nFor example, you can use `DivPropsWithoutRef` for a `div` without a React `ref`. `DivPropsWithoutRef` is equivalent to `React.HTMLAttributes<HTMLDivElement>`.\n\n> A `ref` may not always be desirable, so it remains optional to give you flexibility. For instance, components returned by [`styled-components`](https://styled-components.com/) may not support React\'s `ref` type.\n\n\x3c!-- [lock:typescript] 🚫--------------------------------------- --\x3e\n\n## TypeScript\n\nType definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.\n\n\x3c!-- [/lock:typescript] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:icon] 🚫--------------------------------------- --\x3e\n\n## Icon Attribution\n\nFavicon by [Twemoji](https://github.com/twitter/twemoji).\n\n\x3c!-- [/lock:icon] ---------------------------------------🚫 --\x3e\n\n\x3c!-- [lock:contributing] 🚫--------------------------------------- --\x3e\n\n## Contributing\n\nOpen source software is awesome and so are you. 😎\n\nFeel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.\n\nFor major changes, open an issue first to discuss what you\'d like to change.\n\n\x3c!-- [/lock:contributing] --------------------------------------🚫 --\x3e\n\n## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-html-props/stargazers)\n\nIf you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-html-props/stargazers): [👉⭐](https://github.com/justinmahar/react-html-props/stargazers)\n\n## License\n\nSee [LICENSE.md](https://justinmahar.github.io/react-html-props/?path=/story/license--page).';var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Qb,{title:"Home"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.Ih,{children:READMEraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Home",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const _1_README_stories=componentMeta,__namedExportsOrder=["__page"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);