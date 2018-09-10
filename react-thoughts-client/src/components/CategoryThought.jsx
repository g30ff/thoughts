import React from 'react';

function CategoryThoughts(props) {
    return (
        <div>
            {/* short circuit logic only renders the header if the
            guitar array's length is not zero. If the left side of the && operator
            is false, we never parse the right side */}
            {!! props.thoughts.length && <h1>All {props.category.title}Thoughts:</h1>}
             
            {props.thoughts.map(thought => {
                return (

                    <div key={thought.id} className="guitar-list">
                        <div 
                            className="guitar-name"
                            // onClick={() => props.handleGuitarClick(guitar.brand_id, guitar.id)}
                            >
                                {thought.thought} 
                            </div>
                        {/* <button
                            className="guitar-delete"
                            onClick={() => {
                                props.handleDeleteClick(props.brandId, guitar.id, props.brandName);
                            }}>
                            X
                        </button>
                        <button
                            className="guitar-edit"
                            onClick={() => props.handleEditGuitar(guitar, props.brandName)}>
                                Edit Guitar
                        </button> */}
                    </div>
                );
            })}
        </div>
    );

}
export default CategoryThoughts;