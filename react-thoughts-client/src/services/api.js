const BASE_URL=process.env.REACT_APP_API_URL || 'http://localhost:3000'

// Category endpoints

function fetchThoughts(categoryId) {
    const jwt = localStorage.getItem("jwt");
    const opts = { 
    headers: { 
      "Authorization": `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }
    return fetch(`${BASE_URL}/categories/${categoryId}/thoughts`, opts)
    .then(resp => resp.json())
    .catch(err => {
        throw Error(err);
    });
}
function fetchCategories() {
    const jwt = localStorage.getItem("jwt");
    const opts = { 
    headers: { 
      "Authorization": `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }
   return fetch(`${BASE_URL}/categories`, opts)
   .then(resp => resp.json())
   .catch(err => {
    throw Error(err);
  });
}

function saveCategory(category) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'POST',
      body: JSON.stringify(category),
      headers: { 
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      }
    };
    return fetch(BASE_URL + '/categories', opts)
    .then(resp => resp.json());
}

// edit category
function updateCategory(category) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'PUT',
      body: JSON.stringify(category),
      headers: { 
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      }
    };
    return fetch(`${BASE_URL}/categories/${category.category_id}`, opts)
}
function deleteCategory(category) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'DELETE',
      body: JSON.stringify(category),
      headers: {"Authorization": `Bearer ${jwt}`},
    };
    return fetch(`${BASE_URL}/categories/${category.category_id}`, opts);
}

// End Category Endpoints


// Thoughts Endpoints
function fetchThoughts() {
    const jwt = localStorage.getItem("jwt");
    const opts = { 
    headers: { 
      "Authorization": `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  }

    return fetch(`${BASE_URL}/thoughts`, opts)
    .then(resp => resp.json())
    .catch(err => {
     throw Error(err);
   });
 }

function saveThought(thought) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'POST',
      body: JSON.stringify(thought),
      headers: { 
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      }
    };

    return fetch(BASE_URL + `/categories/${thought.category_id}/thoughts`, opts)
    .then(resp => resp.json());
}
function updateThought(thought) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'PUT',
      body: JSON.stringify(thought),
      headers: { 
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json', 
        'Accept': 'application/json' 
      }
    };
    return fetch(`${BASE_URL}/categories/${thought.category_id}/thoughts/${thought.id}`, opts)
}
function deleteThought(thought) {
    const jwt = localStorage.getItem("jwt");
    const opts = {
      method: 'DELETE',
      body: JSON.stringify(thought),
      headers: {"Authorization": `Bearer ${jwt}`},
    };
    return fetch(`${BASE_URL}/thoughts/${thought.id}`, opts);
}
// End Thoughts Endpoints

 
export { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts, saveThought, updateThought, deleteThought }