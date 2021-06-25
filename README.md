# typescript Study

## 개발 환경

- [Chrome](https://www.google.com/intl/ko/chrome/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js LTS 버전(v10.x 이상)](https://nodejs.org/ko/)
- [Git](https://git-scm.com/downloads)

## VSCode 플러그인 목록

- 색 테마 : [Night Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)
- 파일 아이콘 테마 : [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- 문법 검사 : ESLint, [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
- 실습 환경 보조 : [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- 기타 ( 필수 아님 )
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager), [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings), [Jetbrains IDE Keymap](https://marketplace.visualstudio.com/items?itemName=isudox.vscode-jetbrains-keybindings)

# 참고 URL

- [TypeScript](https://joshua1988.github.io/ts/intro.html)
- [NPM이란?](https://joshua1988.github.io/webpack-guide/build/node-npm.html#node-js%EC%99%80-npm)
- [Webpack이란?](https://joshua1988.github.io/webpack-guide/guide.html)

# NOTE

- 자바스크립트 안에서 타입스크립스 쓴 것 같은 기능을 넣기 위한 문장 // @ts-check
- tsconfig.json은 ts -> js로 변환하면서 어떤식의 세부사항을 주느냐라는 부분
- 타이핑(typing): 타입이 정의되지 않은 코드에 타입을 입혀주는 행위
- any 라는 타입은 치트키와 같다
  - 즉 string, number 등등등 많은 타입이 있지만, any는 모든 타입을 통틀어 말함

## 명령어

- npm i typescript -g
  - tsc index.ts
- npm i