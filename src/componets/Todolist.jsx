import React, { useState } from 'react'

const Todolist = (props) => {
    console.log("Todolist", props);
    const [inputValue, setInputValue] = useState("");
    console.log(inputValue);
    return (
        <>
            <h1>Todo List</h1>
            <section>
                <div className="width-center">
                    <div className="card">
                        <div className="row side-elements">
                            <label>Add Todo</label>
                            <input
                                value={ inputValue }
                                onChange={ (e) => setInputValue(e.target.value) }
                                type="text"
                                placeholder='Enter a todo' />
                            <button
                                onClick={ () => {
                                    props.addTodoHandler(inputValue);
                                    setInputValue("");
                                } }
                            >Add Task</button>
                        </div>
                    </div>
                    {
                        props.todoData.map((ele, index) => {
                            return (
                                <div key={ index } className="card">
                                    <div className="flex-betwin">
                                        <label>{ index + 1 }</label>
                                        <label>{ ele }</label>
                                        <button className='warning'>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Todolist
