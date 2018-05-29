import React from "react";

const List = ({items}) => {
const groceryList = items.map(({name, id}) => 
    <li className ="list-group-item" key={id}>{name}</li>);

    return (
     <ul className="list-group">
    {groceryList}
  </ul>
)
};

export default List;
