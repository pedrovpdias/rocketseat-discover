import React, { useState } from 'react';

//Components
import Card from '../../components/Card';

//Styles
import './style.css';

export default function Home() {
    //Estado: ['variavel', 'função_atribuir_valor'] = useState();
    const [studentName, setStudentName] = useState();
    
    return (
        //Fragment: <></>
        <div className="container">
            <h1>
                Lista de Presença/ Nome: {studentName}
            </h1>

            <input 
                type="text" 
                placeholder="Nome:"
                onChange={event => setStudentName(event.target.value)}
            />
            <button type="button">
                Adicionar
            </button>

            <Card name="Pedro" time="10:17:07" />
            <Card name="José" time="10:25:21" />
            <Card name="Maria Joana" time="16:20:00" />
        </div>
    )
}