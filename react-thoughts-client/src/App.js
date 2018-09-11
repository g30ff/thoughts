import React, { Component } from 'react';
import Header from './components/Header';
import CategoryIndex from './components/CategoryIndex';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';
import ThoughtIndex from './components/ThoughtIndex';
import CategoryThought from './components/CategoryThought';
import ListCategoriesThoughts from './components/ListCategoriesThoughts';
import CreateThought from './components/CreateThought';

import './App.css';
import { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts, saveThought } from './services/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: '',
      selectedCategory: '',
      categories: [],
      thoughts: [],
    }
    this.selectCategory = this.selectCategory.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.createThought = this.createThought.bind(this);
  
  }

  componentDidMount() {
    fetchCategories()
      .then(data => { 
      console.log(data);
        this.setState({categories: data.categories});
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

  determineWhichToRender() {
    const { currentView } = this.state;
    const { categories, selectedCategory, thoughts } = this.state;
    switch (currentView) {
      case 'Category Index':
        return <CategoryIndex 
        categories={categories}
        selectedCategory={this.selectCategory}/>;
        break;
      case 'Create Category':
        return <CreateCategory
        onSubmit={this.createCategory}/>;
        break;
      case 'Edit Category':
      const category = categories.find(category => category.id === selectedCategory.id);
        return <EditCategory 
        onSubmit={this.updateCategory}
        onDelete={this.deleteCategory}
        category={category}/>;
        break;
      case 'Thoughts Index':
        return <ThoughtIndex
        thoughts={thoughts}
        // selectedThought={this.selectThought}
        />;
        break;
      case 'Category Thoughts':
        return <CategoryThought 
        categories={categories}
        // thoughts={thoughts} 
        // categoryId={6}
        // categoryName="Geoff's Category"
        // handleDeleteClick={this.handleEditThought}
        // handleEditThought={this.handleEditThought}
        // handleThoughtClick={this.handleThoughtClick} 
        />;
        break;
        case 'Create Thought':
        return <CreateThought 
        categories={categories}
        onSubmit={this.createThought}
        // thoughts={thoughts} 
        // categoryId={6}
        // categoryName="Geoff's Category"
        // handleDeleteClick={this.handleDeleteClick}
        // handleEditThought={this.handleEditThought}
        // handleThoughtClick={this.handleThoughtClick} 
        />;
        break;

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
      <Header
         onClick={this.handleLinkClick.bind(this)}
         links={links} />

        <header className="App-header">
          
          <h1 className="App-title">Welcome to Thoughts</h1>
        </header>
        {console.log(this.state.categories)}
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

      </div>
    );
  }
}

export default App;
