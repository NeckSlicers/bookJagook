import { useState } from 'react';
import { ButtonWrapper } from '../../../Modal/styles.Modal';
import { Input, Button, Modal } from '../../../..';
import { BookCard, Info, ReviewTitle, ReportView, ReviewView } from './styles';
import BookInfo from './BookInfo';

function Book() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [hover, setHover] = useState(false);

  const onClickModalButton = () => setIsOpen(!isOpen);

  const hoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.type === 'mouseleave') return setHover(false);
    return setHover(true);
  };

  return (
    <BookCard onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
      <Info>
        {hover ? (
          <>
            <p>등록된 리뷰가 없습니다.</p>
            <Button
              onClick={() => {
                setModalType('review');
                onClickModalButton();
              }}
            >
              별점/한줄평 등록하기
            </Button>
          </>
        ) : (
          <BookInfo />
        )}
      </Info>

      <Button
        onClick={() => {
          setModalType('report');
          onClickModalButton();
        }}
      >
        독후감 쓰기
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        {modalType === 'report' && (
          <ReportView>
            <ReviewTitle>독후감쓰기</ReviewTitle>
            <BookInfo />
            <Input inputType="report" />
            <ButtonWrapper>
              <Button buttonType="cancel">취소</Button>
              <Button>등록</Button>
            </ButtonWrapper>
          </ReportView>
        )}

        {modalType === 'review' && (
          <ReviewView>
            <ReviewTitle>별점/한줄평 등록하기</ReviewTitle>
            <BookInfo />
            <Input inputType="review" />
            <ButtonWrapper>
              <Button buttonType="cancel">취소</Button>
              <Button>확인</Button>
            </ButtonWrapper>
          </ReviewView>
        )}
      </Modal>
    </BookCard>
  );
}

export default Book;
