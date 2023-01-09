import GoogleLogo from '../GoogleLogo';
import "./style.css";

const Form = () => {
  return (
    <form action="" onSubmit={ e => e.preventDefault() }>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="codelandia@gmail.com"/>
      <label htmlFor="senha">Senha</label>
      <input type="text" id="senha" placeholder="*********"/>
      <div className="control-wrapper">
        <input type="checkbox" id="radio"></input>
        <label htmlFor="radio">Lembre de mim</label>
        <a href="#">Esqueceu de mim?</a>
      </div>
      <button type="submit">Entrar</button>
      <button>
        <GoogleLogo />
        Ou faça login com o Google
      </button>
    </form>
  )
};

export default Form;