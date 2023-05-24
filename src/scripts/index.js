import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  const mainContent = document.querySelector('#mainContent');
  const skipContent = document.querySelector('.skip-content');
  skipContent.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.scrollIntoView({ behavior: 'smooth' });
    skipContent.blur();
  });
  await swRegister();
});
