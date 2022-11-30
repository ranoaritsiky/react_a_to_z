import React from 'react'

export default function Items(props) {
  return (
    <div>
        <li className="border justify-content-between align-items-center d-flex p-2 m-2">
            <div className="p-3">
                {props.txt}
            </div>
            <div>
              <button className="btn btn-primary p-2 m-2 h-50">
                  update
              </button>
              <button onClick ={()=>props.delFunc(props.id)} className="btn btn-danger p-2 h-50">
                  Delete
              </button>

            </div>
        </li>

    </div>
  )
}
