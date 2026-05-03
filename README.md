# NeoAki

Base inicial do site NeoAki com autenticação por e-mail/senha via Firebase Authentication.

## Estrutura

- `index.html`
- `style.css`
- `script.js`
- `firebase-config.js`

## Configurar Firebase Authentication

1. Acesse o Firebase Console.
2. Crie um projeto e um app Web.
3. Em **Authentication > Sign-in method**, habilite **Email/Password**.
4. Copie as credenciais do app Web.
5. Cole no arquivo `firebase-config.js` no objeto `firebaseConfig`.

## Como rodar

Abra `index.html` com servidor local (recomendado):

```bash
python3 -m http.server 5500
```

Acesse `http://localhost:5500/index.html`.

## Fluxo atual

- Clique em **Login** para modo de entrada.
- Clique em **Cadastro** para criar conta.
- Use o botão **Sair** após autenticar.
