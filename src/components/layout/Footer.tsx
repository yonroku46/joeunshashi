import Link from 'next/link';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="company-info">
            <span className="brand-title">조은샷시</span>
            <p className="service-desc">
              부산광역시 · 김해시 · 창원시 아파트·빌라·상가 샷시 수리, 창문 롤러 교체, 레일 파손 보강, 외풍 차단 모헤어 교체, 친환경 미세방충망 전문
            </p>
          </div>

          <div className="footer-nav-groups">
            <div className="nav-group">
              <span className="group-title">전문 수리 서비스</span>
              <Link href="/services/window-repair">창문 롤러(바퀴) 교체</Link>
              <Link href="/services/window-repair">깨진 샷시 레일 스텐 보강</Link>
              <Link href="/services/window-repair">외풍 차단 모헤어 교체</Link>
              <Link href="/services/screen-window">친환경 미세방충망 교체</Link>
            </div>
            <div className="nav-group">
              <span className="group-title">출장 가능 지역</span>
              <Link href="/#areas-section">부산광역시 전지역</Link>
              <Link href="/#areas-section">김해시 전지역 (장유·율하·내외동)</Link>
              <Link href="/#areas-section">창원시 전지역 (성산·의창·마산·진해)</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} 조은샷시. All rights reserved.
          </p>
          <div className="footer-links">
            <Link href="/pricing">수리 비용 안내</Link>
            <Link href="#estimate-section">30초 견적 신청</Link>
            <Link href="/#faq-section">자주 묻는 질문</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
