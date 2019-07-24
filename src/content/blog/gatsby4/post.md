---
title: Gatsby - layout
subTitle: Gatsby Blog 만들기 4
publishedAt: 2019-07-21T22:41:00
description: Gatsby css 적용하기
featuredImage: ./component-scoped-css.png
---

안녕하세요, 오늘은 layout을 만들어 보려고 합니다.  
layout을 만드는 이유는 일관된 페이지 구성을 전달하기 위해서 사용합니다  
layout에 헤더 바, 본문, 네비게이션 등을 구현한 후 여러 페이지에서 적용할 수 있어요!

### Typography

웹 사이트를 좀 더 예쁘게 하기 위한 툴킷 입니다.

```shell
npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```

typography 설치 후 my-blog 폴더에 있는 gatsby-config.js 파일 수정이 필요한데요
아래와 같이 수정하시면 됩니다.

```
# gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

- gatsby-config.js : Gatsby 사이트 설정 옵션들을 정의하는 파일

추가로 코드 내에서 사용할 typography 옵션을 정의하도록 하겠습니다
정의할 파일은 gatsby-config.js 에서 pathToConfigModule 에 정의한 위치에 해주셔야 합니다.
다르게 사용하고 싶으시면 pathToConfigModule 과 정의한 파일의 위치만 일치하면 되겠죠?!

```javascript
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
```

### Create Layout

이제 layout을 만들어 보려고 하는데요, 사실 여기서 제가 html 구조를 자세히 설명드리긴 어려워서  
완성된 layout 코드를 보여드리도록 할게요!
