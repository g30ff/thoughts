const BASE_URL=process.env.REACT_APP_API_URL || 'http://localhost:3000'

function fetchCategories() {
   return fetch('http://localhost:3000' + '/categories')
   .then(resp => resp.json())
   .catch(err => {
    throw Error(err);
  });
}

function saveCategory(category) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(BASE_URL + '/categories', opts)
    .then(resp => resp.json());
}

// edit category
function updateCategory(category) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(category),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/categories/${category.category_id}`, opts)
}
function deleteCategory(category) {
    const opts = {
        method: 'DELETE',
        body: JSON.stringify(category),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/categories/${category.category_id}`, opts);
}
// function updatePlanet(planet) {
//     const opts = {
//       method: 'PUT',
//       body: JSON.stringify(planet),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };
//      return fetch(`${BASE_URL}/planets/${planet.planet_id}`, opts)
//       .then(resp => resp.json());
//   }
 
export { fetchCategories, saveCategory, updateCategory, deleteCategory }