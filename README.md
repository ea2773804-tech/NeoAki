# NeoAki

Estrutura inicial da rede social **NeoAki** usando:
- Frontend: HTML + CSS + JavaScript puro
- Backend: Firebase Authentication, Firestore e Storage

## O que já está implementado

- Tela principal (`index.html`) com:
  - cadastro (signup)
  - login
  - logout
  - exibição do usuário logado
- Inicialização do Firebase com SDK modular (`firebase-config.js`)
- Sistema de autenticação funcional com email/senha (`auth.js`)
- Criação automática do documento do usuário no Firestore após cadastro

## Como configurar o Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Crie um projeto.
3. Ative **Authentication > Sign-in method > Email/Password**.
4. Crie um app Web no projeto.
5. Copie o objeto de configuração e cole no arquivo `firebase-config.js`, substituindo:

```js
const firebaseConfig = {
  apiKey: 'COLE_AQUI_SUA_API_KEY',
  authDomain: 'COLE_AQUI_SEU_AUTH_DOMAIN',
  projectId: 'COLE_AQUI_SEU_PROJECT_ID',
  storageBucket: 'COLE_AQUI_SEU_STORAGE_BUCKET',
  messagingSenderId: 'COLE_AQUI_SEU_MESSAGING_SENDER_ID',
  appId: 'COLE_AQUI_SEU_APP_ID',
};
```

## Regras recomendadas para teste (Firestore)

Durante desenvolvimento inicial, você pode usar regras temporárias para testar:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Como rodar o projeto

Como usamos módulos ES (`type="module"`), rode com um servidor local (não abra direto no `file://`).

Opção 1 (Python):

```bash
python3 -m http.server 5500
```

Depois acesse:
- `http://localhost:5500/index.html`

## Próximos passos sugeridos

- Criar feed de posts (texto/imagem/vídeo) em coleção `posts`
- Upload de imagem/vídeo no Firebase Storage
- Timeline ordenada por `createdAt` desc
- Sistema de seguir/deixar de seguir e curtidas
