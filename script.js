import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { auth } from './firebase-config.js';

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const authForm = document.getElementById('auth-form');
const submitBtn = document.getElementById('submit-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const userState = document.getElementById('user-state');
const authMessage = document.getElementById('auth-message');

let mode = 'login';

function showMessage(text, type = 'success') {
  authMessage.textContent = text;
  authMessage.className = `auth-message ${type}`;
}

function setMode(newMode) {
  mode = newMode;
  submitBtn.textContent = mode === 'login' ? 'Entrar' : 'Cadastrar';
  nameInput.required = mode === 'signup';
  showMessage(`Modo atual: ${mode === 'login' ? 'Login' : 'Cadastro'}.`, 'success');
}

async function handleAuthSubmit(event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const name = nameInput.value.trim();

  try {
    if (mode === 'signup') {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
        await updateProfile(userCredential.user, { displayName: name });
      }
      showMessage('Cadastro realizado com sucesso!', 'success');
    } else {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage('Login realizado com sucesso!', 'success');
    }
    authForm.reset();
  } catch (error) {
    showMessage(`Erro: ${error.code}`, 'error');
  }
}

async function handleLogout() {
  try {
    await signOut(auth);
    showMessage('Logout realizado com sucesso.', 'success');
  } catch (error) {
    showMessage(`Erro ao sair: ${error.code}`, 'error');
  }
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const nome = user.displayName || 'Usuário';
    userState.textContent = `Autenticado como ${nome} (${user.email})`;
    logoutBtn.hidden = false;
  } else {
    userState.textContent = 'Não autenticado';
    logoutBtn.hidden = true;
  }
});

loginBtn.addEventListener('click', () => setMode('login'));
signupBtn.addEventListener('click', () => setMode('signup'));
logoutBtn.addEventListener('click', handleLogout);
authForm.addEventListener('submit', handleAuthSubmit);

setMode('login');
