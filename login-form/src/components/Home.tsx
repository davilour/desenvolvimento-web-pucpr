import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

interface UserData {
  uid: string;
  nome: string | null;
  email: string | null;
}

function Principal() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUserData({
          uid: user.uid,
          nome: user.displayName,
          email: user.email,
        });
      } else {
        navigate("/"); 
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (!userData) {
    return <p>Carregando...</p>;
  }

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Bem-vindo, {userData.nome}!</h1>
      <p>E-mail: {userData.email}</p>
      <p>Data de Nascimento: {userData.uid}</p>
    </div>
  );
}

export default Principal;
