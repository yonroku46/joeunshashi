'use client';

import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { useSnackbar } from 'notistack';
import { Dialog } from '@/components/ui/Dialog/Dialog';
import './PhotoConsultDialog.scss';

export interface PhotoConsultDialogProps {
  open: boolean;
  onClose: () => void;
  phone?: string;
  kakaoUrl?: string;
}

export default function PhotoConsultDialog({
  open,
  onClose,
  phone = '010-9392-0431',
  kakaoUrl = 'https://open.kakao.com/o/st9et7Ai',
}: PhotoConsultDialogProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyPhone = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phone);
        setIsCopied(true);
        enqueueSnackbar(`연락처(${phone})가 복사되었습니다.`, {
          variant: 'success',
          autoHideDuration: 2000,
        });
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch {
      enqueueSnackbar(`대표번호: ${phone}`, { variant: 'info' });
    }
  };

  const handleKakaoClick = () => {
    window.open(kakaoUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="고장 사진 상담"
      maxWidth="sm"
      className="photo-consult-dialog-paper"
    >
      <div className="photo-consult-dialog">
        <p className="dialog-lead">PC에서는 카카오톡 또는 문자 번호 복사를 이용해 주세요.</p>

        <div className="consult-actions">
          <button type="button" className="btn-kakao" onClick={handleKakaoClick}>
            <RiKakaoTalkFill size={18} />
            <span>카카오톡으로 사진 보내기</span>
          </button>

          <button type="button" className="btn-copy" onClick={handleCopyPhone}>
            {isCopied ? <FiCheck size={16} /> : <FiCopy size={16} />}
            <span>{isCopied ? '복사 완료!' : `${phone} 번호 복사`}</span>
          </button>
        </div>
      </div>
    </Dialog>
  );
}
