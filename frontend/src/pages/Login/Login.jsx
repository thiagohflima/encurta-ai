import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://avatars.githubusercontent.com/u/10931952?v=4"></img>

        <input type="text" name="username" placeholder="Usuário" required />

        <input type="password" name="password" placeholder="Senha" required />

        <button>Entrar</button>

        <div className="login__dica">
          A fim de testes, use <span>teste / teste</span> para entrar.
        </div>
      </div>
    </div>
  );
}
