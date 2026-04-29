import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
  // você vai colocar depois
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
