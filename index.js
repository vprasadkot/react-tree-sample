import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Tree from './Tree';
import './style.css';

function MyComoonent() {
  const [name, setName] = useState(''); // State hook
  const [selectedList, setSelectedList] = useState([]);
  
  const dataInput = [{
    id: 1,
    name: "Venkat",
    children:[]
  },
  {
    id: 2,
    name: "Kota",
    children: [{
      id: 11,
      name: "Ayaan"
    },
    {
      id: 12,
      name: "Jamie",
      children: [{
        id: 11,
        name: "Ayaan"
      },
      {
        id: 12,
        name: "Jamie"
      }]
    }]
  },
  {
    id: 3,
    name: "Prasad",
    children:[]
  }];
  return(
    <div>
      <Hello name={name}></Hello>
      <input value={name} onChange={ ()=> setName(event.target.value) } />
      <Tree value={dataInput} onChange={ (d)=> {
        console.log("Data:", d);setSelectedList(d);
        }
      }/>
      <pre>
        { selectedList.length }
      </pre>
    </div>
  )
}

render(<MyComoonent />, document.getElementById('root'));
