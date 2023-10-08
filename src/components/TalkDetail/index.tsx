import { Box, styled } from '@/styled-system/jsx';
import { Talk } from '@/types';

const TalkDetail: React.FC<
  Talk & {
    onSpeakerClick?: () => void;
    roomName?: string;
  }
> = ({ speaker, title, roomName, onSpeakerClick }) => {
  return (
    <Box borderBottom="1px solid" borderColor="secondary" pb="5">
      <styled.button cursor="pointer" onClick={onSpeakerClick}>
        <styled.h4
          color="secondary"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="left"
        >
          {speaker.title}{' '}
          {roomName && (
            <styled.span textTransform="none" fontWeight="400" color="white">
              | Trilha: {roomName}
            </styled.span>
          )}
        </styled.h4>
      </styled.button>
      <styled.p fontSize="sm" color="white">
        {speaker.role} {speaker.company}
      </styled.p>
      <styled.p mt="1" color="secondary" fontWeight="bold">
        {title}{' '}
      </styled.p>
    </Box>
  );
};

export default TalkDetail;
