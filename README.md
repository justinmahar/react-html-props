<h2 align="center">
  ⚛️ React HTML Props
</h2>
<h3 align="center">
  Convenient TypeScript types for all React HTML props.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-html-props" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-html-props.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-html-props/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-html-props/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-html-props/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>
</p>
<!-- [lock:donate-badges] 🚫--------------------------------------- -->
<p align="center">
  <a href="https://paypal.me/thejustinmahar/5"><img src="https://img.shields.io/static/v1?label=Buy%20me%20a%20coffee&message=%E2%9D%A4&logo=KoFi&color=%23fe8e86" alt="Buy me a coffee" /></a>&nbsp;<a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>
<!-- [/lock:donate-badges] ---------------------------------------🚫 -->

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-html-props/)**.

## Overview

This package includes convenient [TypeScript](https://www.typescriptlang.org/) type definitions for all React HTML props.

For example, this allows you to use the type `DivProps` instead of:

```tsx
React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
```

...Because nobody wants to type all of that. 😁

Using these types makes it easy to support all standard HTML props, such as `style` and `className`, in your own components.

### Features include:

- **🧩 TypeScript types for all React HTML props**
  - Easily use types for HTML props with simple names like `DivProps`.
- **🧠 Easy to remember**
  - All types start with the HTML element name, so you'll never end up scratching your head.
- **👍 Optional types without React ref**
  - Where needed, use `WithoutRef` types for props that don't inherit `ref` from `React.DetailedHTMLProps`.

<!-- [lock:donate] 🚫--------------------------------------- -->

## Donate 

If this project helped save you time, please consider buying me a coffee, which powers my development (and life). Your support is much appreciated!

<a href="https://github.com/sponsors/justinmahar"><img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:donate] ---------------------------------------🚫 -->

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Unpacking Props](#unpacking-props)
- [Extending HTML Props](#extending-html-props)
- [Included HTML Element Props](#included-html-element-props)
- [Props Without Ref](#props-without-ref)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i --save-dev react-html-props
```

## Quick Start

Let's use `div` as an example since it's the most common.

You can use `DivProps` to support all props for `div` in your own components. 

```tsx
import { DivProps } from "react-html-props";

const MyComponent = (props: DivProps) => {
  return <div {...props}>{props.children}</div>;
};
```

> Note: `DivProps` is equivalent to `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>`

In this example, we're using `className`, `style`, and `onClick` on our own component since it supports all `div` props:

```tsx
const render = () => (
  <MyComponent
    className="text-center"
    style={{ background: 'blue', color: 'white' }}
    onClick={() => console.log('Get schwifty!')}
  >
    Show me what you got
  </MyComponent>
);
```

Types are available for all HTML props. See below for a table containing all supported types.

## Unpacking Props

We can use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) and the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to unpack props, such as `children`, from the rest of an element's props.

Using `div` as an example again:

```tsx
import { DivProps } from "react-html-props";

export const MyComponent = ({ children, ...divProps }: DivProps): JSX.Element => {
  return <div {...divProps}>{children}</div>;
};
```

## Extending HTML Props

You can extend all HTML props to add your own.

Then use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) to unpack and use your own props.

Just follow the example below:

```tsx
interface KindleOfKittensProps extends DivProps {
  kittenCount: 10;
}

export const KindleOfKittens = ({ kittenCount, ...divProps }: KindleOfKittensProps): JSX.Element => {
  return (
    <div {...divProps}>
      <h1>I have a kindle of {kittenCount} kittens</h1>
    </div>
  );
};
```

(Yes, a group of kittens is called a "kindle")

## Included HTML Element Props

The goal was to make it as easy to use each HTML element's props as possible, so the types for all props begin with the exact HTML element.

For example, the type for the `p` element's props is `PProps`. 

In some cases there are multiple types available, such as with headings `h1`, `h2`, `h3`, etc. The props for these elements can be referenced either as `H1Props`, `H2Props`, `H3Props`, etc, or simply as `HeadingProps`. See the table below for more.

You can import any of the following types:

| HTML Element         | Props Type To Use                 |
| -------------------- | --------------------------------- |
| `a`                  | `AProps`                          |
| `abbr`               | `AbbrProps`                       |
| `address`            | `AddressProps`                    |
| `area`               | `AreaProps`                       |
| `article`            | `ArticleProps`                    |
| `aside`              | `AsideProps`                      |
| `audio`              | `AudioProps`                      |
| `b`                  | `BProps`                          |
| `base`               | `BaseProps`                       |
| `bdi`                | `BDIProps`                        |
| `bdo`                | `BDOProps`                        |
| `blockquote`         | `BlockQuoteProps`                 |
| `body`               | `BodyProps`                       |
| `br`                 | `BRProps`                         |
| `button`             | `ButtonProps`                     |
| `canvas`             | `CanvasProps`                     |
| `caption`            | `CaptionProps`                    |
| `cite`               | `CiteProps`                       |
| `code`               | `CodeProps`                       |
| `col`                | `ColProps`                        |
| `colgroup`           | `ColGroupProps`                   |
| `data`               | `DataProps`                       |
| `datalist`           | `DataListProps`                   |
| `dd`                 | `DDProps`                         |
| `del`                | `DelProps`                        |
| `details`            | `DetailsProps`                    |
| `dfn`                | `DfnProps`                        |
| `dialog`             | `DialogProps`                     |
| `div`                | `DivProps`                        |
| `dl`                 | `DLProps`                         |
| `dt`                 | `DTProps`                         |
| `em`                 | `EmProps`                         |
| `embed`              | `EmbedProps`                      |
| `fieldset`           | `FieldSetProps`                   |
| `figcaption`         | `FigCaptionProps`                 |
| `figure`             | `FigureProps`                     |
| `footer`             | `FooterProps`                     |
| `form`               | `FormProps`                       |
| `h1`                 | `H1Props`, `HeadingProps`         |
| `h2`                 | `H2Props`, `HeadingProps`         |
| `h3`                 | `H3Props`, `HeadingProps`         |
| `h4`                 | `H4Props`, `HeadingProps`         |
| `h5`                 | `H5Props`, `HeadingProps`         |
| `h6`                 | `H6Props`, `HeadingProps`         |
| `head`               | `HeadProps`                       |
| `header`             | `HeaderProps`                     |
| `hgroup`             | `HGroupProps`                     |
| `hr`                 | `HRProps`                         |
| `html`               | `HtmlProps`                       |
| `i`                  | `IProps`                          |
| `iframe`             | `IFrameProps`                     |
| `img`                | `ImgProps`                        |
| `input`              | `InputProps`                      |
| `ins`                | `InsProps`                        |
| `kbd`                | `KbdProps`                        |
| `label`              | `LabelProps`                      |
| `legend`             | `LegendProps`                     |
| `li`                 | `LIProps`                         |
| `link`               | `LinkProps`                       |
| `main`               | `MainProps`                       |
| `map`                | `MapProps`                        |
| `mark`               | `MarkProps`                       |
| `menu`               | `MenuProps`                       |
| `meta`               | `MetaProps`                       |
| `meter`              | `MeterProps`                      |
| `nav`                | `NavProps`                        |
| `noscript`           | `NoScriptProps`                   |
| `object`             | `ObjectProps`                     |
| `ol`                 | `OLProps`                         |
| `optgroup`           | `OptGroupProps`                   |
| `option`             | `OptionProps`                     |
| `output`             | `OutputProps`                     |
| `p`                  | `PProps`                          |
| `param`              | `ParamProps`                      |
| `picture`            | `PictureProps`                    |
| `pre`                | `PreProps`                        |
| `progress`           | `ProgressProps`                   |
| `q`                  | `QProps`                          |
| `rp`                 | `RPProps`                         |
| `rt`                 | `RTProps`                         |
| `ruby`               | `RubyProps`                       |
| `s`                  | `SProps`                          |
| `samp`               | `SampProps`                       |
| `script`             | `ScriptProps`                     |
| `section`            | `SectionProps`                    |
| `select`             | `SelectProps`                     |
| `slot`               | `SlotProps`                       |
| `small`              | `SmallProps`                      |
| `source`             | `SourceProps`                     |
| `span`               | `SpanProps`                       |
| `strong`             | `StrongProps`                     |
| `style`              | `StyleProps`                      |
| `sub`                | `SubProps`                        |
| `summary`            | `SummaryProps`                    |
| `sup`                | `SupProps`                        |
| `svg`                | `SVGProps`                        |
| `table`              | `TableProps`                      |
| `tbody`              | `TBodyProps`, `TableSectionProps` |
| `td`                 | `TDProps`                         |
| `template`           | `TemplateProps`                   |
| `textarea`           | `TextAreaProps`                   |
| `tfoot`              | `TFootProps`, `TableSectionProps` |
| `th`                 | `THProps`                         |
| `thead`              | `THeadProps`, `TableSectionProps` |
| `time`               | `TimeProps`                       |
| `title`              | `TitleProps`                      |
| `tr`                 | `TRProps`                         |
| `track`              | `TrackProps`                      |
| `u`                  | `UProps`                          |
| `ul`                 | `ULProps`                         |
| `var`                | `VarProps`                        |
| `video`              | `VideoProps`                      |
| `wbr`                | `WBRProps`                        |
| `webview`            | `WebViewProps`                    |
| Generic HTML Element | `ElementProps`                    |

For any elements not listed above, use the generic `ElementProps`.

## Props Without Ref

You may need props that exclude the `ref` field inherited from `React.DetailedHTMLProps`.

For this, all types have a `WithoutRef` option.

For example, you can use `DivPropsWithoutRef` for a `div` without a React `ref`. `DivPropsWithoutRef` is equivalent to `React.HTMLAttributes<HTMLDivElement>`.

> A `ref` may not always be desirable, so it remains optional to give you flexibility. For instance, components returned by [`styled-components`](https://styled-components.com/) may not support React's `ref` type.

<!-- [lock:typescript] 🚫--------------------------------------- -->

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

<!-- [/lock:typescript] ---------------------------------------🚫 -->

<!-- [lock:icon] 🚫--------------------------------------- -->

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

<!-- [/lock:icon] ---------------------------------------🚫 -->

<!-- [lock:contributing] 🚫--------------------------------------- -->

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

<!-- [/lock:contributing] --------------------------------------🚫 -->

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-html-props/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-html-props/stargazers): [👉⭐](https://github.com/justinmahar/react-html-props/stargazers)

<!-- [lock:support] 🚫--------------------------------------- -->
Want to support the project? Feel free to grab me a coffee, which is my main source of fuel for development:

<a href="https://paypal.me/thejustinmahar/5"><img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/15"><img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" /></a>&nbsp; <a href="https://paypal.me/thejustinmahar/25"><img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" /></a>

<!-- [/lock:support] ---------------------------------------🚫 -->

## License

See [LICENSE.md](https://justinmahar.github.io/react-html-props/?path=/docs/license--docs).