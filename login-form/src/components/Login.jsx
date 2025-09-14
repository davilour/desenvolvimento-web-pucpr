import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const validarLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && senha === "123456") {
      setMensagem("Acessado com sucesso!");
    } else {
      setMensagem("Usuário ou senha incorretos!");
    }
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Login</h1>
      <div style={{ marginBottom: "10px", margin: "10px" }}>
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
    </div>
  );
}

export default Login;
