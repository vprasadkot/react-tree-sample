import React, {useState, useEffect} from 'react';

const Tree = ({value, onChange}) => {
  // const onChange = (data)=> {
  //   console.log(data);
  // }
  
  const [items, setItems] = useState(value);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(()=> {
    onChange(selectedList);
  })

  const updated_items = items.map((item, key) => 
    {
      const [node, setNode] = useState(item);
      return (
      <li key={ node.id }>
        <input type="checkbox" checked={node.selected} value={node.id} onChange={()=> {
          setNode({
            ...node,
            selected: !node.selected
          });
          if(!node.selected) {
              console.log(selectedList);
              selectedList.push(node);
              setSelectedList(selectedList);
              console.log(selectedList);
            } else {
              selectedList = selectedList.filter((i) => i.id !== node.id);
              setSelectedList(selectedList);
            }
        }} />
        <button className={ node.OpenFlag? "open":""}  onClick={ 
          ()=> setNode( {
            ...node,
            OpenFlag: !node.OpenFlag
            })//; setOpenFlag(!OpenFlag)
          }></button>
        { node.name }
        {
          node.children && node.OpenFlag ? 
          <Tree value={node.children} />: null
        }
      </li>)
    }
  
  );
  
  return (
    <ul>
      {
        updated_items
      }
    </ul>
  )
}
export default Tree;