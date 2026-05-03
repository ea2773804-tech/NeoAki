import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';

// Cole aqui as credenciais do seu app Firebase (Projeto > Configurações > Seus apps)
const firebaseConfig = {
  apiKey: 'COLE_AQUI_SUA_API_KEY',
  authDomain: 'COLE_AQUI_SEU_AUTH_DOMAIN',
  projectId: 'COLE_AQUI_SEU_PROJECT_ID',
  appId: 'COLE_AQUI_SEU_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
