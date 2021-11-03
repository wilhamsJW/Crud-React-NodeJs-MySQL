import React, { useState } from "react"
import './App.css'

function App() {

  const [values, setValues] = useState();
  // console.log(setValues);

  // [value.target.name]: value.target.value, -> está passando os valores para 0 "values"
  // do useState() acima
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log('handleClickButton', values);
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Gerenciamento de Usuários</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="categoria"
          className="register--input"
          onChange={handleChangeValues}
        />
        <button className="register--button" onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );

}

export default App;
