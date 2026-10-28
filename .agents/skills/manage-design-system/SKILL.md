---
name: manage-design-system
description: Dembrandt를 사용한 샷시·창호 디자인 시스템 토큰 관리, DESIGN.md 및 _variables.scss 동기화, 전환형 시공 UI 컴포넌트 구축 스킬
---

# 샷시·창호 시공 디자인 시스템 운영 스킬 (Design System Skill)

> **원칙**: 본 프로젝트는 외부 거대 UI 컴포넌트 라이브러리(MUI, AntD, Tailwind 등)에 일절 의존하지 않고, **Dembrandt**를 활용하여 참고 사이트([https://gaya-door.hsweb.pics/](https://gaya-door.hsweb.pics/))의 세련된 토스/현대적 룩앤필(Pretendard, Trust Blue `#3182F6`, Deep Ink `#191F28`)을 단일 진실 공급원(SSOT)으로 삼아 가볍고 전환율 높은 자체 UI 컴포넌트군을 구축 및 운영합니다.

---

## 1. Dembrandt 토큰 및 디자인 동기화 워크플로우

참고 사이트나 리브랜딩 레퍼런스로부터 디자인 시스템을 갱신할 때는 아래 절차를 따릅니다.

### 1.1. Dembrandt 실행
```bash
# 참고 사이트로부터 AI용 마크다운 명세 추출
npx dembrandt https://gaya-door.hsweb.pics/ --design-md

# W3C 표준 DTCG 토큰 JSON 추출
npx dembrandt https://gaya-door.hsweb.pics/ --dtcg
```

### 1.2. 디자인 시스템 SSOT (`DESIGN.md` 및 `_variables.scss`) 동기화
1. 추출된 콘솔 및 `output/<domain>/DESIGN.md` 내용을 루트의 [DESIGN.md](file:///c:/git/joeunshashi/DESIGN.md)에 동기화.
2. 색상, 폰트(Pretendard Variable), 라운딩(8/10/12/16px), 그림자(`rgba(2, 32, 71, 0.05)`)를 [src/styles/base/_variables.scss](file:///c:/git/joeunshashi/src/styles/base/_variables.scss)의 CSS 커스텀 속성으로 전개.
3. 컴포넌트 및 페이지 스타일링 시 직접적인 색상/수치 하드코딩을 엄격히 금지하고 반드시 `var(--primary-color)` 등 CSS 변수를 참조.

---

## 2. 샷시·창호 시공 특화 5대 전환형 UI 컴포넌트 명세

홈페이지의 검색 유입을 실제 시공 전화 문의 및 무료 견적 신청으로 직결시키기 위해 다음 컴포넌트를 `src/components/ui/` 하위에 자체 완결형(동반 SCSS)으로 구축합니다.

### 2.1. `FloatingCtaBar` (`src/components/ui/FloatingCtaBar/`)
- **목적**: 모바일 화면 하단에 상시 고정되어 고객의 이탈을 막고 즉각적인 전화 상담을 유도.
- **핵심 요소**:
  - 대표번호 원클릭 바로연결 버튼 (`<a href="tel:..." className="cta-tel">`)
  - 실시간 무료 견적 신청 버튼 (`<Link href="/contact" className="cta-estimate">`)
  - "오늘 접수 시 무료 출장 실측" 안내 캡션
- **모바일 UX**: 스크롤 시 부드럽게 나타나며 하단 여백 및 홈 인디케이터 침범 방지 (`env(safe-area-inset-bottom)`).

### 2.2. `BeforeAfterSlider` (`src/components/ui/BeforeAfterSlider/`)
- **목적**: 노후 알루미늄/나무 창호에서 단열 1등급 하이샷시로 교체된 전후 상태를 마우스 드래그/터치로 직관적 비교.
- **핵심 요소**:
  - 분할선(Divider) 드래그 핸들 (터치 제스처 대응)
  - '시공 전 (기존 노후 창호)' / '시공 후 (로이유리 이중창)' 라벨 뱃지
  - 결로 방지, 외풍 차단 효과 수치 오버레이

### 2.3. `QuickEstimateForm` (`src/components/ui/QuickEstimateForm/`)
- **목적**: 복잡한 절차 없이 30초 만에 간이 견적을 신청할 수 있는 초경량 전환 폼.
- **입력 필드**:
  1. 주거 유형 (아파트 / 빌라 / 단독주택 / 상가)
  2. 공급 평형 (20평형대 / 30평형대 / 40평형대 이상)
  3. 교체 범위 (전체 교체 / 외부 베란다창 / 내부 방창)
  4. 시공 희망 지역 (시·군·구 선택)
  5. 고객 연락처 및 성함
- **UX 요건**: 단계별(Step-by-Step) 카드 전환 방식 또는 깔끔한 한 화면 폼, 성공 시 `notistack` 스낵바 피드백.

### 2.4. `ProjectCaseCard` (`src/components/ui/ProjectCaseCard/`)
- **목적**: 10단계 시공 사례 목록 및 지역별 페이지에서 고객 신뢰를 확보하는 카드 UI.
- **핵심 요소**:
  - 고화질 시공 대표 썸네일 (WebP 포맷, 반응형 최적화)
  - 시공 지역 및 아파트 단지명 (예: `[안양시 동안구] OO아파트 32평형`)
  - 시공 내역 요약 뱃지 (예: `전체 창호 교체`, `KCC 140 발코니창`, `로이복층유리`)
  - 시공 전후 비교 보기 링크 (`/projects/[slug]`)

### 2.5. `TrustBadge` (`src/components/ui/TrustBadge/`)
- **목적**: 헤로 섹션 및 견적 폼 하단에 배치하여 고객의 불안을 즉시 해소.
- **핵심 뱃지 항목**:
  - ⚡ **1일 철거 및 시공 완료 (원데이 시공)**
  - 🌡️ **에너지소비효율 1등급 창호 (단열·기밀 공인 시험성적서)**
  - 🛡️ **정품 자재 & 10년 품질 보증 (철저한 A/S 책임제)**
  - 💰 **직영 공장 제작 직판 (중간 유통 마진 제거)**

---

## 3. UI 컴포넌트 구현 필수 규약 (Strict Implementation Rules)

1. **외부 UI 라이브러리 엄금**: MUI, AntD, Tailwind 등을 일절 쓰지 않고 순수 React 19 + TypeScript + 동반 SCSS로 직접 구현.
2. **최상위 루트 스코프 필수**: 컴포넌트 SCSS는 단일 루트 클래스(예: `.ui-floating-cta`, `.ui-before-after`) 내부에 모든 요소를 중첩.
3. **모바일 호버 보호 (`@include hover`)**: 스마트폰 탭 시 호버가 잔류하지 않도록 반드시 `@include hover` 믹스인 사용.
4. **CSS 커스텀 속성 100% 활용**: 색상(`var(--primary-color)`), 라운딩(`var(--radius-md)`), 폰트(`var(--font-family-base)`)를 철저히 참조.
5. **접근성(a11y) 준수**: 스크린 리더용 `aria-label`, 키보드 탐색 지원, 모바일 터치 타깃 최소 44px 보장.
