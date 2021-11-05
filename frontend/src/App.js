import React, { useState, useEffect } from "react"
import './App.css'
import Axios from 'axios'
import Card from "./componentes/cards";

function App() {

  const [values, setValues] = useState();
  // const [listGames, setListGames] = useState();
  var listGames = []
  listGames = [
    {
      'id': '01',
      'name': 'Paulo',
      'price': '87,89',
      'category': 'base'
    },
    {
      'id': '02',
      'name': 'Wilhams',
      'price': '123,56',
      'category': 'Principal'
    },
    {
      'id': '03',
      'name': 'ANtonua',
      'price': '0,94',
      'category': 'Juvenil'
    },

  ]


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
    Axios.post("http://localhost:3023/register", {
      name: values.name,
      price: values.price,
      category: values.category
    }).then((res) => {
      console.log(res);
    })
  }

  // A reuisição não está funcionando por conta de problemas com Mysql e minha máquina
  // useEffect(() => {
  //   Axios.get("http://localhost:3023/getCards")
  // }, []).then((res) => {
  //   // if (res == undefined) {
  //   //   // setListGames(res.data)
  //   //   return
  //   // }

  //   console.log('res');
  // })

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
          name="price"
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

      {typeof listGames != 'undefined' && listGames.map((value) => {
        return <Card
          key={value.id}
          // listCard={listGames}
          name={value.name}
          // id={values.idGames}
          price={value.price}
          category={value.category}
          id={value.id}
        >
        </Card>
      })}


    </div>
  );

}

export default App;
