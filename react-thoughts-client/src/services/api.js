const BASE_URL=process.env.REACT_APP_API_URL || 'http://localhost:3000'
// Category endpoints

function fetchThoughts(categoryId) {
    return fetch(`${BASE_URL}/categories/${categoryId}/thoughts`)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
}
function fetchCategories() {
   return fetch(`${BASE_URL}/categories`)
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

// End Category Endpoints


// Thoughts Endpoints
function fetchThoughts() {
    return fetch('http://localhost:3000' + '/thoughts')
    .then(resp => resp.json())
    .catch(err => {
     throw Error(err);
   });
 }

 function saveThought(thought) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(thought),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch(BASE_URL + `/categories/${thought.category_id}/thoughts`, opts)
    .then(resp => resp.json());
}
function updateThought(thought) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(thought),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/categories/${thought.category_id}/thoughts/${thought.id}`, opts)
}
// End Thoughts Endpoints

 
export { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts, saveThought, updateThought }