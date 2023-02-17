import React, { useState, useEffect } from 'react';

//Components
import Card from '../../components/Card';

//Styles
import './style.css';

export default function Home() {
    //Estado: ['variavel', 'função_atribuir_valor'] = useState();
    const [studentName, setStudentName] = useState();
    const [students, setStudents] = useState([]);

    const [user, setUser] = useState({ name: '', avatar: ''});

    function handleAddStudent() {
        //Cria novo objeto
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString('pt-br', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })
        }
        
        //Insere o novo objeto e recupera o conteúdo atual do estado
        setStudents(previousState => [...previousState, newStudent])
    }
    
    //useEffect(() => {}, []); // excutado automaticamente ao renderizar a interface
    //[] = Array de dependencias: Quando vazio, executa o useEffect uma única vez
    /*useEffect(() => {
        const apiUrl = 'https://api.github.com/users/pedrovpdias';
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setUser({
                    name: data.name,
                    avatar: data.avatar_url
                });
            })
            .catch(error => console.error(error));
    }, []);*/

    //Async useEffect
    useEffect(() => {
        const apiUrl = 'https://api.github.com/users/pedrovpdias';

        async function fetchData() {
            const response = await fetch(apiUrl);
            const data = await response.json();

            setUser({
                name: data.name,
                avatar: data.avatar_url
            });
        }

        fetchData();
    }, []);
    
    return (
        //Fragment: <></>
        <div className="container">
            <header>
                <h1>
                    Lista de Presença
                </h1>

                <div>
                    <strong>
                        {user.name}
                    </strong>
                    <img 
                        src={user.avatar}
                        alt="Foto de perfil"
                    />
                </div>
            </header>

            <input 
                type="text" 
                placeholder="Nome:"
                onChange={event => setStudentName(event.target.value)}
            />
            <button 
                type="button" 
                onClick={handleAddStudent}
                autoFocus
            >
                Adicionar
            </button>

            {
                students.map(student => {
                    return (
                        <Card
                            key={Math.random()} //Key prop: Obrigatório
                            name={student.name} 
                            time={student.time} 
                        />
                    );
                })               
            }
        </div>
    )
}