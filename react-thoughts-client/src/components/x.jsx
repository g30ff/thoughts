import React from 'react';

function CategoryThoughts(props) {
   return (
       <div>
           {/* short circuit logic only renders the header if the
           categories array's length is not zero. If the left side of the && operator
           is false, we never parse the right side */}
           {/* {!! props.categories.length && <h1>All {props.category.title} categories:</h1>} */}
           
           {props.categories.map(category => {
               return (
                   <div key={category.id} className="thought-list">
                       <div className="thought-name">
                       {category.thoughts.length > 0} <h2>{category.title} Number of Thoughts: {category.thoughts.length}</h2>
                       </div>
                       <div className="thoughts-container">

                           {category.thoughts.map(thought => {

                              return (
                                  
                                       <div key={thought.id} className="thought">
                                       {thought.thought}
                                       <button
                                       className="thought-edit"
                                       onClick={ () => props.handleEditThought(thought) }>Edit Thought
                                       </button>
                                       <button
                                       className="thought-delete"
                                       onClick={ () => props.handleDeleteClick(thought) }>Delete Thought
                                       </button>
                                       </div>         
                               );
                           })}
                           </div>
                   </div>
               );
           })}
       </div>
   );

}
export default CategoryThoughts;
