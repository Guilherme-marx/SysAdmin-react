import React from "react";
import { useState } from "react";

const Tabela = () => {
  const [nome, setNome] = useState("");
  const [nomePai, setNomePai] = useState("");
  const [nomeMae, setNomeMae] = useState("");
  
  const handleChange = (e) => {
    
    const {nome, value} = e.target;
    setNome((prev) => {
    return{...prev, [nome]: value };
    })
    const {nomePai, value2} = e.target;
    setNome((prev) => {
    return{...prev, [nomePai]: value2 };
    })
    const {nomeMae, value3} = e.target;
    setNome((prev) => {
    return{...prev, [nomeMae]: value3 };
    })
}



  return (
    <section>
      <label>
        seu nome
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <label>
        Nome do Pai
        <input value2={nomePai} onChange={(e) => setNomePai(e.target.value2)} />
      </label>
      <label>
        Nome da Mae
        <input value3={nomeMae} onChange={(e) => setNomeMae(e.target.value3)}/>
      </label>
    </section>
  );
};

export default Tabela;
