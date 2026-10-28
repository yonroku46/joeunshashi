# Project Design System (Dembrandt Blueprint)

> **개요**: 본 문서는 **Dembrandt**(디자인 인텔리전스 및 토큰 추출 도구)의 분석 결과를 기반으로 한 본 프로젝트 고유의 디자인 시스템 명세서입니다.
> AI 코딩 어시스턴트 및 개발자는 모든 UI 구현 시 본 문서의 토큰과 컴포넌트 명세를 단일 진실 공급원(SSOT)으로 참조하세요.

---

## 1. 디자인 원칙 (Design Principles)

1. **Lightweight & Zero-Bloat**: 외부 거대 UI 라이브러리(MUI, Tailwind 등)에 일절 의존하지 않고 순수 React 19 + TypeScript + 컴팩트 SCSS로 최상의 모바일 로딩 성능을 구현.
2. **Token-Driven Consistency**: 참고 사이트([https://gaya-door.hsweb.pics/](https://gaya-door.hsweb.pics/))의 세련된 토스/현대적 시공 사이트 룩앤필(Pretendard, Trust Blue `#3182F6`, Deep Ink `#191F28`)을 기반으로 CSS 커스텀 속성(`var(--...)`)을 100% 참조.
3. **Accessibility & Responsive**: 시맨틱 HTML, 모바일 탭 시 sticky hover 방지(`@include hover`), 모바일 전화 연결(`tel:`) 및 상담 플로팅 CTA 최적화.
4. **Trust & Conversion-Oriented**: 샷시·창호 시공의 신뢰감(1일 시공, 1등급 단열, A/S 보증)을 전달하는 깔끔한 카드, 전후(Before/After) 비교 뷰, 라운딩(10px~12px) 디자인.

---

## 2. 디자인 토큰 명세 (Design Tokens)

### 2.1. 색상 팔레트 (Color Palette - gaya-door.hsweb.pics 기반)

| 토큰명 | 라이트 모드 값 | 다크 모드 값 | 설명 / 역할 |
| :--- | :--- | :--- | :--- |
| `--primary-color` | `#3182f6` (Toss Blue) | `#4593fc` (Bright Blue) | 브랜드 대표 신뢰 컬러, 주요 전화/견적 CTA |
| `--primary-color-hover` | `#1b64da` (Deep Blue) | `#79b2fd` | CTA 버튼 호버 시 |
| `--primary-color-bg` | `#e8f1fd` (Soft Blue) | `rgba(49, 130, 246, 0.15)` | 블루 소프트 하이라이트, 배지 배경 |
| `--secondary-color` | `#9ec4ff` (Light Blue) | `#2b5288` | 서브 악센트, 보조 라인 |
| `--accent-color` | `#ff8a00` (Warm Orange) | `#ffa333` | 무료 견적, 이벤트 배지 등 즉각 시선 유도 |
| `--background` | `#ffffff` | `#0f1115` (Deep Dark) | 메인 배경색 |
| `--bg-soft` | `#f4f6f9` (Soft Gray) | `#1a1e26` | 섹션 배경, 폼 배경 |
| `--bg-hover` | `#f8f9fa` | `#222732` | 리스트/아이템 마우스오버 배경 |
| `--foreground` | `#191f28` (Ink Black) | `#f8fafc` | 최상위 헤드라인 및 주요 텍스트 |
| `--text-primary` | `#191f28` (Ink Black) | `#f8fafc` | 제목, 강조 텍스트 |
| `--text-body` | `#333d4b` (Neutral Gray) | `#d1d5db` | 본문, 설명 텍스트 |
| `--text-secondary` | `#6b7684` (Muted Gray) | `#9ca3af` | 부가 설명, 작성일, 메타 정보 |
| `--text-faint` | `#8b95a1` (Light Gray) | `#6b7280` | 비활성, 안내 플레이스홀더 |
| `--border` | `#e5e8eb` (Line Gray) | `#2d3542` | 카드 테두리, 구분선 |
| `--border-soft` | `#eef0f3` (Soft Line) | `#222833` | 미세 경계선, 테이블 구분선 |
| `--border-focus` | `#3182f6` | `#4593fc` | 입력 포커스 시 테두리 |

#### 상태 컬러 (Status Variants)
| 토큰명 | 값 | 배경색 | 용도 |
| :--- | :--- | :--- | :--- |
| `--variant-success` | `#059669` (Emerald) | `rgba(5, 150, 105, 0.1)` | 시공 완료, A/S 보증 완료 |
| `--variant-error` | `#e11d48` (Rose) | `rgba(225, 29, 72, 0.1)` | 결로/외풍 위험 자가진단, 에러 |
| `--variant-warning` | `#d97706` (Amber) | `rgba(217, 119, 6, 0.1)` | 교체 주기 경과 경고 |
| `--variant-info` | `#3182f6` (Blue) | `#e8f1fd` | 시공 안내 정보 |

---

### 2.2. 타이포그래피 (Typography Scale)

```scss
// 기본 폰트 패밀리
--font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
--font-family-code: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;

// 폰트 크기
--font-xs: 0.75rem;    // 12px
--font-sm: 0.875rem;   // 14px
--font-base: 1rem;     // 16px
--font-lg: 1.125rem;   // 18px
--font-xl: 1.25rem;    // 20px
--font-2xl: 1.5rem;    // 24px
--font-3xl: 1.875rem;  // 30px
--font-4xl: 2.25rem;   // 36px

// 폰트 굵기
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

// 줄 높이 (Line Height)
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

---

### 2.3. 간격 (Spacing Scale)

4px / 8px 기본 단위의 규칙적인 그리드 스케일을 채택하고 있습니다.

| 토큰명 | 픽셀 환산 | Rem 값 | 주요 용도 |
| :--- | :--- | :--- | :--- |
| `--space-1` | 4px | `0.25rem` | 미세 패딩, 아이콘 마진 |
| `--space-2` | 8px | `0.5rem` | 버튼 내 인라인 여백, 배지 여백 |
| `--space-3` | 12px | `0.75rem` | 인풋 패딩, 카드 소형 여백 |
| `--space-4` | 16px | `1rem` | 표준 블록 패딩, 그리드 간격 |
| `--space-5` | 20px | `1.25rem` | 모달 헤더 여백 |
| `--space-6` | 24px | `1.5rem` | 카드 컨테이너 패딩 |
| `--space-8` | 32px | `2rem` | 섹션 간 마진 |
| `--space-10` | 40px | `2.5rem` | 화면 상단 여백 |
| `--space-12` | 48px | `3rem` | 대형 섹션 간격 |
| `--space-16` | 64px | `4rem` | 히어로 섹션 상하 패딩 |

---

### 2.4. 모서리 라운딩 및 그림자 (Border Radius & Shadows)

```scss
// 라운딩
--radius-none: 0px;
--radius-sm: 4px;      // 배지, 태그
--radius-md: 8px;      // 버튼, 입력 필드
--radius-lg: 12px;     // 카드, 팝오버
--radius-xl: 16px;     // 모달, 다이얼로그
--radius-full: 9999px; // 필 버튼, 아바타

// 그림자 (Elevation)
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

// 트랜지션
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. UI 컴포넌트 명세 (`src/components/ui/`)

본 프로젝트에서 표준 구현 및 유지보수하는 디자인 시스템 컴포넌트입니다.

### 3.1. `Button` (`@/components/ui/Button/Button`)
- **베리언트**: `primary`, `secondary`, `outlined`, `ghost`
- **사이즈**: `sm` (32px 높이), `md` (40px 높이), `lg` (48px 높이)
- **상태**: `disabled`, `loading` (스피너 표시)
- **아이콘**: `startIcon`, `endIcon`

### 3.2. `Dialog` (`@/components/ui/Dialog/Dialog`)
- **기능**: 포털 렌더링, ESC 키 닫기, 배경 클릭 닫기, 포커스 트랩
- **브라우저 뒤로가기 안전**: 모바일의 `popstate` 이벤트에 대응하여 뒤로가기 버튼 클릭 시 안전하게 닫힘
- **구조**: `DialogTitle`, `DialogContent`, `DialogActions`

### 3.3. `Input` (`@/components/ui/Input/Input`)
- **기능**: 라벨, 플레이스홀더, 헬퍼 텍스트, 에러 메시지 표시
- **상태**: `focus`, `error`, `disabled`

### 3.4. `Tabs` (`@/components/ui/Tabs/Tabs`)
- **기능**: WAI-ARIA 대응 키보드 네비게이션(화살표 키 조작), 활성 인디케이터

---

## 4. Dembrandt 실행 및 유지보수 흐름

프로젝트 시작 시나 리브랜딩 시 새로운 디자인 파라미터를 추출/갱신하는 명령어:

```bash
# 1. 대상 사이트로부터 AI용 DESIGN.md 추출
npx dembrandt https://example.com --design-md

# 2. DTCG W3C 표준 토큰 JSON 추출
npx dembrandt https://example.com --dtcg

# 3. 추출된 콘솔 결과를 본 문서 (DESIGN.md) 및 _variables.scss에 반영
```
