<h2 align="center">
  <a href="https://github.com/justinmahar/react-html-props">React HTML Props</a>
</h2>
<h3 align="center">
  Convenience TypeScript type definitions for all HTML element props.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-html-props">
    <img src="https://badge.fury.io/js/react-html-props.svg" alt="npm Version"/>
  </a>
</p>

## Documentation

## Overview

This package includes convenience [TypeScript](https://www.typescriptlang.org/) type definitions for all `React.DetailedHTMLProps` for all HTML element types.

For example, this allows you to specify `DivProps` instead of `React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>`. Because nobody wants to type all of that. 😁

Using these types makes it easy to support all standard HTML props for your components.

### Features include:

- **🛩️ Convenience TypeScript HTMLAttributes prop types for all HTML elements**
  - Easily reference props for any HTML element with shorthand like `DivProps`.

## Installation

```
npm i react-html-props
```

## Quick Start

### Basic Example

Let's use `div` as an example since it's the most common.

You can use `DivProps` to support all props for `div` in your own components. 

```tsx
import { DivProps } from "react-html-props";

export const MyComponent = ({ children, ...divProps }: DivProps): JSX.Element => {
  return <div {...divProps}>{children}</div>;
};
```

Here we are using [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) to unpack `children` from the rest of `div`'s props.

### Mixing With Custom Props

You will likely have your own props, of course. 

So you can use TypeScript's [*intersection types*](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types) notation to combine your own props with the HTML element's props.

Then use [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) to unpack your own props out of the resulting combined type.

Just follow the example below:

```tsx
import { DivProps } from 'react-html-props';

interface PandaBearComponentProps {
  pandaBearCount: 10;
}

export const PandaBearComponent = ({
  children,
  pandaBearCount,
  ...divProps
}: PandaBearComponentProps & DivProps): JSX.Element => {
  return (
    <div {...divProps}>
      <h1>I have {pandaBearCount} panda bears</h1>
      <div>{children}</div>
    </div>
  );
};
```

## Included HTML Element Props

The goal was to make it as easy to use each HTML element's props as possible, so the types for all props begin with the exact HTML element.

For example, the type for the `p` element's props is `PProps`. 

In some cases there are multiple types available, such as with headings `h1`, `h2`, `h3`, etc. The props for these elements can be referenced either as `H1Props`, `H2Props`, `H3Props`, etc, or simply as `HeadingProps`. See the table below for more.

You can import any of the following types:

| HTML Element | Props Type To Use                 |
| ------------ | --------------------------------- |
| `anchor`     | `AnchorProps`                     |
| `area`       | `AreaProps`                       |
| `audio`      | `AudioProps`                      |
| `base`       | `BaseProps`                       |
| `body`       | `BodyProps`                       |
| `br`         | `BRProps`                         |
| `button`     | `ButtonProps`                     |
| `canvas`     | `CanvasProps`                     |
| `data`       | `DataProps`                       |
| `datalist`   | `DataListProps`                   |
| `dialog`     | `DialogProps`                     |
| `div`        | `DivProps`                        |
| `dl`         | `DLProps`                         |
| `embed`      | `EmbedProps`                      |
| `fieldset`   | `FieldSetProps`                   |
| `form`       | `FormProps`                       |
| `h1`         | `H1Props`, `HeadingProps`         |
| `h2`         | `H2Props`, `HeadingProps`         |
| `h3`         | `H3Props`, `HeadingProps`         |
| `h4`         | `H4Props`, `HeadingProps`         |
| `h5`         | `H5Props`, `HeadingProps`         |
| `h6`         | `H6Props`, `HeadingProps`         |
| `head`       | `HeadProps`                       |
| `hr`         | `HRProps`                         |
| `html`       | `HtmlProps`                       |
| `iframe`     | `IFrameProps`                     |
| `img`        | `ImgProps`                        |
| `input`      | `InputProps`                      |
| `ins`        | `InsProps`, `ModProps`            |
| `del`        | `DelProps`, `ModProps`            |
| `label`      | `LabelProps`                      |
| `legend`     | `LegendProps`                     |
| `li`         | `LIProps`                         |
| `link`       | `LinkProps`                       |
| `map`        | `MapProps`                        |
| `meta`       | `MetaProps`                       |
| `object`     | `ObjectProps`                     |
| `ol`         | `OLProps`                         |
| `optgroup`   | `OptGroupProps`                   |
| `option`     | `OptionProps`                     |
| `p`          | `PProps`, `ParagraphProps`        |
| `param`      | `ParamProps`                      |
| `pre`        | `PreProps`                        |
| `progress`   | `ProgressProps`                   |
| `blockquote` | `BlockQuoteProps`, `QuoteProps`   |
| `q`          | `QProps`, `QuoteProps`            |
| `cite`       | `CiteProps`, `QuoteProps`         |
| `slot`       | `SlotProps`                       |
| `script`     | `ScriptProps`                     |
| `noscript`   | `NoScriptProps`, `ScriptProps`    |
| `select`     | `SelectProps`                     |
| `source`     | `SourceProps`                     |
| `span`       | `SpanProps`                       |
| `style`      | `StyleProps`                      |
| `svg`        | `SVGProps`                        |
| `table`      | `TableProps`                      |
| `col`        | `ColProps`, `TableColProps`       |
| `colgroup`   | `ColGroupProps`, `TableColProps`  |
| `td`         | `TDProps`, `TableDataCellProps`   |
| `th`         | `THProps`, `TableHeaderCellProps` |
| `tr`         | `TRProps`, `TableRowProps`        |
| `thead`      | `THeadProps`, `TableSectionProps` |
| `tbody`      | `TBodyProps`, `TableSectionProps` |
| `tfoot`      | `TFootProps`, `TableSectionProps` |
| `template`   | `TemplateProps`                   |
| `textarea`   | `TextAreaProps`                   |
| `title`      | `TitleProps`                      |
| `track`      | `TrackProps`                      |
| `ul`         | `ULProps`                         |
| `video`      | `VideoProps`                      |
| `webview`    | `WebViewProps`                    |

## TypeScript

This is a [TypeScript](https://www.typescriptlang.org/) project and only relevant to React projects written in TypeScript. 

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-html-props/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-html-props/stargazers): [👉⭐](https://github.com/justinmahar/react-html-props/stargazers)

## MIT License

```
Copyright © 2021 Justin Mahar https://github.com/justinmahar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
