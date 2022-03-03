Node Practices

 1. 패키지(package)
    - 완전한 애플리케이션(nodedeamon, babel, webpack)
    - 프로젝트에서 사용하는 모듈(라이브러리)

 2. 의존성(Dependency)
    - 개발하는 프로젝트(애플리케이션, 패키지)에서 설치하고 사용하는 패키지
    - 일반 의존성
        개발하고 있는 프로젝트에서 사용하는 패키지로 꼭 배포에 포함
        $[project-ex01] npm i ...
    - 개발 의존성
        개발에 필요하거나 도움이 되는 패키지(dev tool) 배포에 포함되지 않는다.
        $[project-ex01] npm i -D ... 

 3. 패키지 설치
    1) 전역(global) 설치 : 여러 프로젝트에서 공통으로 사용하는 도구들
    2) 지역(project local) 설치 : 특정 프로젝트에 종속적인 도구나 라이브러리
    3) 패키지 설치
        $[project-ex01] npm i ejs (local, general dependency)
        $[project-ex01] npm i -D nodemon (local, dev. dependency)


 4. Node Project(BE/FE) 생성
 5. Module
 6. npmjs.com(npm registry)에 내 패키지 배포(생략, https://github.com/kickscar/javascript-practices/blob/main/TechNotes/javascript-practices/11.Development%20Environments/02.%20npm.md)
 7. helloweb-ex01 (맨바닥)
 8. helloweb-ex01 (express)