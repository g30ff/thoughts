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

import './App.css';
import { fetchCategories, saveCategory, updateCategory, deleteCategory, fetchThoughts, saveThought, updateThought, deleteThought } from './services/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentView: '',
      selectedCategory: '',
      selectedThought: '',
      categories: [],
      thoughts: [],
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
  
  }

  componentDidMount() {
    fetchCategories()
      .then(data => { 
      // console.log(data);
        this.setState({categories: data.categories});
      })
      .then(data => fetchThoughts())
      .then(data => {
        this.setState({
          thoughts: data.thoughts,
        });
      })
  }
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
        handleEditThought={this.handleEditThought}
        />;
        break;
      case 'Category Thoughts':
        return <CategoryThought 
        categories={categories}
        handleEditThought={this.handleEditThought}
        handleDeleteClick={this.handleDeleteClick} 
        />;
        break;
        case 'Create Thought':
        return <CreateThought 
        categories={categories}
        onSubmit={this.createThought}
        
        />;
        break;
        case 'Edit Thought':
        return <EditThought 
        categories={categories}
        thought={selectedThought}
        onSubmit={this.updateThought}
        
        />;
        break;
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
