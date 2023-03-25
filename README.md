# Next.js 포트폴리오

[![React Version](https://img.shields.io/badge/Next.js-v13.2.4-black)](https://nextjs.org/)
[![Package Manager Version](https://img.shields.io/badge/npm-v6.14.17-yellow)](https://www.npmjs.com/)

### 🗓 수행 기간

> 2023.03.22 - 2023.03.24

### 📢 배포 링크

> https://next-portfolio-indol-seven.vercel.app/ <br />

## 📚 목차

- [프로젝트 소개](#프로젝트-소개)
- [핵심 코드](#핵심-코드)
- [실행 방법](#실행-방법)
- [디렉토리 구조](#디렉토리-구조)

<br />

## 프로젝트 소개

Next.js에서 제공한 Link 기능을 이용하여 새로고침 없이 페이지 이동이 가능하며
Tailwind를 사용하여 다크모드를 구현했습니다.

Notion API로 데이터를 받아 구현했으며 노션 페이지에 데이터 추가 시 동적으로 포트폴
리오 웹 페이지에 프로젝트가 추가됩니다.

## 핵심 코드

### Function1

- `Next-themes`와 `Tailwind`를 활용한 모드 적용

    <br />

  ```js
  - components/dark-mode-toggle-button.js
  
  const { theme, setTheme } = useTheme();
  return (
  <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    <svg className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5"></svg>
    <svg className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0"></svg>
  </button>
  )
  ```

  > 📌 버튼에 클릭 이벤트를 지정하여 `next-themes`로 일반 모드와 다크 모드 토글을 구현했습니다.  
  > 📌 `Tailwind` 클래스에 다크 모드 속성을 추가하여 모드 변화에 맞게 스타일이 수정됩니다.  

## <br />

### Function2

- 동적 프로젝트 페이지 구현

   <br />

  ```js
  - page/products.js
  
  export async function getServerSideProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: '기간',
          direction: 'descending',
        },
      ],
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projectList = await res.json();
  return {
    props: { projectList },
  };
  }
  ```
  > 📌 Next.js에서 제공하는 `getServerSideProps` 함수를 이용해 페이지 요청마다 Notion 페이지의 데이터를 props로 전달합니다.      
  > 📌 전달된 Notion 데이터(project)로 프로젝트 내용에 대한 부분을 페이지에 구현했습니다.

---

## 실행 방법

1. 해당 프로젝트를 로컬서버에서 실행하기 위해서는 Git 과 Npm (node.js를 포함) 이 설치되어 있어야 합니다.  
  1-1. 레파지토리 클론
   ```
   git clone https://github.com/aydenote/Next-portfolio.git
   ```
   1-2. 패키지 설치
   ```
   npm install
   ```
   1-3. 실행
   ```
   npm run dev
   ```
2. 아래 배포 링크를 통해 실행 가능합니다.  
  https://next-portfolio-indol-seven.vercel.app/

<br />

## 디렉토리 구조

<details>
    <summary>디렉토리 전체 보기</summary>
    <div>

          ┣ 📂 components
          ┃ ┣ 📝 dark-mode-toggle-button.js 
          ┃ ┣ 📝 footer.js
          ┃ ┣ 📝 header.js
          ┃ ┣ 📝 animation.js
          ┃ ┗ 📝 layout.js
          ┣ 📂home
          ┃ ┗ 📝 hero.js
          ┣ 📂projects
          ┃ ┗ 📝 project-item.js
          ┣ 📂 config
          ┃ ┗ 📝 index.js
          ┣ 📂 pages
          ┃ ┣ 📝 404.js
          ┃ ┣ 📝 _app.js
          ┃ ┣ 📝 _document.js
          ┃ ┣ 📝 contact.js
          ┃ ┣ 📝 index.js
          ┃ ┗ 📝 projects.js
          ┣ 📂 public
          ┃ ┣ 📝 animation.json
          ┃ ┣ 📝 contact-blog.json
          ┃ ┣ 📝 contact-call.json
          ┃ ┣ 📝 contact-email.json
          ┃ ┣ 📝 next.svg
          ┃ ┣ 📝 thirteen.svg
          ┃ ┣ 📝 vercel.svg
          ┃ ┗ 📝 favicon.ico
          ┗ 📂 styles
            ┗ 📝 globals.css

</details>
