import React from 'react';


function ListCategoriesThoughts(props) {
  const { categories } = props;
console.log(props);
  return (
    <div>
      <div>Category Index</div>
      <ul>{
        categories.map(category => {
          
          return(
        //    <li key={category.id}>{category.title} {category.thoughts}
          {/* <button 
            onClick={(ev) => {
              ev.preventDefault();
              props.selectedCategory(category)}} >
              View Category Detail
        </button> */}
        //   </li>
           )})
           }
      </ul>
      </div>
    )
}
export default ListCategoriesThoughts;