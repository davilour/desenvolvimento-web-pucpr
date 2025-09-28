import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const navigate = useNavigate();

  const cadastrar = async () => {

     if (!nome || !sobrenome || !dataNascimento || !email || !senha) {
      alert("Por favor, preencha todos os campos antes de cadastrar.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log(user)

      await setDoc(doc(db, "usuarios", user.uid), {
        uid: user.uid,
        nome: nome.trim(),
        sobrenome: sobrenome.trim(),
        dataNascimento,
        email: email.trim()
      });

      setEmail("");
      setSenha("");
      setNome("");
      setSobrenome("");
      setDataNascimento("");

      alert("Usuario criado com sucesso!")
      navigate("/principal");
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
      navigate("/");
    }
  };


  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Cadastro</h1>
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <br />
      <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <br />
      <input type="date" onChange={(e) => setDataNascimento(e.target.value)} />
      <br />
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <br />
      <button onClick={cadastrar}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
