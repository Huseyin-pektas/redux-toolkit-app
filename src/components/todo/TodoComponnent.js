

import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ModalComponent from './ModelComponent'

const TodoComponnent = () => {
    const todos = useSelector((state) => state.todosReducer.todos)

    const dispacth = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <ModalComponent
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
            />
            <Button variant='success'
                onClick={() => handleShow(true)}
            >addTodo</Button>
            <h3>burası todo componentidir</h3>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Owner</th>
                        <th scope="col">title</th>
                        <th scope="col">yapıldı mı</th>
                        <th scope="col">tarih</th>
                        <th scope="col">hedef saati</th>
                        <th scope="col">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.owner}</td>
                                <td>{item.title}</td>
                                <td>
                                    <input type='checkbox'
                                        checked={item.isDone} />
                                </td>
                                <td>{item.date}</td>
                                <td>{item.targetHours}</td>
                                <td><Button variant='success'>Edit</Button></td>
                                <td><Button variant='danger'

                                >Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <pre>

                {JSON.stringify(todos, null, 2)}
            </pre>

        </div>
    )
}

export default TodoComponnent
