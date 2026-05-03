import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js';

/**
 * IMPORTANTE:
 * Substitua os valores abaixo pelas credenciais reais do seu projeto Firebase.
 * Você encontra este objeto em:
 * Firebase Console > Configurações do Projeto > Seus apps > Configuração do SDK.
 */
const firebaseConfig = {
  apiKey: 'COLE_AQUI_SUA_API_KEY',
  authDomain: 'COLE_AQUI_SEU_AUTH_DOMAIN',
  projectId: 'COLE_AQUI_SEU_PROJECT_ID',
  storageBucket: 'COLE_AQUI_SEU_STORAGE_BUCKET',
  messagingSenderId: 'COLE_AQUI_SEU_MESSAGING_SENDER_ID',
  appId: 'COLE_AQUI_SEU_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
