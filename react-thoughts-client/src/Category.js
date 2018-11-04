import React, { Component } from 'react';

import { fetchCategories, saveCategory, updateCategory, deleteCategory } from './Category';
import { fetchCategories, saveCategory, updateCategory, deleteCategory } from './services/api';
  // Category section
  function selectCategory(category) {
    console.log(category);
    this.setState({
      selectedCategory: category,
      currentView: 'Edit Category'
    });
  }
  function createCategory(category) {
    saveCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Index',
        categories: data.categories
      });
    });
  }
  function updateCategory(category) {
    updateCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Index',
        categories: data.categories
      });
    });
  }
  function deleteCategory(category) {
    deleteCategory(category)
    .then(data => fetchCategories())
    .then(data => {
      this.setState({
        currentView: 'Category Index',
        categories: data.categories
      })
    })
  }
  export { fetchCategories, saveCategory, updateCategory, deleteCategory } 
  // end category section
