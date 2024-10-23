import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // if you have styles to apply
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const [displayText, setDisplayText] = useState('IT IS FREE FOR CUSTOMERS');
const [bgColor, setBgColor] = useState('bg-green-900');
const [textColor, setTextColor] = useState('text-purple-400');

const texts = [
  'IT IS FREE FOR CUSTOMERS',
  'TELL US ABOUT YOUR FAVOURITE TRADE',
  'FINDS PRODUCT AND SERVICES FAST',
  'HELP US FIND BETTER TRADES',
  'LOOK AROUND THE VIRTUAL HOUSE',
];
