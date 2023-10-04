// TODO: Change this to get datas from the server
export type SkillCategory = 'frontend' | 'backend' | 'etc';
export type Skill = {
  name: string;
  src: string;
  category: SkillCategory;
  category2: string;
};
export type Skills = Skill[];
export const skills: Skills = [
  {
    name: 'HTML5',
    src: '/images/skills/html5.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'CSS',
    src: '/images/skills/css.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'Javascript',
    src: '/images/skills/javascript.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'PHP',
    src: '/images/skills/php.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'Go Language',
    src: '/images/skills/go_language.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'Java',
    src: '/images/skills/java.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'Python',
    src: '/images/skills/python.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'C#',
    src: '/images/skills/c_sharp.png',
    category: 'etc',
    category2: 'language',
  },
  {
    name: 'Spring',
    src: '/images/skills/spring.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Gnuboard5',
    src: '/images/skills/gnuboard.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'React',
    src: '/images/skills/react.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Next.js',
    src: '/images/skills/nextjs.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Antd',
    src: '/images/skills/antd.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Redux',
    src: '/images/skills/redux.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Toast-ui',
    src: '/images/skills/toast_ui.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Tailwind css',
    src: '/images/skills/tailwind.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Ajax',
    src: '/images/skills/ajax.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'ES6',
    src: '/images/skills/ecma.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Axios',
    src: '/images/skills/axios.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Chartjs',
    src: '/images/skills/chartjs.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Bootstrap',
    src: '/images/skills/bootstrap.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'jQuery',
    src: '/images/skills/jquery.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Bootstrap studio',
    src: '/images/skills/bootstrap_studio.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Apollo',
    src: '/images/skills/apollo.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Graphql',
    src: '/images/skills/graphql.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'React-query',
    src: '/images/skills/react_query.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Rest api',
    src: '/images/skills/rest_api.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Lodash',
    src: '/images/skills/lodash.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Notion-api',
    src: '/images/skills/notion.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Typescript',
    src: '/images/skills/typescript.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Emotion',
    src: '/images/skills/emotion.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'SWR',
    src: '/images/skills/swr.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Storybook',
    src: '/images/skills/storybook.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'Jest',
    src: '/images/skills/jest.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'framer-motion',
    src: '/images/skills/framer.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'matter.js',
    src: '/images/skills/matter.png',
    category: 'frontend',
    category2: 'Web_Frontend',
  },
  {
    name: 'React Native',
    src: '/images/skills/react.png',
    category: 'frontend',
    category2: 'App_Frontend',
  },
  {
    name: 'Flutter',
    src: '/images/skills/flutter.png',
    category: 'frontend',
    category2: 'App_Frontend',
  },
  {
    name: 'Sequelize',
    src: '/images/skills/sequelize.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Strapi',
    src: '/images/skills/strapi.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Gatsby',
    src: '/images/skills/gatsby.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Node.js',
    src: '/images/skills/nodejs.png',
    category: 'backend',
    category2: 'Backend',
  },

  {
    name: 'Nest.js',
    src: '/images/skills/nestjs.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Knex',
    src: '/images/skills/knex.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Socket.io',
    src: '/images/skills/socket_io.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Elasticsearch',
    src: '/images/skills/elasticsearch.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Prisma',
    src: '/images/skills/prisma.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Swagger',
    src: '/images/skills/swagger.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Firebase',
    src: '/images/skills/firebase.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Typeorm',
    src: '/images/skills/typeorm.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Mongoose',
    src: '/images/skills/mongoose.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Redis',
    src: '/images/skills/redis.png',
    category: 'backend',
    category2: 'Backend',
  },
  {
    name: 'Mariadb',
    src: '/images/skills/mariadb.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'Mysql',
    src: '/images/skills/mysql.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'Mssql',
    src: '/images/skills/mssql.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'Mongodb',
    src: '/images/skills/mongodb.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'PostgreSQL',
    src: '/images/skills/postgresql.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'SQLite',
    src: '/images/skills/sqlite.png',
    category: 'backend',
    category2: 'Database',
  },
  {
    name: 'NPM',
    src: '/images/skills/npm.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Yarn',
    src: '/images/skills/yarn.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Unity',
    src: '/images/skills/unity.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Git hub',
    src: '/images/skills/github.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Git',
    src: '/images/skills/git.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Git lab',
    src: '/images/skills/gitlab.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Trello',
    src: '/images/skills/trello.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Notion',
    src: '/images/skills/notion.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Slack',
    src: '/images/skills/slack.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Figma',
    src: '/images/skills/figma.png',
    category: 'etc',
    category2: 'etc',
  },
  {
    name: 'Linux',
    src: '/images/skills/linux.png',
    category: 'etc',
    category2: 'Deploy',
  },
  {
    name: 'AWS EC2',
    src: '/images/skills/aws_ec2.png',
    category: 'etc',
    category2: 'Deploy',
  },
  {
    name: 'Docker',
    src: '/images/skills/docker.png',
    category: 'etc',
    category2: 'Deploy',
  },
  {
    name: 'Docker-compose',
    src: '/images/skills/docker_compose.png',
    category: 'etc',
    category2: 'Deploy',
  },
  {
    name: 'PM2',
    src: '/images/skills/pm2.png',
    category: 'etc',
    category2: 'Deploy',
  },
  {
    name: 'Nginx',
    src: '/images/skills/nginx.png',
    category: 'etc',
    category2: 'Deploy',
  },
];

export const instagram: string[] = [
  '/images/hoon-jo/instagram/instagram1.png',
  '/images/hoon-jo/instagram/instagram2.png',
  '/images/hoon-jo/instagram/instagram3.png',
  '/images/hoon-jo/instagram/instagram4.png',
  '/images/hoon-jo/instagram/instagram5.png',
  '/images/hoon-jo/instagram/instagram6.png',
  '/images/hoon-jo/instagram/instagram7.png',
  '/images/hoon-jo/instagram/instagram8.png',
  '/images/hoon-jo/instagram/instagram9.png',
  '/images/hoon-jo/instagram/instagram10.png',
  '/images/hoon-jo/instagram/instagram11.png',
  '/images/hoon-jo/instagram/instagram12.png',
  '/images/hoon-jo/instagram/instagram13.png',
  '/images/hoon-jo/instagram/instagram14.png',
  '/images/hoon-jo/instagram/instagram15.png',
  '/images/hoon-jo/instagram/instagram16.png',
  '/images/hoon-jo/instagram/instagram17.png',
  '/images/hoon-jo/instagram/instagram18.png',
  '/images/hoon-jo/instagram/instagram19.png',
  '/images/hoon-jo/instagram/instagram20.png',
  '/images/hoon-jo/instagram/instagram21.png',
  '/images/hoon-jo/instagram/instagram22.png',
  '/images/hoon-jo/instagram/instagram23.png',
  '/images/hoon-jo/instagram/instagram24.png',
  '/images/hoon-jo/instagram/instagram25.png',
  '/images/hoon-jo/instagram/instagram26.png',
];

type Projects = {
  name: string;
  skills: string[];
  date: string;
  description: string;
  detail: string;
  screenshots: string[];
}[];
export const projects: Projects = [
  {
    name: 'hoon-jo',
    skills: ['WEB', 'Front-end', 'Deploy'],
    date: '2023년 9월',
    description: `현재 보고있는 포트폴리오에 대한 자세한 개발 과정입니다. 프론트엔드 주력 개발자로서 인터랙티브한 애니메이션들과 다양한 레이아웃들을 사용했습니다. 프로젝트 마다 시안을 받고 UI 라이브러리를 이용해 빠르게 구현 했었지만, 포트폴리오 만큼은 제가 직접 기획부터 디자인까지 제작하고 싶었습니다. 수많은 디자인 시안들을 참고하고, UI/UX 적인 지식들을 빠르게 학습하여 적용하였습니다. 

      이 전에는 애니메이션 관련 기능을 만들 필요가 없었지만, 인터랙티브한 효과들을 넣어주기 위해 Canvas나 Transition 등도 함께 학습해야 했기 때문에 프로젝트가 예상보다 길어지긴 했습니다.
      
      처음엔 One-page UI를 생각하여 index에 모든 메뉴들을 나눠 넣는 것과 Routing을 주어 개별적으로 분리하여 관리하는 것 중 메뉴별로 나뉘는 것이 깔끔하고 Routing animation을 사용 하기 위해 메뉴를 분리하는 방법을 선택 하였습니다.`,
    detail: `## 주요 목표
다양한 프로젝트를 바탕으로 나를 어떻게 표현해야할까를 깊게 생각했다. 프론트엔드를 주력으로 하고 있기 때문에 다양한 인터랙션들 보여줘야겠다고 생각 했다. 여태까지 작업해왔던 프로젝트들은 어느정도 기획이나 디자인 틀이 잡혀져 있었지만, 이번 프로젝트에서는 기획부터 배포까지 혼자 작업하며, 나를 표현할 방법과 평범한 포트폴리오를 어떻게 벗어날 것인가에 대해 고민을 가장 많이 해야 했다.
## 담당 (전체)
- 프로젝트 기획, 디자인, 개발, 배포
- Page Transition 및 인터랙션
- 반응형
- Matter.js를 이용한 오브젝트 물리법칙 적용
- Next.js를 통한 Server Side 환경 구축

## 배운점
- Matter.js를 통한 물리법칙 구현으로 Canvas에 대한 지식 및 활용
- 레이아웃 구성능력, 애니메이션 고도화
- 홈페이지 디자인에 대한 넓은 관점이 생김
- SSR에 대한 더 넓은 이해, CSR과 SSR의 내부 구동 동작의 차이점

## 아쉬운점
- 최신 버전인 NEXT 13으로 작업하며 Framer와의 충돌로 깔끔하지 못한 Page Transition

## 핵심 사용 기술
- React
- Typescript
- Next.js (Server Side Rendering)
- Framer Motion
- instagram-api
- Matter.js
- Tailwind CSS
- Vercel
`,
    screenshots: [
      '/images/projects/hoon-jo/1.png',
      '/images/projects/hoon-jo/2.png',
      '/images/projects/hoon-jo/3.png',
      '/images/projects/hoon-jo/4.png',
      '/images/projects/hoon-jo/5.png',
      '/images/projects/hoon-jo/6.png',
      '/images/projects/hoon-jo/7.png',
      '/images/projects/hoon-jo/8.png',
    ],
  },
  {
    name: 'hyundai',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2023년 3월',
    description:
      '외부로부터 오는 사이버 침입시도 / 보안 이벤트들을 총 관리 할 수 있는 보안관제팀 전용 포털 사이트입니다. 수많은 이벤트들을 처리하는 복잡한 작업들을 보다 편하고 빠르게 처리할 수 있도록 다양한 기능들을 지원합니다. ',
    detail: `## 주요 목표

***내용이 많아 생략된 부분이 많습니다.**

- 기존에 사용하고 있던 오래된 기술들로 만들어진 관리 페이지를 최신 기술스택을 적용하여 기능 마이그레이션
- Front-end와 Back-end를 구분하여 속도 개선
- 사용자 편의성을 위해 이벤트들을 핸들링하는 기능들 추가
- 커스터마이징이 가능한 표/그래프 상황판 등 대시보드 기능
- 기타 편의성과 데이터 가시성 고도화
## 투입 인원

- Full Stack개발자 2명
- UI/UX 디자이너 1명

## 담당

***내용이 많아 생략된 부분이 많습니다.**

- \`Backend\` 기존 유저 데이터 마이그래이션, JWT 방식으로 암호화,복호화 로그인,회원가입 구현
- \`Frontend\` 전체적인 화면 기획 및 UI 구현 (with antd)
- \`Frontend\` 서버사이드 다국어 기능 구현
- \`Frontend\` 커스터마이징 (컴포넌트 드래그 크기조절(Cookie), 기간설정, 화면표시설정 등) 대쉬보드 기능 구현 (그래프/표, 게시판)
- \`Frontend\` 로그인 필수 시스템이므로 Route Guarding 기능 구현
- \`Backend\` 기존 RDBMS와 NoSQL 기준으로 NEST.js Backend 구축 (DTO, VO, Controller, Service, 관계설정 등등)
- \`Backend\` Hyundai autoever 내부 API 연결을 위한 Service 구현
- \`Backend\` RDBMS (postgresql) CRUD 및 기타 API Service 구현
- \`Backend\` NoSQL (MongoDB) CRUD 및 기타 API Service 구현
- 모든 페이지
- \`Backend\` form data parsing, 파일 업로드 / 다운로드 Backend 기능 구현
- \`Frontend\` 반복된 공통 기능 게시판들로 인한 기본 Optional Table 컴포넌트 구현 (On/Off)
- GET 방식 테이블 검색 기능 (테이블 컬럼 기준) (DateRange, Select, Textbox, Number, Radio, Checkbox)
- 기본 CUD
- 엑셀 내보내기 (체크한 컬럼만/ 전체컬럼)
- 데이터 새로고침
- \`Frontend\` UX 개선 및 기능 (Tooltip, Elipsis, Modal 등)
- \`Deploy\` 폐쇄망 개발서버 / 실서버 배포
- \`Deploy\` 폐쇄망 전용 배포 자동화 쉘 스크립트 작성
- \`Deploy\` npm packages offline download
- \`Frontend\` 재사용된 소스코드들 Hook과 Component들로 리팩토링
- \`Backend\` Logging 미들웨어 제작
- \`Backend\` HTTP 요청을 Hooking 하여 Middleware를 통해 에러 핸들링 서비스 제작

## 배운점

- Git lab을 이용한 체계적인 레포지토리 관리
- 폐쇄망 네트워크 동작원리
- Backend에서 다양한 DB / API 중앙 컨트롤링 방법
- Backend 서비스 부품화 설계 방법
- JWT 로그인을 직접 만들어보며 내부 동작 원리 이해
- 대기업 시스템 구조 이해

## 문제점 해결

- Antd 테이블의 체크박스 기능은 기본적으로 렌더링방식으로 처리되기 때문에 체크하고 다음페이지로 넘어갈 시 이전에 선택했던 체크가 해제됨

\t ⇒ 수동적으로 State manager를 만들어 체크박스 기능을 제작했음.

- Git hub으로 모듈 업로드가 불가능 하고 압축하고 옮기는 과정이 번거롭고 오래걸림

\t ⇒ npm offline mirror설정으로 인터넷 환경에서 모듈을 경량화해 받고 폐쇄망에서 install 하는 과정으로 단축시킴

- 10만건이 넘는 데이터들을 엑셀 다운로드 하는데 시간이 오래 소요됨

\t ⇒ Backend에서 Buffer로 쪼개 전송

- DB 컬럼이 많고 지정된 데이터 형식이 많아서 테스트 시간이 오래 소요됨

\t ⇒ Data Mock-up으로 개발서버에 대량 삽입하여 테스트


## 아쉬운점

- 리팩토링을 위해 페이지마다 컴포넌트를 나누어 관리했지만 재사용도 안하는 코드들이 많아 오히려 가독성이 흐려짐.
- mongoDB와 Hyundai API를 모듈화 시켰지만 PostgreSQL은 테이블별로 모듈화 하여 소스코드 통일을 하지 못함.
- 다국어 기능에 대한 문서를 작성하지 않아 Key 값을 찾기가 어려웠음.

## 핵심 사용 기술

- React
- Typescript
- Next.js
- Antd design
- xlsx
- emotion
- i18n
- Nest.js
- react-query / axios
- mongoDB / mongoose
- postgreSQL / typeorm
- crypto-js
- pm2`,
    screenshots: [
      '/images/projects/hyundai/1.png',
      '/images/projects/hyundai/2.png',
      '/images/projects/hyundai/3.png',
      '/images/projects/hyundai/4.png',
      '/images/projects/hyundai/5.png',
      '/images/projects/hyundai/6.png',
      '/images/projects/hyundai/7.png',
      '/images/projects/hyundai/8.png',
      '/images/projects/hyundai/9.png',
      '/images/projects/hyundai/10.png',
      '/images/projects/hyundai/11.png',
    ],
  },
  {
    name: 'kisti',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2022년 12월',
    description:
      '유입되는 보안 이벤트들을 분석해서 AI Worker를 통해 모델을 만들고, 하위기관으로 보안용 AI Model을 배포할 수 있는 중앙 컨트롤 시스템입니다. Workflow라는 시스템을 도입하여 AI 모델링을 쉽고 간편하게 제작할 수 있다는 것이 특징입니다.',
    detail: `## 주요목표

***내용이 많아 생략된 부분이 많습니다.**

- Java (Spring)으로 만들어진 시스템을 최신 기술 스택으로 마이그레이션 하여 성능 개선
- 수많은 증적 데이터, 일반 데이터, Frontend, AI Worker들을 Backend를 중심으로 설계
- 모델을 만드는 작업을 단계별로 나누고 시각화 하여 모델 제작 접근성을 쉽게 설계
- 모델을 만들거나 테스트 할 때, 백그라운드에서 동작해야함.
- 데이터 시각화 (표/그래프)로 사용자가 문제점을 쉽게 간파할 수 있도록 통계 페이지 구성
- 이벤트들에 태그를 달아 통계를 내고, 집중적으로 관리할 수 있도록 구성
- 대시보드를 통해 사용자가 보안 이벤트들을 모니터링 할수 있어야함.

## 투입 인원

- Full Stack 개발자 2명
- UI/UX 디자이너 1명

## 담당

***내용이 많아 생략된 부분이 많습니다.**

- \`Frontend/Backend\` JAVA 코드를 Next와 Nest로 변환
- \`Frontend\` 모든 UI 구현 (with antd)
- \`Frontend\` 커스터마이징 (컴포넌트 드래그 크기조절(Cookie), 기간설정, 화면표시설정 등) 대쉬보드 기능 구현 (그래프/표, 게시판)
- \`Frontend/Backend\` 로그인/ 로그아웃/회원가입
- \`Frontend\` 로그인 필수 시스템이므로 Route Guarding
- \`Backend\` HTTP 요청 Hooking, JWT 검사 모듈
- \`Frontend\` Workflow 기능 구현
- 데이터선택, 특징추출, 모델학습, 테스트, 완료 다섯 단계 페이지
- 모델을 만드는 옵션들을 Redux와 유사한 형태의 Context Provider 구현하여 Immutable State로 단계별로 이동하며 수정할 수 있도록 만듬.
- State 변경 시 Data Validation Check
- \`Frontend\` 데이터선택 > 수집데이터를 불러오는 쿼리빌더 + Hook 제작
- \`Backend\` 데이터선택 > 요청된 쿼리를 Elasticsearch로 Data fetching Service
- \`Backend\`  데이터선택 > 데이터 CRUD
- \`Frontend\` 특징선택 > 특징별로 인코딩, 정규화, 결축치를 커스터마이징 하여 생성하는 페이지
- \`Backend\` 특징선택 > 특징 CRUD
- \`Frontend\` 모델학습 > 학습 알고리즘을 선택하거나 생성하는 기능
- \`Backend\` 모델학습 > 학습 알고리즘 CRUD
- \`Frontend\` 모델학습 > 학습 알고리즘 템플릿 불러오기
- \`Frontend\` 테스트 > 테스트셋을 선택하거나 학습셋을 분할 기능
- \`Frontend\` 완료 > 설정한 모델 옵션들을 요약하는 페이지
- \`Frontend\` JSON Beautifier 컴포넌트 제작
- \`Frontend\` 메일서버 관리 및 메일 템플릿 불러오기
- \`Frontend\` 모든 통계 원형/막대 그래프 구현 +기간검색, 키워드검색
- \`Backend\`  통계 페이지 SQL + 쿼리 속도 개선
- \`Frontend/Backend\` 대부분의 페이지 CRUD 화면 및 Backend Service
- \`Frontend/Backend\` 이벤트에 태깅/태그를 오른쪽 클릭 후 등록/삭제/수정
- \`Frontend\` 데이터 fetching 캐싱
- \`Frontend\` 패킷 인코딩 구현 + 패킷 드래그 선택 후 태깅/태그 등록 기능 구현
- \`Backend\` 이벤트 정탐/오탐 계산 로직 구현
- \`Frontend\` 반복된 공통 기능 게시판들로 인한 기본 Optional Table 컴포넌트 구현 (On/Off)
- GET 방식 테이블 검색 기능 (테이블 컬럼 기준) (DateRange, Select, Textbox, Number, Radio, Checkbox)
- 기본 CRUD
- 디테일 페이지
- 댓글
- 엑셀 내보내기 (체크한 컬럼만/ 전체컬럼)
- 데이터 새로고침
- \`Backend\` Prisma 스키마 작성 및 관계 필드 정의
- \`Frontend\` 재사용된 소스코드들 Hook과 Component들로 리팩토링
- \`Backend\` Route Guard 전역 설정
- \`Backend\` Logging 처리를 위한 Interceptor 제작
- \`Backend\` HTTP 요청을 Hooking 하여 Middleware를 통해 에러 핸들링 서비스 제작
- \`Backend\` API Specification 제작 (Swagger)
- \`Backend\` Prisma + mysql, elasticsearch 환경 구축
- \`Deploy\` Docker-compose 제작 (frontend / backend / DB)
- 

## 배운점

- Git lab을 이용한 CI/CD
- Database ORM 원리
- 대용량 데이터 핸들링, SQL 속도 개선 방법
- Backend 서비스 부품화 설계 방법
- JWT 토큰으로 사용자 정보 Request에 담지 않는 방법
- Typescript 도입
- Swagger를 통해 Backend 엔지니어와의 협업 간소화
- HTTP Hooking

## 문제점 해결

- DB나 Elasticsearch에서 가져온 데이터들에 Big Int 타입이 있으면 나는 에러

\t⇒ javascript 프로토타입으로 Big int를 파싱하는 함수 추가

- Java 코드를 변환하는 과정에서 해석에 대한 어려움

\t⇒ 먼저 소스코드를 읽고 이해하고 난 후 이해한 내용으로만 다시 코딩을 해서 코드가 간결해지고 읽기 쉬워짐

- Workflow 스텝별 State 관리 개선과 불변성 이슈

\t⇒ 일반 State로 컴포넌트별로 할당 

\t⇒ Context/Provider 형식으로 Flux 패턴으로 변환 

\t⇒ State Immutable 법칙을 위해 Reducer 생성 후 Redux화

- 드래그 기능 Event listener 마우스가 움직일때마다 렌더링을 해서 렉을 유발함

\t⇒ mouse down + mouse up 시에만 렌더링이 일어나도록 변화


## 아쉬운점

- AI Worker 관련 작업들은 다음 스프린트에서 예정되어 있어서 AI 개발의 경험을 못함
- 처음 설계 단계에서 Prisma 사용법 미숙으로 완전하지 못한 설계로 시작
- Prisma Schema를 Advanced 하게 작성하지 못함.
- Storybook을 제대로 활용하지 못함.

## 핵심 사용 기술

- React
- Typescript
- Next.js
- lodash
- ramda
- styled-components
- Storybook
- Antd design + Antd chart
- exceljs
- Nest.js
- react-query / axios
- elasticsearch
- swagger
- knex
- prisma
- mysql
- docker / docker-compose`,
    screenshots: [
      '/images/projects/kisti/1.png',
      '/images/projects/kisti/2.png',
      '/images/projects/kisti/3.png',
      '/images/projects/kisti/4.png',
      '/images/projects/kisti/5.png',
      '/images/projects/kisti/6.png',
      '/images/projects/kisti/7.png',
      '/images/projects/kisti/8.png',
      '/images/projects/kisti/9.png',
      '/images/projects/kisti/10.png',
      '/images/projects/kisti/11.png',
      '/images/projects/kisti/12.png',
      '/images/projects/kisti/13.png',
      '/images/projects/kisti/14.png',
      '/images/projects/kisti/15.png',
      '/images/projects/kisti/16.png',
      '/images/projects/kisti/17.png',
      '/images/projects/kisti/18.png',
      '/images/projects/kisti/19.png',
      '/images/projects/kisti/20.png',
      '/images/projects/kisti/21.png',
      '/images/projects/kisti/22.png',
      '/images/projects/kisti/23.png',
      '/images/projects/kisti/24.png',
    ],
  },
  {
    name: 'ctf',
    skills: ['WEB', 'Front-end'],
    date: '2022년 7월',
    description:
      '온라인 해킹 대회를 위한 시스템으로, 문제를 출제하거나 문제를 풀어 점수를 얻는 게임 방식입니다. 개인전과 팀전으로 나뉘고, 정답을 제출했을 때, 제출된 정답을 시스템 내부에서 컴파일하여 채점합니다. 관리자는 다양한 UI와 설정들을 변경하며 지루하지 않은 사용자 경험을 제공할 수 있습니다.',
    detail: `## 주요목표

- 개인전과 팀전으로 나뉘고 정해진 계산법에 따라 사용자에게 점수가 주어짐
- 문제들은 각각 단계가 정해져 있고, 자신의 레벨보다 높은 단계의 문제를 풀 수 없음
- 정답을 제출했을 때, Validation check을 위한 내부 컴파일
- 관리자에게 허용받은 문제들만 유저들에게 제공
- 팀별/개인별 랭킹 기능

## 투입 인원

- Fullstack 개발자 1명 (Me)
- Backend 개발자 1명
- UI/UX 디자이너 1명

## 담당 (Frontend 전체)

- 공지사항 UI / CRUD 기능
- 개인전 기능
- 문제 제출 기능 (Create) + 문제 제출 시 얻는 점수 계산을 해당 유저에게 할당
- 문제 리스트 목록형 / 카드형 UI 및 조회 기능 (Read)
- (관리자) 문제 수정 UI 및 기능(Update)
- (관리자) 문제 삭제 UI 및 기능(Delete)
- 문제 디테일 페이지 UI 및 기능
    - 신고기능, 정답자 리스트 기능
    - 문제 다운로드 기능, 문제제출 기능(Upload), 문제 정답 시 정답 점수 할당 기능
    - 댓글 기능
- 팀 기능
- 사용자가 팀을 만들어 마스터가 팀원을 추가/삭제 및 관리하는 기능
- (관리자) 팀 대항전 추가 기능 (수정/삭제 및 기간설정)
- 문제 제출 시 유저 기여도에 따른 점수 계산식 추가
- 문제 디테일 페이지 UI 및 기능
    - 신고기능, 정답자 리스트 기능
    - 문제 다운로드 기능, 문제제출 기능(Upload), 문제 정답 시 정답 점수 할당 기능
    - 댓글 기능
- 개인전/팀전에 관한 관리자 환경설정 기능
- 사용자 관리 UI 및 기능 (CRUD)
- 랭킹 UI 제작 및 개인전 및 팀전을 위한 통계 SQL 제작
- 로그인/로그아웃 기능
- 마이페이지 개인정보 수정 기능
- Excel, Word, PDF 다운로드 기능

## 배운점

- Backend를 중심으로 Worker, Frontend 설계 연결 기법
- Redis를 통한 Background process 기능
- 팀장으로써의 일정 조절 방법 및 작업 할당 방법

## 핵심 사용 기술

- React
- Next.js
- antd + antd chart
- toast-ui
- axios / swr
- next-auth
- xlsx
- lodash
- ramda
- react-dnd
- docx
- strapi`,
    screenshots: [
      '/images/projects/ctf/1.png',
      '/images/projects/ctf/2.png',
      '/images/projects/ctf/3.png',
      '/images/projects/ctf/4.png',
      '/images/projects/ctf/5.png',
      '/images/projects/ctf/6.png',
      '/images/projects/ctf/7.png',
      '/images/projects/ctf/8.png',
      '/images/projects/ctf/9.png',
      '/images/projects/ctf/10.png',
      '/images/projects/ctf/11.png',
      '/images/projects/ctf/12.png',
      '/images/projects/ctf/13.png',
      '/images/projects/ctf/14.png',
    ],
  },
  {
    name: 'jspo',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2022년 2월',
    description:
      '보안관제 서비스와 협업하여 하위기관을 통해 들어온 이벤트들을 처리하는 목적인 정보공유포털 시스템입니다. MOJ-PORTAL의 요소들을 상속받아 확장된 기능으로 구현된 프로젝트로 솔루션화 목적으로 폴더구조와 컴포넌트, 함수들이 정리되어있는 것이 특징입니다.',
    detail: `## 주요목표

***내용이 많아 생략된 부분이 많습니다.**

- 외부 시스템과 협업하여 통일된 데이터를 가공하여 사용자가 관리하게 쉽게 설계
- Notification / SMS / Mail 등으로 업무 전파 편의 기능
- 관리자가 자주 바뀌는 특징으로 모든 데이터는 확장 가능
- PDF, Excel, Word 등 다양한 양식으로 보고서 제출 자동화
- 사용자는 메뉴별로 권한을 다양하게 추가/수정/삭제 가능
- 일괄적으로 보안 티켓들을 처리
- 대시보드를 통해 사용자가 보안 이벤트들을 모니터링
- 정보자원 관리 / 보안정책 관리 등 다양한 누적 게시판
- 외부포털과 내부포털로 나누어짐

## 투입 인원

- Full Stack 개발자 1명

## 담당

***내용이 많아 생략된 부분이 많습니다.**

- 화면 기획 정의 + 기능 정의
- \`Frontend\` 대부분의 UI 구현 (with antd pro)
- \`Frontend\` 기본적인 CRUD를 위한 hooks / components 제작 (graphql / restapi)
- \`Frontend\` Routing 배열 함수를 라우팅 변환용 재귀함수 제작
- \`Frontend/Backend\` 로그인, 로그아웃, 회원가입, 비밀번호찾기(메일) 기능 (with strapi)
- \`Frontend/Backend\` 기존 Table 컴포넌트 개선 및 확장
- \`Frontend\` 일정관리 달력 기간 범위 계산 기능
- \`Frontend/Backend\` 통계 SQL 제작 + 통계 Table UI + 통계 그래프
- \`Frontend/Backend\` (내부포털) 하위기관 배포 게시판 + (외부포털)하위기관용 게시판
    - CRUD + UI/UX
    - 선택된 하위기관 Notification
    - 하위기관 열람 기능
- \`Frontend\` 기관  그룹 기능 구현 + 트리형 ui 제작
- \`Frontend\` 홈페이지 취약점 진단 비활성화 기능
- \`Frontend\` 취약점 진단 기능
    - CRUD + UI/UX
    - 자산 불러오기/선택
    - 취약점 갯수 계산 로직 구현
    - 다음차수 생성 시 이전차수와 비교/Validation check
- \`Frontend/Backend\` 기관관리 페이지
    - CRUD + 트리구조 UI/UX
    - 기관 Detail page CRUD
- \`Frontend/Backend\` 업무담당 기능 구현
    - 사용자 직책 부여 기능 (CRUD)
    - 직책별 페이지 별 기능 권한 제한 기능
- \`Frontend\` SMS/Mail 발송 + 이력 UI/UX
- \`Frontend\` 다양한 편의성 컴포넌트 + Hooks 개발
- 기존 서버 파일 마이그레이션
- \`Deploy\` 폐쇄망 SSL 적용
- \`Deploy\` 폐쇄망 실서버 배포 (docker-compose)

## 배운점

- 컴포넌트 기능 확장을 고려한 컴포넌트 디자인
- 클라이언트와의 커뮤니케이션 능력 + 일정/기능 조율
- PL의 역할 및 수행
- 트리형 카테고리 필드 설계 방법
- 폐쇄망 네트워크 구조 및 안전한 배포를 위한 포트포워딩 설계

## 아쉬운점

- PL/개발/디자인 등 모든 작업들을 혼자서 처리하며 업무 과부하 상태를 감당하지 못함

## 핵심 사용 기술

- React
- nginx
- docker / docker-compose
- Redux
- antd pro / antd chart
- ramda
- toast-ui
- axios / react-query
- graphql / apollo
- lodash
- socket.io
- styled-components
- socket.io-client
- strapi
- knex
- mariadb
- mysql`,
    screenshots: [
      '/images/projects/jspo/1.png',
      '/images/projects/jspo/2.png',
      '/images/projects/jspo/3.png',
      '/images/projects/jspo/4.png',
      '/images/projects/jspo/5.png',
      '/images/projects/jspo/6.png',
      '/images/projects/jspo/7.png',
      '/images/projects/jspo/8.png',
      '/images/projects/jspo/9.png',
      '/images/projects/jspo/10.png',
      '/images/projects/jspo/11.png',
      '/images/projects/jspo/12.png',
      '/images/projects/jspo/13.png',
      '/images/projects/jspo/14.png',
      '/images/projects/jspo/15.png',
      '/images/projects/jspo/16.png',
      '/images/projects/jspo/17.png',
    ],
  },
  {
    name: 'rittal',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2021년 9월',
    description:
      '리탈 제품을 판매를 위한 쇼핑몰입니다. light/dark 모드를 제작했고 결제기능과 배포를 제외한 모든 기능들을 1인 프로젝트로 진행되었습니다. strapi를 커스터마이징 하여 관리자 페이지를 만들어 제품이나 홈페이지 문구들을 관리할 수 있습니다.',
    detail: `## 주요목표

- 회원가입/로그인/로그아웃 기능
- Strapi를 활용한 제품/설정 관리
- Cookie와 JWT를 이용한 장바구니/관심상품 페이지
- 주문코드나 로그인 시 해당 아이디로 주문 조회
- 상담신청, 공지사항 등 기본 게시판 기능

## 투입 인원

- Full Stack 개발자 1명
- UI/UX Designer 1명

## 담당 (전체)

- \`Frontend\` light/dark 모드 UI 개발
- \`Frontend\` 반응형 홈페이지
- \`Frontend/Backend\` 로그인/로그아웃/회원가입
- \`Frontend/Backend\` 제품 페이지
- \`Frontend/Backend\` 마이 페이지
- \`Frontend/Backend\` 상담신청
- \`Frontend/Backend\` 공지사항/Q&A/게시판
- \`Frontend\` 로그인정보, 장바구니, 관심목록 등 Redux 상태 관리
- \`Frontend/Backend\` 파일 멀티 업로드 기능
- \`Frontend\` SEO
- \`Frontend\` Google Map API
- \`Frontend\` 재사용과 확장이 용이한 컴포넌트 리팩토링 및 제작
- \`Frontend\` 일반 게시판 컴포넌트 제작 (Create, Edit, Delete, List)

## 배운점

- 쇼핑몰 구축을 위한 코어 기능 정의
- 개발 전 레이아웃을 검토하며 컴포넌트로 나뉘어야할 요소들 정리
- Redux로 관리해야할 상태들과 일반 State로 관리해야할 상태 구분
- Figma-overlay를 활용한 디자이너 & 개발자 협업

## 핵심 사용 기술

- React
- antd pro
- Redux
- Axios / react-query
- google-map-react
- ramda
- styled-components
- strapi
- mysql
- knex`,
    screenshots: [
      '/images/projects/rittal/1.png',
      '/images/projects/rittal/2.png',
      '/images/projects/rittal/3.png',
      '/images/projects/rittal/4.png',
      '/images/projects/rittal/5.png',
      '/images/projects/rittal/6.png',
      '/images/projects/rittal/7.png',
      '/images/projects/rittal/8.png',
      '/images/projects/rittal/9.png',
      '/images/projects/rittal/10.png',
      '/images/projects/rittal/11.png',
      '/images/projects/rittal/12.png',
      '/images/projects/rittal/13.png',
      '/images/projects/rittal/14.png',
      '/images/projects/rittal/15.png',
    ],
  },
  {
    name: 'mcst-portal',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2021년 7월',
    description:
      '보안관제 서비스와 협업하여 하위기관을 통해 들어온 이벤트들을 처리하는 목적인 정보공유포털 시스템입니다. 업무관리가 편리할 수 있도록 일정, 기관별 관리, 취약점 진단 등 뿐만 아니라 가독성 높은 향상된 현황관리를 제공합니다.',
    detail: `## 주요목표

***내용이 많아 생략된 부분이 많습니다.**

- 외부 시스템과 협업하여 통일된 데이터를 가공하여 사용자가 관리하게 쉽게 설계
- Notification / SMS / Mail 등으로 업무 전파 편의 기능
- 관리자가 자주 바뀌는 특징으로 모든 데이터는 확장 가능
- PDF, Excel, Word 등 다양한 양식으로 보고서 제출 자동화
- 사용자는 메뉴별로 권한을 다양하게 추가/수정/삭제 가능
- 일괄적으로 보안 티켓들을 처리
- 기관별로 시스템을 진단해서 결과를 입력
- 대시보드를 통해 사용자가 보안 이벤트들을 모니터링
- 정보자원 관리 / 보안정책 관리 등 다양한 누적 게시판
- 외부포털과 내부포털로 나누어짐

## 투입 인원

- Full Stack 개발자 2명
- UI/UX 디자이너 1명

## 담당

***내용이 많아 생략된 부분이 많습니다.**

- 화면 기획 정의 + 기능 정의
- \`Frontend\` 대부분의 UI 구현 (with antd pro)
- \`Frontend\` 기본적인 CRUD를 위한 hooks / components 제작 (graphql / restapi)
- \`Frontend\` Redux 프로젝트 셋팅, auth/excel/setting slice 제작
- \`Frontend\` Notification 무한스크롤
- \`Frontend/Backend\` 마이페이지 정보변경/알림관리/기관현황 수정기능
- \`Frontend\` Routing 배열 함수를 라우팅 변환용 재귀함수 제작
- \`Frontend/Backend\` 로그인, 로그아웃, 회원가입, 비밀번호찾기(메일) 기능 (with strapi)
- \`Frontend/Backend\` 유저별 권한 셋팅 제작
- 조회/추가/수정/삭제 + 커스터마이징 권한셋팅
- Routing 배열함수를 이용한 메뉴별 트리구조 UI 제작
- \`Frontend/Backend\` 기존 Table 컴포넌트 기능 개선 및 확장
- Excel upload / Excel download
- Sorting
- Update / Delete
- Searching
- \`Frontend/Backend\` Socket.io를 이용한 알림기능
- \`Backend\` 알림 기능 사용할 HTTP middleware 제작 + 알림 ID 생성
- \`Frontend\` 유저 알림 기능
- \`Frontend\` 일정관리 달력 기능
- 유저 일정 등록 기능
- 기간 범위 계산 로직 + UI 제작
- 달력형/목록형 UI 및 기능 제작
- \`Frontend/Backend\` 통계 SQL 제작 + 통계 Table UI + 통계 그래프
- \`Frontend/Backend\` 취약점 진단 기능 제작
- Toast ui를 응용하여 표 생성 + 상태 등록
- 표 복사/붙여넣기 기능
- 표 Validation Check
- \`Frontend\` STIX 파일 업로드 시 변환하여 데이터 베이스에 저장하여 표로 출력하는 기능
- \`Frontend/Backend\`게시판 커스터마이징 기능
- 게시판 생성/수정/삭제 기능
- 추가 / 삭제 / 수정 된 게시판 권한 기능 추가
- \`Frontend/Backend\` 대시보드 기능
- 대시보드 컴포넌트별 개별 렌더링
- 대시보드 컴포넌트별 개별 기간 설정
- 대시보드용 통계 SQL 제작 및 그래프/표 UI 제작
- 대시보드 컴포넌트 사용자 크기 조절/ 배치수정 기능
- 대시보드 컴포넌트 Show/Hide 기능 + 일괄배치정렬
- 기존 서버 파일 마이그레이션
- \`Deploy\` 폐쇄망 실서버 배포 (docker-compose)
- \`etc\` 외부포털 IP 프록싱

## 배운점

- Graphql과 Apollo를 통해 새로운 통신 방법을 알게됨
- 코드를 줄여나갔던 리팩토링 방식에서 코드가 늘어나더라도 가독성이 높은 방법을 채택

## 문제점 해결

- 컨트롤러에서 logging 함수를 실행시키기 때문에 확장성에 문제가 있었음
- ⇒ strapi lifecycle을 통해 logging 기능을 개선하고 확장성에 용이하도록 개선
- 기존 각각 개별의 서버를 이용할 때 CORS 문제가 일어남
- ⇒ docker-compose로 컨테이너로 관리하며 내부적으로 요청을 받을 수 있도록 개선

## 아쉬운점

- 강력한 Graphql 기능들을 CRUD으로만 활용함.
- 함수형 프로그래밍용으로 ramda 라이브러리를 사용했지만 무분별한 사용으로 코드는 줄었지만 가독성이 떨어짐
- Strapi가 너무 무거워서 build 컴파일이 너무 느림

## 핵심 사용 기술

- React
- nginx
- docker / docker-compose
- Redux
- antd pro / antd chart
- ramda
- toast-ui
- axios / react-query
- graphql / apollo
- lodash
- socket.io
- styled-components
- socket.io-client
- strapi
- knex
- mariadb
- mysql`,
    screenshots: [
      '/images/projects/mcst/1.png',
      '/images/projects/mcst/2.png',
      '/images/projects/mcst/3.png',
      '/images/projects/mcst/4.png',
      '/images/projects/mcst/5.png',
      '/images/projects/mcst/6.png',
      '/images/projects/mcst/7.png',
      '/images/projects/mcst/8.png',
      '/images/projects/mcst/9.png',
      '/images/projects/mcst/10.png',
      '/images/projects/mcst/11.png',
      '/images/projects/mcst/12.png',
      '/images/projects/mcst/13.png',
      '/images/projects/mcst/14.png',
      '/images/projects/mcst/15.png',
    ],
  },
  {
    name: 'rittal-admin',
    skills: ['WEB', 'Front-end', 'Back-end'],
    date: '2021년 2월',
    description:
      'Rittal 홈페이지를 관리하기 위한 관리자 전용 홈페이지 입니다. 짧은 기간 안에 수많은 페이지들의 UI를 제작해야 해서 퍼블리싱 작업과 이후 Frontend 개발자가 이어 개발할 수 있도록 기본적인 환경 셋팅 작업을 진행 했습니다. 추후에 다른 개발자가 맡아 진행되어야 할 프로젝트이기 때문에 코드 가독성을 높힌 프로젝트입니다.',
    detail: `## 주요목표

- 시안을 바탕으로 모든 페이지 UI 제작
- CRA 프로젝트 생성 및 기본 개발 환경 셋팅
- Redux 셋팅
- Routing

## 투입 인원

- Full Stack 개발자 1명
- UI/UX 디자이너 1명

## 담당

- 모든 페이지 UI 제작
- Redux 셋팅 / 로그인 유저 정보 Slice 제작
- Strapi 개발환경 셋팅
- API 통신을 위한 Hook 제작
- 로그인/로그아웃/회원가입 제작

## 핵심 사용 기술

- React
- strapi
- antd / antd chart
- Redux
- axios
- lodash
- ramda`,
    screenshots: [
      '/images/projects/rittal-admin/1.png',
      '/images/projects/rittal-admin/2.png',
      '/images/projects/rittal-admin/3.png',
      '/images/projects/rittal-admin/4.png',
      '/images/projects/rittal-admin/5.png',
      '/images/projects/rittal-admin/6.png',
      '/images/projects/rittal-admin/7.png',
      '/images/projects/rittal-admin/8.png',
      '/images/projects/rittal-admin/9.png',
      '/images/projects/rittal-admin/10.png',
    ],
  },
  {
    name: 'gcc',
    skills: ['WEB', 'Front-end'],
    date: '2020년 9월',
    description:
      'Bootstrap Studio로 만들어진 프로젝트이며, 반응형과 one-page animation만 따로 작업된 홈페이지입니다. 오직 html css로만 구성되어있어 개선이 필요한 프로젝트입니다. Bootstrap Studio가 얼마나 강력한지 테스트와 함께 학습 목표로 작업하였습니다.',
    detail: `## 주요목표

- Bootstrap Studio

## 투입 인원

- Frontend 개발자 1명
- UI/UX 디자이너 1명

## 담당

- 디자인 시안대로 Bootstrap Studio를 이용하여 홈페이지 UI 개발
- 반응형
- 메인 페이지 one-page animation
- Slider

## 배운점

- Bootstrap Studio 사용법과 빠른 레이아웃 구현
- html tag convention
- 디자이너와 협업/커뮤니케이션

## 아쉬운점

- html로만 작업되어 퍼포먼스가 안좋고, 유지보수나 수정이 힘듬
- Bootstrap Studio으로부터 생성된 html 코드이기 때문에 클래스 재사용이나 가독성 높게 만들기가 까다로움

## 핵심 사용 기술

- Bootstrap Studio
- onepage-scroll.js
- slick`,
    screenshots: [
      '/images/projects/gcc/1.png',
      '/images/projects/gcc/2.png',
      '/images/projects/gcc/3.png',
      '/images/projects/gcc/4.png',
      '/images/projects/gcc/5.png',
      '/images/projects/gcc/6.png',
      '/images/projects/gcc/7.png',
      '/images/projects/gcc/8.png',
      '/images/projects/gcc/9.png',
      '/images/projects/gcc/10.png',
      '/images/projects/gcc/11.png',
      '/images/projects/gcc/12.png',
      '/images/projects/gcc/13.png',
      '/images/projects/gcc/14.png',
    ],
  },
  {
    name: 'zipida',
    skills: ['WEB', 'Front-end', 'Back-end', 'Deploy'],
    date: '2020년 8월',
    description:
      '기존에 있던 회사 홈페이지 관리가 힘들었던 단점을 보완하기 위해 진행한 프로젝트 입니다. Gatsby를 통해 서버 사이드 렌더링으로 SEO를 설정하고, Mark down으로 게시물을 작성하여 재배포 하는 방식으로 되어 있는 것이 특징입니다.',
    detail: `## 주요목표

- 게시물 관리를 위한 회사 홈페이지 리뉴얼
- .mdx 파일을 html 파일로 변환
- 홈페이지 재디자인

## 투입 인원

- Frontend 개발자 1명 (Me)
- UI/UX 디자이너 1명

## 담당 (전체)

- Gatsby 프로젝트 셋팅
- SEO / meta data 작업
- mark down parsing to html
- 전체 페이지 UI 퍼블리싱
- prop types를 이용한 타입 정의

## 배운점

- 서버 사이드 렌더링을 통한 SEO 최적화
- SSR과 CSR의 차이점
- DB 없이 파일을 이용한 홈페이지 구축

## 아쉬운점

- Gatsby를 통해 Server side 기능을 advanced 하게는 활용하지 못함
- CI/CD를 통해 자동 배포를 하지 못했음.

## 핵심 사용 기술

- React
- gatsby
- jquery
- prismjs
- ramda
- mdx-js
- react-helmet
- prop-types`,
    screenshots: [
      '/images/projects/zipida/1.png',
      '/images/projects/zipida/2.png',
      '/images/projects/zipida/3.png',
      '/images/projects/zipida/4.png',
      '/images/projects/zipida/5.png',
      '/images/projects/zipida/6.png',
    ],
  },

  {
    name: 'dugi-dugi',
    skills: ['APP', 'Front-end'],
    date: '2020년 7월',
    description:
      '코로나가 심해지기 시작했을 때 어느 장소가 위험한지 확인할 수 있는 어플리케이션입니다. 실시간으로 주변에 있는 코로나 감염자가 머물렀거나 주의해야할 장소, 확진자 이동경로 등을 알 수 있습니다. 이 외에도 내부적으로 주변 상황들을 분석하여 4단계로 표현하여 사용자에게 편의를 제공할 수 있는 앱입니다.',
    detail: `## 주요목표

- 주변에 있는 확진자 정보들을 가져오고 메인화면에 표시
- 주변 확진자가 머물렀던 장소들을 데이터로 가져와 위험도를 계산하여 표시
- 지도 위에 위험 장소들을 보여주고 확진자의 정보들을 표시
- 사용자가 확진장소 범위 안에 들어올 시 PUSH 알림

## 투입 인원

- Full Stack 개발자 2명
- UI/UX 디자이너 1명

## 담당

- 아이디어 및 기획 참여
- 앱 디자인 및 컨셉 결정
- 디자인된 UI 제작 및 컴포넌트 분리
- 컴포넌트 Story book 제작
- 기종별/OS별 (android/ios) UI 호환 작업
- 현재 주변 상태 등급 책정 계산 로직 + UI 구현
- Firebase push notification
- Splash 적용

## 배운점

- Android Studio / xcode 사용법
- Redux 철학 및 Statement 관련 지식
- open api 사용 및 정책
- Firebase serverless
- 스토어 배포 정책

## 아쉬운점

- 스토어 정책 상 코로나 관련 어플리케이션은 등록하지 못하는 상황 때문에 배포하지 못한 채 프로젝트가 마무리 됨
- 충분하지 않은 Backend 개발 경험

## 핵심 사용 기술

- react-native
- firebase
- Redux
- styled-components
- storybook`,
    screenshots: [
      '/images/projects/dugi-dugi/1.png',
      '/images/projects/dugi-dugi/2.png',
      '/images/projects/dugi-dugi/3.png',
      '/images/projects/dugi-dugi/4.png',
      '/images/projects/dugi-dugi/5.png',
      '/images/projects/dugi-dugi/6.png',
      '/images/projects/dugi-dugi/7.png',
      '/images/projects/dugi-dugi/8.png',
      '/images/projects/dugi-dugi/9.png',
      '/images/projects/dugi-dugi/10.png',
      '/images/projects/dugi-dugi/11.png',
    ],
  },
  {
    name: 'reservation',
    skills: ['WEB', 'Front-end', 'Back-end'],
    date: '2019년 12월',
    description:
      '다양한 숙박시설 홈페이지에 손쉽게 예약 시스템을 사용할 수 있게 플러그인으로 제작된 프로젝트 입니다. 많은 업체들의 조건에 충족하기 위해 수많은 관리자 설정이 있는 것이 특징입니다. 달력형과 기간 설정형으로 나누어집니다. 관리자는 예약과 객실들을 관리하고, 사용자는 숙박할 객실을 선택해 예약을 진행할 수 있습니다.',
    detail: `## 주요목표

- 달력 형태, 기간 설정 형태 두가지 UI를 제공
- 이벤트 기간을 설정(ex.성수기/비성수기 등), 해당 기간에 객실마다 이벤트기간에 맞는 가격을 책정
- 다양한 숙박업체에서 사용할 수 있도록 수많은 커스터마이징 설정과 대부분의 옵션들은 on/off이 가능함
- 달력형태 (객실 우선)
  - 각 날짜에 예약 가능한 객실과 불가능한 객실을 한 눈에 볼 수 있음
  - 날짜별 요금제를 모아서 볼 수 있음
- 검색형 (사용자 우선)
  - 사용자가 기간과 인원을 선택하고, 해당 기간에 예약이 가능한 객실만 보여줌
  - 선택한 날짜와 조건에 맞춰 객실별로 가격을 볼 수 있음

## 투입 인원

- Full Stack 개발자 1명

## 담당

- 달력형/검색형 공통
  - 옵션 기능 추가 (관리자)
  - 객실 추가/수정/삭제 (관리자)
  - 이벤트 기간 설정 (관리자)
  - 사이트 설정 (개인정보 동의서, 환불 안내 동의서 등) (관리자)
  - 예약 확인 페이지 UI 및 기능
  - 예약 하기 페이지 UI 및 기능
- 달력형
  - 달력 UI 제작
  - 공휴일 open api 적용
  - 달력에 날짜+객실별 상태 (예약가능/결제대기/완료/취소요청) 표현
  - 요금제별로 보기
  - 날짜 hover 시 객실별 상태 (예약가능/결제대기/완료/취소요청) 팝업
- 검색형
  - 달력 기간 선택 UI 제작
  - 기간/선택 옵션에 맞는 객실 리스트와 객실 선택 Modal
  - 선택옵션 및 선택 객실에 맞춘 총 합계금액 표현

## 아쉬운점

- composer를 사용하지 않고, CDN을 통해 모듈을 사용했음
- 다양한 환경를 고려한 탓에 너무 많은 설정들
- 마감 기간이나 기능 기획을 하지 않고, 회의를 통한 계속된 요청들로 프로젝트가 무기한 연장됨
- 첫 프로젝트였고, 개발이 익숙하지 않은 상태에서 대형프로젝트를 혼자 맡게됨
- UI/UX에 지식이 없는 상태로 제작하여 UI가 깔끔하지 못함
- 많은 부분이 미숙한 부분이 많은 첫 프로젝트

## 핵심 사용 기술

- PHP
- Gnuboard5
- Slick
- Bootstrap
- Korean Holiday Open API
- mysql`,
    screenshots: [
      '/images/projects/reservation/1.png',
      '/images/projects/reservation/2.png',
      '/images/projects/reservation/3.png',
      '/images/projects/reservation/4.png',
      '/images/projects/reservation/5.png',
      '/images/projects/reservation/6.png',
      '/images/projects/reservation/7.png',
    ],
  },
];
