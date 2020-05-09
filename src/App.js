import React from 'react';

const App = () => {
  return (
    <h1>
      <Hello/>
      <Hello/>
    </h1>
  );
}

const Hello = () => {
  return <div>Hello!</div>
}

export default App;
