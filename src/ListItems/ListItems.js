import React from 'react'

function ListItems({listItems,handledelete}) {

    return (
        <div>
        { listItems.map((el,id) => <ul key={id}>
             <li>{el.item}</li>
             <button onClick={() => {handledelete(el.id)}}>Delete</button>
         </ul> )}
        </div>
    )
}

export default ListItems
