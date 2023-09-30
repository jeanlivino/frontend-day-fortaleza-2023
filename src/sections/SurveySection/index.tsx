'use client';

import { dataApi } from '@/config/api';
import { useEvaluatedTalks } from '@/hooks/useEvaluedTalks';
import { Box, Center, Flex, styled } from '@/styled-system/jsx';
import { Talks } from '@/types';
import { captureException } from '@sentry/nextjs';
import React, { useState } from 'react';

type Props = {
  talks: Talks;
};

const rooms: Array<keyof Talks> = [
  'principal',
  'communities',
  'invite',
  'frontend',
];

const roomsLabel = {
  principal: 'Auditório',
  communities: 'Comunidades',
  invite: 'Convida',
  frontend: 'Front-End',
};

type RatingInputProps = {
  label: string;
  name: string;
  value: number;
  onChange: (rating: number) => void;
};

const RatingInput: React.FC<RatingInputProps> = ({
  label,
  value,
  name,
  onChange,
}) => (
  <Box mt="6">
    <styled.label fontWeight="bold">{label}</styled.label>
    <Flex
      justifyContent="space-between"
      gap={['1', '4']}
      px={['2', '6']}
      mt="2"
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <Box key={rating} mt="4">
          <styled.input
            type="radio"
            name={name}
            value={rating}
            id={`name${rating}`}
            onChange={() => onChange(rating)}
            checked={value === rating}
          />
          <styled.label
            fontSize={['md', 'lg']}
            htmlFor={`name${rating}`}
            ml="2"
          >
            {rating}
          </styled.label>
        </Box>
      ))}
    </Flex>
  </Box>
);

const SurveySection: React.FC<Props> = ({ talks }) => {
  const { addEvaluetedTalk, isEvaluatedTalk } = useEvaluatedTalks();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState<keyof Talks>();
  const [selectedTalk, setSelectedTalk] = useState<number>();
  const [contentQualityRating, setContentQualityRating] = useState<number>();
  const [teachingQualityRating, setTeachingQualityRating] = useState<number>();
  const [comment, setComment] = useState<string>('');

  const filteredTalks = React.useMemo(() => {
    if (!selectedRoom) return [];
    return talks[selectedRoom].sort((a, b) => a.hour.localeCompare(b.hour));
  }, [selectedRoom, talks]);

  const resetForm = React.useCallback(() => {
    setSelectedRoom(undefined);
    setSelectedTalk(undefined);
    setContentQualityRating(undefined);
    setTeachingQualityRating(undefined);
    setComment('');
  }, []);

  async function handleSave() {
    if (!selectedTalk) return;

    if (isEvaluatedTalk(selectedTalk)) {
      alert('Você já avaliou essa palestra');
      return;
    }

    try {
      setIsSubmitting(true);
      await dataApi.post('/survey/v1/save', {
        talk: selectedTalk,
        contentQualityRating,
        teachingQualityRating,
        comment,
      });

      addEvaluetedTalk(selectedTalk);
      resetForm();

      alert('Avaliação enviada com sucesso!');
    } catch (error) {
      captureException(error);
      alert(
        'Ocorreu um erro ao salvar sua avaliação. Tente novamente mais tarde.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Box
      maxW="800px"
      mx="auto"
      border="1px solid white"
      p="4"
      borderRadius="10px"
      bg="#f1f1f1"
    >
      <styled.label fontWeight="bold">Escolha a trilha:</styled.label>
      <Flex flexWrap="wrap" gap={['2', '6']} mt="2">
        {rooms.map((room) => (
          <Box key={room} mt="2">
            <styled.input
              type="radio"
              name="room"
              value={room}
              checked={selectedRoom === room}
              id={room}
              onChange={() => setSelectedRoom(room)}
            />
            <styled.label htmlFor={room} ml="2" fontSize="lg">
              {roomsLabel[room]}
            </styled.label>
          </Box>
        ))}
      </Flex>

      {selectedRoom && (
        <Box mt="4">
          <styled.label display="block" fontWeight="bold">
            Escolha a palestra:
          </styled.label>
          <styled.select
            mt="2"
            p="2"
            w="100%"
            borderRadius="10px"
            value={selectedTalk}
            onChange={(e) => setSelectedTalk(Number(e.target.value))}
          >
            <option value="">Selecione</option>
            {filteredTalks.map((talk) => (
              <option key={talk.id} value={talk.id}>
                {talk.hour} | {talk.speaker.title} - {talk.title}
              </option>
            ))}
          </styled.select>
          {selectedTalk && isEvaluatedTalk(selectedTalk) && (
            <styled.span fontSize="sm" mt="2" display="block" color="red">
              Você já avaliou essa palestra
            </styled.span>
          )}
        </Box>
      )}

      {selectedTalk !== undefined && (
        <>
          <RatingInput
            label="Avalie a qualidade do conteúdo:"
            name="contentQualityRating"
            value={contentQualityRating || 0}
            onChange={(rating) => setContentQualityRating(rating)}
          />

          <RatingInput
            label="Avalie a didática:"
            name="teachingQualityRating"
            value={teachingQualityRating || 0}
            onChange={(rating) => setTeachingQualityRating(rating)}
          />

          <Box mt="4">
            <styled.label display="block" fontWeight="bold">
              Comentário:
            </styled.label>
            <styled.textarea
              mt="2"
              p="2"
              w="100%"
              borderRadius="10px"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Box>

          <Center mt="4" w="100%">
            <styled.button
              bg={isSubmitting ? 'primary.300' : 'primary'}
              color={isSubmitting ? 'primary' : 'white'}
              py="2"
              px="6"
              fontWeight="bold"
              display="inline-block"
              borderRadius="100px"
              disabled={
                !selectedTalk || !contentQualityRating || !teachingQualityRating
              }
              onClick={handleSave}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </styled.button>
          </Center>
        </>
      )}
    </Box>
  );
};

export default SurveySection;
