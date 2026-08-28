const Login = (props) => {
  return (
    <section className="login">
      <h2>Entrar na sua conta</h2>
      <p>Digite o usuario e a senha para ver o conteudo da sua camera.</p>

      <div className="login-form">
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          placeholder="Digite seu usuario"
          pattern="opticode"
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          pattern="1234"
          required
        />

        <p className="login-erro">Usuario ou senha invalidos.</p>
      </div>

      <p className="login-dica">
        Usuario de teste: <strong>{props.usuario}</strong> | Senha:{' '}
        <strong>{props.senha}</strong>
      </p>
    </section>
  )
}

export default Login
