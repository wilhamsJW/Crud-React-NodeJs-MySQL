import React, { useState } from "react"
import './App.css'

function App() {

  const [values, setValues] = useState();
  console.log(values);

  // [value.target.name]: value.target.value, -> está passando os valores para 0 "values"
  // do useState() acima
  const handleChangeValues = (value) => {
    setValues(prevValue => ({
      // ...prevValue -> retornando o estado dos valores aprq ue o objeto possa ser criado
      // o bjeto com todos os valores do input, sem isso cria um objeto diferente com os valores 
      // e com ele cria um único objeto com todos os valores dos inputs
      ...prevValue,
      // Abaixo estou criando um objeto com a chave "value.target.name" e o valor " value.target.value"
      // dessa forma criará uma chave com o nome da var name dentro do inpute com o valor que há no input
      [value.target.name]: value.target.value,
    }))
  }

  const handleClickButton = () => {
    console.log('handleClickButton', values);
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--title">Loja de Jogos</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="preco"
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
