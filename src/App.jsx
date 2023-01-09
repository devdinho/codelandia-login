import "./App.css";
import Banner from "./components/Banner";
import FormContainer from "./components/FormContainer";
import FormWrapper from "./components/FormWrapper";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Banner />
      <FormContainer>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </FormContainer>
    </div>
  )
}

export default App
