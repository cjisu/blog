---
title: Gatsby - styling
subTitle: Gatsby Blog 만들기 3
publishedAt: 2019-07-20T17:32:00
description: Gatsby css 적용하기
featuredImage: ./global.png
---

안녕하세요, 오늘은 Gatsby styling을 다뤄보도록 하겠습니다.  
styling으로 어떤걸 하는지 간단하게 설명드리면  
개인 블로그의 디자인 요소를 첨가한다고 생각하시면 됩니다  
예를 들어 블로그 제목의 폰트 크기, 폰트 생상, 배경화면 생상 등을 수정하는 작업입니다!  
그리고 해당 포스트에서는 css에 대한 기본 개념이 필요한 점 참고 부탁드립니다!

### Gatsby Global Style

이전 포스트에서 생성한 my-blog 프로젝트 전체에 적용할 global style 을 설정 해보겠습니다.  
global.css 파일과 gatsby-browser.js 파일을 생성해 주세요!

```
├── package.json
├── src
│   └── pages
│       └── index.js
│   └── styles
│       └── global.css
├── gatsby-browser.js
```

- global.css : 프로젝트에 전역으로 적용할 css 파일
- gatsby-browser.js : Gatsby 에서 사용하는 특수 파일입니다.

> _gatsby-browser.js_ (skip 해도 됨)
> Gatsby 는 정적 웹 사이트이긴 하지만 페이지가 로드된 후에 동적으로
> 데이터를 처리할 수 있는 이점이 있습니다.
> 페이지 분석 이벤트 처리 , 스크롤 처리 등을 처리할 수 있습니다
> 더 알고 싶으시다면 해당 페이지 참고-> [gatsby browser api](https://www.gatsbyjs.org/docs/browser-apis/)

global.css 파일 수정 사항

```css
body {
  background: lavenderblush;
}
```

gatsby-browser.js 파일 수정 사항

```javascript
import "./src/styles/global.css"
```

수정 결과물 `npx gatsby develop`
![gatsby-hello-world](./global.png)

### Component scoped css

컴포넌트 영역의 요소들에만 css 를 적용할 수 있도록 해줍니다.  
웹 페이지의 헤더 부분을 만들어 보겠습니다.
저는 components 아래에 header 폴더를 만들어서  
header.js 파일 및 header.css 파일을 생성했습니다.

```
├── package.json
├── src
│   └── components
│       └── header
│           ├── header.js
│           └── header.module.css
```

css 파일의 확장자는 보통 .css 파일로 끝나지만,  
Gatsby 에서 css module 로 처리하기 위해 .module.css 로 사용됩니다~

header.module.css 파일

```css
.container {
  position: fixed;
  display: flex;
  top: 0;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  background: inherit;
  z-index: 1;
}

.item {
  font-size: 18px;
  font-weight: bold;
  margin-right: 74px;
}
```

header.js 파일

```javascript
import React from "react"
import headerStyle from "./header.module.css"

const Header = () => (
  <div className={headerStyle.container}>
    <div className={headerStyle.item}>Blog</div>
    <div className={headerStyle.item}>About</div>
  </div>
)

export default Header
```

마지막으로 global.css 파일 수정 사항입니다.

```css
body {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
```

오늘 최종 결과물 입니다.
![gatsby-hello-world](./component-scoped-css.png)
