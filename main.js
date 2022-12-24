import './css/style.css';
import './js/cards.js';
import javascriptLogo from '/img/logo/javascript.svg';
import { setupCounter } from './js/counter.js';

const date = (new Date().getFullYear())

document.querySelector('#sectionVite').innerHTML = `
  <div class='box-vite'>
    <div class="bottom-left">
    <div class="img-vite">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a></div>
    <div class="img-vite">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a></div>
    <div class="btn-counter">
      <button id="counter" type="button"></button>
      <button id="reset" type="button"></button>
    </div>
    </div>
    <div>
    <p>David Dettorre &copy; ${date}.</p>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'));
