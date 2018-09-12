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
                        <div 
                            className="thought-name"
                            // onClick={() => props.handleThoughtClick(thought.category_id, thought.id)}
                            >
                                {/* {category.title}  */}
                            </div>
                            {category.thoughts.length > 0} <h1>{category.title}</h1>
                            Number of Thoughts: {category.thoughts.length}

                            {category.thoughts.map(thought => {
                               return(
                                <div key={thought.id} className="thoughts-container">
                                <div className="thought">
                                Thought: {thought.thought}
                                </div>
                                <button
                            className="thought-edit"
                            onClick={() => props.handleEditThought(thought)}>
                                Edit Thought
                        </button>
                        <button
                            className="thought-delete"
                            onClick={() => {
                                props.handleDeleteClick(thought);
                            }}>
                            Delete Thought
                        </button>
                                </div>
                            )
                        })
                        }

                    </div>
                );
            })}
        </div>
    );

}
export default CategoryThoughts;