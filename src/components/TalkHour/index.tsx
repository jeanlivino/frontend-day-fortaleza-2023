import { styled } from '@/styled-system/jsx';

const TalkHour: React.FC<{ hour: string }> = ({ hour }) => {
  return (
    <styled.p
      alignSelf='start'
      color='secondary'
      fontSize='md'
      fontWeight='bold'
      textAlign='left'
    >
      {hour}
    </styled.p>
  );
};

export default TalkHour;
