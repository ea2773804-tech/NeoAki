import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { doc, setDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { auth, db } from './firebase-config.js';

const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const userPanel = document.getElementById('user-panel');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const authStatus = document.getElementById('auth-status');
const logBox = document.getElementById('log');

function log(message) {
  logBox.textContent = `[${new Date().toLocaleTimeString('pt-BR')}] ${message}\n${logBox.textContent}`;
}

async function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value;

  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(credential.user, { displayName: name });

    await setDoc(doc(db, 'users', credential.user.uid), {
      uid: credential.user.uid,
      name,
      email,
      photoURL: '',
      followersCount: 0,
      followingCount: 0,
      createdAt: serverTimestamp(),
    });

    signupForm.reset();
    log(`Cadastro criado com sucesso para: ${email}`);
  } catch (error) {
    log(`Erro no cadastro: ${error.code} - ${error.message}`);
  }
}

async function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginForm.reset();
    log(`Login realizado com sucesso: ${email}`);
  } catch (error) {
    log(`Erro no login: ${error.code} - ${error.message}`);
  }
}

async function handleLogout() {
  try {
    await signOut(auth);
    log('Logout realizado.');
  } catch (error) {
    log(`Erro no logout: ${error.code} - ${error.message}`);
  }
}

function renderUserState(user) {
  if (user) {
    authStatus.textContent = 'Autenticado';
    userPanel.hidden = false;
    userName.textContent = user.displayName || 'Sem nome';
    userEmail.textContent = user.email || '-';
  } else {
    authStatus.textContent = 'Não autenticado';
    userPanel.hidden = true;
    userName.textContent = '-';
    userEmail.textContent = '-';
  }
}

signupForm.addEventListener('submit', handleSignup);
loginForm.addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', handleLogout);
onAuthStateChanged(auth, renderUserState);
