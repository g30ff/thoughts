import React from 'react';


function CategoryIndex(props) {
  const { categories } = props;

  return (
    <div>
      <div>Category Index</div>
      <ul>{
        categories.map(category => {
          
          return(
          <li key={category.id}>{category.title} 
          <button 
            onClick={(ev) => {
              ev.preventDefault();
              props.selectedCategory(category)}} >
              View Category Detail
        </button>
          </li>
           )})}
      </ul>
      </div>
    )
}
export default CategoryIndex;