import { Button, Input } from '../../../atoms';
import { ButtonWrapper } from '../styles.Modal';
import { ReportView } from './styles';

function ReportModal() {
  return (
    <ReportView>
      <h2>독후감쓰기</h2>
      <Input inputType="report" />
      <ButtonWrapper>
        <Button buttonType="cancel">취소</Button>
        <Button>등록</Button>
      </ButtonWrapper>
    </ReportView>
  );
}

export default ReportModal;
