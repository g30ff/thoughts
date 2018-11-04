import React from 'react';

function CategoryThoughts(props) {
   return (
         <section>
           {/* short circuit logic only renders the header if the
           categories array's length is not zero. If the left side of the && operator
           is false, we never parse the right side */}
           {/* {!! props.categories.length && <h1>All {props.category.title} categories:</h1>} */}
           
           {props.categories.map(category => {
               return (
                   <div key={category.id} className="thoughts-list">
                       <div className="thought-category">
                       {category.thoughts.length > 0} <h2>Category: {category.title}</h2>
                       <h4>Number of Thoughts: {category.thoughts.length}</h4>
                       </div>
                       <div className="thoughts-container">
                           {category.thoughts.map(thought => {
                              return (
                                  
                                       <div key={thought.id} className="thought force-url-wrap">
                                       {thought.thought}
                                       <br/>
                                       <button
                                       className="thought-edit"
                                       onClick={ () => props.handleEditThought(thought) }> Edit 
                                       </button>
                                       <button
                                       className="thought-delete"
                                       onClick={ () => props.handleDeleteClick(thought) }> Delete 
                                       </button>
                                       </div>         
                               );
                           })}
                           </div>
                   </div>
               );
           })}
       </section>
   );

}
export default CategoryThoughts;