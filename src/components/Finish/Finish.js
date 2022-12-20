import { FinishContainer, FinishText, FinishIcon } from './Finish.styled';

export function Finish() {
  return (
    <FinishContainer>
      <FinishText>
        We're sorry, but you've reached the end of search results.
        <FinishIcon />
      </FinishText>
    </FinishContainer>
  );
}
