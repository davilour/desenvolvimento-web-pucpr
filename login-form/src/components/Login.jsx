import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const validarLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (error) {
      setMensagem("Usuário não cadastrado ou senha incorreta!");
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <div>
        <button onClick={validarLogin}>Acessar</button>
      </div>
      <p>{mensagem}</p>

      <button onClick={() => navigate("/cadastro")}>Ir para Cadastro</button>
    </div>
  );
}

export default Login;
