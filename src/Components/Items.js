import {useState} from 'react'

export default function Items(props) {
  const [checkedState, setCheckedState] = useState(false)
  const handleChange = () => { 
    setCheckedState(!checkedState)
    if (checkedState === false)
      {props.updateFunc(props.txt, props.id)}
    else
    {
      props.updateFunc('', null)
    }
  };
  return (
    <div>
        <li className="border justify-content-between align-items-center d-flex p-2 m-2">
            <div className="p-3">
                <input onChange={handleChange} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                {props.txt}
            </div>
            <div>
              <button onClick={()=>props.updateFunc(props.txt, props.id)} className="btn btn-primary p-2 m-2 h-50">
                  Update
              </button>
              <button onClick ={()=>props.delFunc(props.id)} className="btn btn-danger p-2 h-50">
                  Delete
              </button>

            </div>
        </li>

    </div>
  )
}
