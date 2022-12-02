import {useState} from 'react';
import Items from './Items'
import { v4 as uuidv4 } from 'uuid';


export default function Forms(){
    const [dataArr,setDataArr] = useState([{
        txt:'rakoto', id:uuidv4()
    }])
    const [stateInput,setStateInput] = useState('')

    const [updatedinput,setUpdatedInput] = useState()

    const addItem = (e) => {
        e.preventDefault()
        const newArr = [...dataArr]

        const newTodo ={}
        newTodo.txt = stateInput
        newTodo.id =uuidv4()

        newArr.push(newTodo)
        setDataArr(newArr)
        setStateInput('')
    }

    const linkedInput = (e)=>{
        setStateInput(e)
    }

    const deleteItem = (id)=>{
        const filteredState = dataArr.filter(item => {
            return item.id !== id
        })
        setDataArr(filteredState)
    }

    const updateItem = (val, id)=>{
        setStateInput(val)
        setUpdatedInput([{val,id}])
    }
    return (
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit = {(e)=> addItem(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">
                    todo
                </label>
                <input value={stateInput} onChange = {e => linkedInput(e.target.value)} type="text" className="form-control" id="todo" />
                <button  className="mt-2 btn btn-primary d-block">
                    Send
                </button>

            </form>
            <h2>toods</h2>
            <ul className="list-group">
                {dataArr.map((value)=>{
                    return (
                        <Items up={updatedinput} txt={value.txt} delFunc ={deleteItem} updateFunc={updateItem} key = {value.id}  id = {value.id} />
                            )
                        }
                    )

                }
            </ul>
        </div>
    )
}