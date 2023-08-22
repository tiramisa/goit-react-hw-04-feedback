import React from 'react';
import Feedback from './feedback/feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        marginRight: '10px',
      }}
    > <Feedback title="Please leave feedback"/>
    </div>
  );
};
