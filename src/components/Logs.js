import React from 'react';

const Logs = props => (
  <>
    <h2>기록</h2>
    <ol>
      {props.logs.map((log, index) => (
        <li key={`${log}_${index}`}>{log}</li>
      ))}
    </ol>
  </>
);

export default Logs;
