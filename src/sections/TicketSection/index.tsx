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
          strategy='afterInteractive'
          src='https://www.eventbrite.com.br/static/widgets/eb_widgets.js'
        ></Script>

        <Script
          type='text/javascript'
          id='eventbrite-widget-js'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={`
    var exampleCallback = function() {
        console.log('Encomenda finalizada!');
    };

    window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '695305255737',
        iframeContainerId: 'eventbrite-widget-container-695305255737',

        // Optional
        iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
        onOrderComplete: exampleCallback  // Method called when an order has successfully completed
    });
    `}
        ></Script>
      </Container>
    </Box>
  );
};

export default TicketSection;
