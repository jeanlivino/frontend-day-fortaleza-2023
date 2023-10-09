import React, { useState } from 'react';
import { styled } from '@/styled-system/jsx';

type Props = {
  text: string;
  children: React.ReactNode;
};

const Popover: React.FC<Props> = ({ text, children }) => {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const togglePopover = () => {
    setPopoverVisible((state) => !state);
  };

  const hidePopover = () => {
    setPopoverVisible(false);
  };

  const showPopover = () => {
    setPopoverVisible(true);
  };

  return (
    <styled.div
      position="relative"
      display="inline-block"
      onMouseEnter={showPopover}
      onMouseLeave={hidePopover}
    >
      <div onClick={togglePopover}>{children}</div>
      {popoverVisible && (
        <styled.div
          position="absolute"
          bottom="100%"
          left="0"
          w={['100%', '400px']}
          maxW="100vw"
          background="#fff"
          border="1px solid #ccc"
          padding="10px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
        >
          <styled.p fontSize={['x-small', 'sm']}>{text}</styled.p>
        </styled.div>
      )}
    </styled.div>
  );
};

export default Popover;
