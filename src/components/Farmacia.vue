<template>
  <div class="farmacia">
    <h1>Farmacia</h1>
    <p>almacen de la farmacia</p>
    <form @submit.prevent="addMedicamento">
      <input v-model="nuevoMedicamento" placeholder="Nuevo medicamento" />
      <button type="submit">agregar medicamento</button>
    </form>
    <ul>
      <li v-for="medicamento in farmacia" :key="medicamento.id">
    {{ medicamento.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
export default {
  data() {
    return {
      nuevoMedicamento: "",
      farmacia: [],
    };
  },
  mounted() {
    // Cargar tareas existentes al montar el componente
    const db = getFirestore(firebaseApp);
    const farmaciaRef = collection(db, "farmacia");
    onSnapshot(farmaciaRef, (snapshot) => {
      this.farmacia = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  },

  methods: {
    async addMedicamento() {
      if (this.nuevoMedicamento.trim() === "") return;
      const db = getFirestore(firebaseApp);
      const farmaciaRef = collection(db, "farmacia");
      await addDoc(farmaciaRef, { nombre: this.nuevoMedicamento });
      this.nuevoMedicamento = ""; // Limpiar el campo aquí de agregar
    },
  },
};
</script>
