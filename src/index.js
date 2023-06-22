import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

// root.render(
//   <div>
//     <h1>Hello!!</h1>
//     <button>click</button>
//   </div>
//   );

// root.render(React.createElement('button', {onClick: () => console.log('cliccckkkkkkkk123')}, 'click on me'));

reportWebVitals();
