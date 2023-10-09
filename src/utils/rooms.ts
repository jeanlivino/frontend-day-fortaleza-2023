export const roomsButtons = [
  {
    label: 'Geral',
    value: 'principal',
  },
  {
    label: 'Front-end',
    value: 'frontend',
  },
  {
    label: 'Comunidades',
    value: 'communities',
  },
  {
    label: 'Convida',
    value: 'invite',
  },
] as const;

export const getRoomName = (tag: string) => {
  const button = roomsButtons.find((button) => button.value === tag);

  const roomName = button?.value === 'principal' ? 'Auditório' : button?.label;

  return roomName;
};
