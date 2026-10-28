# Learning: Windows 환경에서 `yarn dev` 실행 중 `yarn build` 충돌 방지

## 문제 상황
Windows OS 환경에서 터미널에 `yarn dev` 개발 서버가 실행 중인 상태에서 백그라운드나 추가 터미널로 `yarn build`(`next build`)를 실행할 경우, 양쪽 프로세스가 동일한 `.next` 디렉터리의 매니페스트 및 컴파일 파일을 동시에 읽고 쓰면서 파일 잠금(Locking) 및 레이스 컨디션이 발생함.
이로 인해 무작위로 아래와 같은 에러가 발생하며 빌드가 실패함:
- `[Error: Invariant: no direct app page entry found for /_not-found]`
- `[Error: Invariant: no direct app page entry found for /area/[...slug]]`
- `ENOENT: no such file or directory, open '...\.next\server\pages-manifest.json'`

## 해결책
`next.config.mjs`에서 `distDir: process.env.BUILD_DIR || '.next'`로 구성하여 환경변수로 출력 디렉터리를 격리할 수 있도록 개선함.
빌드 검증 시 `$env:BUILD_DIR=".next-build"; yarn build; Remove-Item -Recurse -Force .next-build; Remove-Item env:BUILD_DIR`를 수행함으로써 실행 중인 `yarn dev`의 `.next` 캐시와 충돌 없이 100% 무결한 빌드 검증을 보장함.
