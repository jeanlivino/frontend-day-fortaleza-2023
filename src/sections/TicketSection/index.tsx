'use client';
import Container from '@/components/Container';
import { Box, styled } from '@/styled-system/jsx';
import Script from 'next/script';
import React from 'react';

const TicketSection: React.FC = () => {
  return (
    <Box bg='secondary' py='10' px={['0', '10']}>
      <Container>
        <styled.h2
          color='primary'
          fontSize='2xl'
          fontWeight='bold'
          textAlign='center'
          mb='4'
        >
          Inscrições
        </styled.h2>
        <Box
          minH='200px'
          bg='url(/images/loading.gif) white'
          backgroundPosition='center'
          backgroundRepeat='no-repeat'
          bgSize='80px 80px'
        >
          {/* <styled.p color='primary' mt='4' fontSize='md' textAlign='center'>
          As inscrições irão iniciar em breve!
        </styled.p> */}
          <div id='eventbrite-widget-container-699928714627'></div>

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
        eventId: '699928714627',
        iframeContainerId: 'eventbrite-widget-container-699928714627',
        iframeContainerHeight: 625,
    });
    `,
            }}
          ></Script>
        </Box>
      </Container>
    </Box>
  );
};

export default TicketSection;
