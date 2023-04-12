import React from "react";
import { useState } from "react";
import "../../App.css"

const initialValue = {
nome:'',
nomePai:'',
nomeMae:'',
}

const Tabela = () => {
  const [value, setValue] = useState(initialValue);
  
  
  function onChange (ev) {
    const { nome, value } = ev.target;
}

  return (
    <section className="box2">
      <div name="nome" className="formulario">
      <label>
        seu nome
        <input id="" type="text" name="nomePai" onChange={onChange} />
      </label>
      <label>
        Nome do Pai
        <input id="" type="text" name="nomeMae" onChange={onChange} />
      </label>
      <label>
        Nome da Mae
        <input id="" type="text" name="nomeMae" onChange={onChange}/>
      </label>
      <label>
        Data de nascimento
      <input type='date' />
      </label>
      <button type="submit">confirma</button>
      </div>
    </section>
  );
};

export default Tabela;
