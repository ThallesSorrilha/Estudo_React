import React, { useState } from "react";
import "./cadastro_tarefas.css"

const Cadastro_Tarefas = () => {

    const [tarefa, setTarefa] = useState({id:0, descricao:'', data:''});

    const atualizarValor = (event) => {
        setTarefa({...tarefa, [event.target.id]:event.target.value});
    }

    const cadastrar = () => {

        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefa({...tarefa,id:tarefas.length});

        tarefas.push(tarefa);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));

    }

    return (
        <div>

          Descrição
          <input type="text" id="descricao" value={tarefa.descricao} onChange={atualizarValor}/>
          <br></br>
          <br></br>
          
          Data
          <input type="text" id="data" value={tarefa.data} onChange={atualizarValor} />
          <br></br>
          <br></br>

          <button onClick={cadastrar}>Salvar</button>
          <br></br>
          <br></br>

          <a href="/">Voltar</a>
        </div>
      );
}
export default Cadastro_Tarefas;