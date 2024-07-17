import React, { useState } from "react";

const TodoList = () => {
    const [inputValue, setInputValue] = useState(''); //Creamos un estado para almacenar el valor actual del Input.
    const [todos, setTodos] = useState([]); //Estado para almacenar el valor actual del array de tareas.

    const handleKeyDown = (e) => { //Creamos una función que maneja el evento(e) "keydown" para facilitar la legibilidad y lógica.
        if (e.key === 'Enter' && inputValue.trim() !== '') {  //Verificamos que la tecla presionada fue "Enter".//e.key: Nos dice la tecla que se presiona.//inputValue.trim() !== '': Nos aseguramos que el valor del input no sea un espacio vacio.
            setTodos([...todos, inputValue]); //actualizamos el estado "todos", agregando el nuevo valor de "inputValue" al final del arreglo existente.
            setInputValue(''); // Limpia el valor del input después de agregarlo a la lista
        }
    };

    const handleDelete = (index) => { //Creamos una función para eliminar los elementos de la lista de tareas(array).
        const updatedTodos = todos.filter((todo, idx) => idx !== index); //Utilizamos .filter() al cual le pasamos como parámetros la variable "todos" y el index de cada elemento.Si el indice del elemento actaul no es igual al indice del elemento que queremos eliminar, se queda.
        setTodos(updatedTodos); //actualizamos el estado "todos" con un nuevo array que excluye el elemento que fue eliminado. 
    };

    return (
        <div className="text-center container mt-5">
            <h1>TODO'S</h1>
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="What needs to be done?"
                value={inputValue} //Almacenamos lo que se escribe en el input en la variable "inputValue".
                onChange={(e) => setInputValue(e.target.value)} //Ejecutamos la función "setInputValue" cada vez que se activa el evento "onChange".//e.target.value: Contiene el nuevo valor del input una vez se ha escrito algo en él.
                onKeyDown={handleKeyDown} //Llamamos a la función "handleKeyDown"
            />
            {todos.map((todo, index) => ( //Iteramos sobre cada elemento del array todos y el indice de cada elemento.  key={index}: Referenciamos cada elemento con su indice.
                <div key={index} className="todo-list">
                    <p style={{ display: 'inline', marginRight: '10px' }}>{todo}</p>
                    <i
                        className="fa-solid fa-trash"
                        onClick={() => handleDelete(index)} //Ejecutamos la función "handleDelete" cada vez que ocurre el evento "onClick".
                        style={{ cursor: 'pointer', color: 'red' }}
                    >
                    </i>
                </div>
            ))}
        </div>
    );
};

export default TodoList;