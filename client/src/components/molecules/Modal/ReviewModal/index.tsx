import { Input, Button } from '../../../atoms';
import { ButtonWrapper } from '../styles.Modal';

function ReviewModal() {
  return (
    <div>
      <Input />
      <ButtonWrapper>
        <Button buttonType="cancel">취소</Button>
        <Button>확인</Button>
      </ButtonWrapper>
    </div>
  );
}

export default ReviewModal;
