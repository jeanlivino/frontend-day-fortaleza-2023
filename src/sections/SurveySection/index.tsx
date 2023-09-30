'use client';

import { Box, Flex, styled } from '@/styled-system/jsx';
import { Talks } from '@/types';
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
  const [selectedRoom, setSelectedRoom] = useState<keyof Talks>();
  const [selectedTalk, setSelectedTalk] = useState<number>();
  const [contentQualityRating, setContentQualityRating] = useState<
    number | null
  >(null);
  const [teachingQualityRating, setTeachingQualityRating] = useState<
    number | null
  >(null);
  const [comment, setComment] = useState<string>('');

  const filteredTalks = React.useMemo(() => {
    if (!selectedRoom) return [];
    return talks[selectedRoom].sort((a, b) => a.hour.localeCompare(b.hour));
  }, [selectedRoom, talks]);

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

          <Box mt="4">
            <styled.button
              bg="primary"
              color="white"
              p="2"
              borderRadius="10px"
              disabled={
                !selectedTalk || !contentQualityRating || !teachingQualityRating
              }
              onClick={() => {
                const data = {
                  talk: selectedTalk,
                  contentQualityRating,
                  teachingQualityRating,
                  comment,
                };
                console.log(data);
              }}
            >
              Enviar
            </styled.button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SurveySection;
