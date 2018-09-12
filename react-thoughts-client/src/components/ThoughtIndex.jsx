import React from 'react';


function ThoughtIndex(props) {
  const { thoughts } = props;

  return (
    <div>
      <div>Thought Index</div>
      <ul>{
        thoughts.map(thought => {
          
          return(
          <li key={thought.id}>{thought.thought} {thought.category_id}
          <button 
            onClick={(ev) => {
              ev.preventDefault();
              props.handleEditThought(thought)}} >
              View Thought Detail
        </button>
          </li>
           )})}
      </ul>
      </div>
    )
}
export default ThoughtIndex;