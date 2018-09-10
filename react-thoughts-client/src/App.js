import React, { Component } from 'react';
import Header from './components/Header';
import CategoryIndex from './components/CategoryIndex';
import CreateCategory from './components/CreateCategory';
import EditCategory from './components/EditCategory';
import ThoughtIndex from './components/ThoughtIndex';

import './App.css';
import { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts } from './services/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Category Index',
      selectedCategory: '',
      categories: [],
      thoughts: [],
    }
    this.selectCategory = this.selectCategory.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  
  }

  componentDidMount() {
    fetchCategories()
      .then(data => this.setState({categories: data.categories}));
      fetchThoughts()
      .then(data => this.setState({thoughts: data.thoughts}));
  }
  // // Category section
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
        currentView: 'Category Index',
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
    ];
 
    return (
      <div className="App">
      <Header
         onClick={this.handleLinkClick.bind(this)}
         links={links} />

        <header className="App-header">
          
          <h1 className="App-title">Welcome to Thoughts</h1>
        </header>
       
        {this.determineWhichToRender()}

      </div>
    );
  }
}

export default App;
