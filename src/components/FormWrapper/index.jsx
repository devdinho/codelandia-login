import "./style.css";

const FormWrapper = ({ children }) => {
  return (
    <div className="form-wrapper">
      <p>Bem vindo de volta</p>
      <h1>Faça login na sua conta</h1>
      { children }
      <span>
        Não tem uma conta?
        <a href="#">Cadastre-se</a>
      </span>
    </div>
  )
};

export default FormWrapper;