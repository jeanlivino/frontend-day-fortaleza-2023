import { usePersistedData } from './usePersistedData';

const EVALUATED_TALKS_KEY = 'fend_evaluated_talks';

export const useEvaluatedTalks = () => {
  const [evaluatedTalks, setEvaluatedTalks] = usePersistedData(
    EVALUATED_TALKS_KEY,
    '[]'
  );

  const addEvaluetedTalk = (talkId: number) => {
    setEvaluatedTalks((prev: string) => {
      const evaluatedTalks = JSON.parse(prev);
      evaluatedTalks.push(talkId);
      return JSON.stringify(evaluatedTalks);
    });
  };

  const isEvaluatedTalk = (talkId: number) => {
    return JSON.parse(evaluatedTalks).includes(talkId);
  };

  return { addEvaluetedTalk, isEvaluatedTalk };
};
