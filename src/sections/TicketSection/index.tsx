'use client';
import Container from '@/components/Container';
import { Box } from '@/styled-system/jsx';
import Script from 'next/script';
import React from 'react';

const TicketSection: React.FC = () => {
  return (
    <Box bg='secondary' p='10'>
      <Container>
        <div id='eventbrite-widget-container-695305255737'></div>

        <Script
          strategy='beforeInteractive'
          src='https://www.eventbrite.com.br/static/widgets/eb_widgets.js'
        ></Script>

        <Script
          type='text/javascript'
          id='eventbrite-widget-js'
          strategy='lazyOnload'
          dangerouslySetInnerHTML={{
            __html: `
    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '695305255737',
        iframeContainerId: 'eventbrite-widget-container-695305255737',
        iframeContainerHeight: 625,
    });
    `,
          }}
        ></Script>
      </Container>
    </Box>
  );
};

export default TicketSection;
