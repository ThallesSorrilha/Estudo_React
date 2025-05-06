import React, { useEffect, useState } from "react";

const Home = () => {
    const[tarefas, setTarefas] = useState([]);

    useEffect(() => {
        let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefas(tarefas);
    },[]);

    return(
        <>
            <h1>Home</h1>
            <p>Bem vindo à sua página inicial</p>
            <a href="/calculadora">Calculadora</a> <br />
            <a href="/cadastro_tarefas">Cadastrar Tarefa</a>
            {tarefas.map(tarefa=>(
                <p key={tarefa.id}>{tarefa.descricao}</p>
            ))}
        </>
    )
}
export default Home;