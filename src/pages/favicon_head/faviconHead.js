import React, { useEffect } from 'react';

function FaviconHead(){
    return(
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#006b2a"/>
            <meta name="msapplication-TileColor" content="#006b2a"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
    );
}
export default FaviconHead;