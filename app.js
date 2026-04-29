import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCv-84pYoBuUpQ8triEpboEhzxLWwverQA",
  authDomain: "neoaki.firebaseapp.com",
  projectId: "neoaki",
  storageBucket: "neoaki.firebasestorage.app",
  messagingSenderId: "421651948414",
  appId: "1:421651948414:web:a1e45b92a55588ed44492f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.postar = async function () {
  const texto = document.getElementById("postInput").value;

  await addDoc(collection(db, "posts"), {
    texto: texto,
    data: new Date()
  });

  carregarPosts();
};

async function carregarPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    feed.innerHTML += `<p>${doc.data().texto}</p>`;
  });
}

carregarPosts();
