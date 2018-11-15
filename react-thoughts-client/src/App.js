import React, { Component } from 'react';
import Header from './components/Header';
import CategoryIndex from './components/CategoryIndex';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';
import ThoughtIndex from './components/ThoughtIndex';
import CategoryThought from './components/CategoryThought';
// import ListCategoriesThoughts from './components/ListCategoriesThoughts';
import CreateThought from './components/CreateThought';
import EditThought from './components/EditThought';
import LoginForm from './components/LoginForm';

import './App.css';
import './thoughts.css';
import { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts, saveThought, updateThought, deleteThought } from './services/api';
const BASE_URL=process.env.REACT_APP_API_URL

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: '',
      selectedCategory: '',
      selectedThought: '',
      categories: [],
      thoughts: [],
      email: '',
      password: '',
      isLoggedIn: false,
      isEdit:false,
      isLogin:false,
      isRegister: false,
    }
    this.selectCategory = this.selectCategory.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.createThought = this.createThought.bind(this);
    this.handleEditThought = this.handleEditThought.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.updateThought = this.updateThought.bind(this);
    this.fetchThoughts = this.fetchThoughts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.register = this.register.bind(this);
    this.showRegisterForm = this.showRegisterForm.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
  
  }

  componentDidMount() {
     // this.login();
    /* fetchCategories()
      .then(data => { 
      // console.log(data);
        this.setState({categories: data.categories});
      })
      .then(data => fetchThoughts())
      .then(data => {
        this.setState({
          thoughts: data.thoughts,
        });
      }) */
  }
  /* Authentication methods */
  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    });
  }
  
  showRegisterForm() {
    this.setState({
      isRegister: true,
      isLogin: false,
    })
  }
  showLoginForm() {
    this.setState({
      isLogin: true,
      isRegister: false,
    })
  }
  register() {
    const url = `${BASE_URL}/users`
    const body = {"user": {"email": this.state.email, "password":this.state.password}}
    const init = { method: 'POST',
                   headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                   mode: 'cors',
                   body:JSON.stringify(body)
                 }
    fetch(url, init)
    .then(res => res.json())
    .then(this.setState({
      isRegister: false,
    }))
    .catch(err => err.message)
  }
  login() {
      const url = `${BASE_URL}/user_token`;
      const body = {"auth": {"email": this.state.email, "password": this.state.password} }
      const init = { 
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        mode: 'cors',
        body:JSON.stringify(body),
      }
      fetch(url, init)
      .then(res => res.json())
      .then(res => {
        localStorage.setItem("jwt", res.jwt);
      })
      .then(() => this.setState({
        isLoggedIn: true,
        isregister: false,
        isLogin: false,
      }))
      .then(() => fetchCategories())
      .then(data => { 
        // console.log(data);
        this.setState({categories: data.categories});
      })
      .then(data => fetchThoughts())
      .then(data => {
        this.setState({
          thoughts: data.thoughts,
        })
        .then( () => this.setState({currentView: 'Category Thoughts'}));
      })
      .catch(err => console.log(err))
    }
    isLoggedIn() {
      const res = !!(localStorage.getItem("jwt"));
          this.setState({
          isLoggedIn: res,
        })
      return res;
    }
  
    logout() {
      localStorage.removeItem("jwt")
      this.setState({
       isLoggedIn: false,
       categories: [],
       thoughts: [],
       name: "",
       email: "",
      })
    }
  /* End Authentication methods */
  fetchThoughts() {
    fetchThoughts()
    .then(data => {
      this.setState({thoughts: data.thoughts});
    });
  }
  // // Category section
  fetchThoughtsByCategoryId(categoryId, categoryName) {
    fetchThoughts(categoryId)
      .then(resp => {
        this.setState({
          thoughts: resp.thoughts
        });
      });
  }
  selectCategory(category) {
    console.log(category);
    this.setState({
      selectedCategory: category,
      currentView: 'Edit Category'
    });
  }
  createCategory(category) {
    saveCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Thoughts',
        categories: data.categories
      });
    });
  }
  updateCategory(category) {
    updateCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Index',
        categories: data.categories
      });
    });
  }
  deleteCategory(category) {
    deleteCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Index',
        categories: data.categories
      })
    })
  } 
  // // end category section
  createThought(thought) {
    saveThought(thought)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Thoughts',
        categories: data.categories
      });
    });
  }
  updateThought(thought) {
    updateThought(thought)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Thoughts',
        categories: data.categories
      });
    });
  }
  handleEditThought(thought) {
    this.setState({ 
      selectedThought: thought,
      currentView: 'Edit Thought'
     });
  }
  handleDeleteClick(thought) {
    deleteThought(thought)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Thoughts',
        categories: data.categories
      })
    })
  }
  determineWhichToRender() {
    const { currentView } = this.state;
    const { categories, selectedCategory, thoughts, selectedThought } = this.state;
    switch (currentView) {
      case 'Category Index':
        return <CategoryIndex 
        categories={categories}
        selectedCategory={this.selectCategory}/>;
      case 'Create Category':
        return <CreateCategory
        onSubmit={this.createCategory}/>;
      case 'Edit Category':
      const category = categories.find(category => category.id === selectedCategory.id);
        return <EditCategory 
        onSubmit={this.updateCategory}
        onDelete={this.deleteCategory}
        category={category}/>;
      case 'Thoughts Index':
        return <ThoughtIndex
        thoughts={thoughts}
        handleEditThought={this.handleEditThought}
        />;
      case 'Category Thoughts':
        return <CategoryThought 
        categories={categories}
        handleEditThought={this.handleEditThought}
        handleDeleteClick={this.handleDeleteClick} 
        />;
        case 'Create Thought':
        return <CreateThought 
        categories={categories}
        onSubmit={this.createThought}
        
        />;

        case 'Edit Thought':
        return <EditThought 
        categories={categories}
        thought={selectedThought}
        onSubmit={this.updateThought}
        
        />;
      default:
        return null;
      }
  }
  // Handles the Nav actions.
  // Changes state CurrentView, which changes page content 
  handleLinkClick(link) {
    this.setState({currentView: link});
   }
   
  render() {
    const links = [
      'Category Index',
      'Create Category',
      'Thoughts Index',
      'Category Thoughts',
      'Create Thought',
    ];
    const { categories, thoughts } = this.state;
    return (
      <div className="App">
      <main>
      <Header 
          onClick={this.handleLinkClick.bind(this)}
          links={links} 
          isLoggedIn={this.state.isLoggedIn}
          logout={this.logout} 
          create={this.create}
          showRegisterForm={this.showRegisterForm}
          showLoginForm={this.showLoginForm}/>

        {/* {console.log(this.state.categories)} */}
        {this.state.isRegister || this.state.isLogin ?
        <LoginForm 
          email={this.state.email} 
          password={this.state.password}
          handleChange={this.handleChange}
          loginButton={this.login}
          logoutButton={this.logout}
          isRegister={this.state.isRegister}
          isLogin={this.state.isLogin}
          register={this.register}
          isLoggedIn={this.state.isLoggedIn}
        />:""}
        {/* <ListCategoriesThoughts
          categories={categories}
          thoughts={thoughts}
          selectedCategory={this.selectCategory}
        /> */}
        {/* <CategoryThought 
            categories={categories}
            // thoughts={thoughts} 
            // categoryId={6}
            // categoryName="Geoff's Category"
            // handleDeleteClick={this.handleDeleteClick}
            // handleEditThought={this.handleEditThought}
            // handleThoughtClick={this.handleThoughtClick} 
            /> */}
        {this.determineWhichToRender()}
            </main>
      </div>
    );
  }
}

export default App;
