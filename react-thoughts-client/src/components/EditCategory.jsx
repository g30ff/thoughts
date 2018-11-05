import React, { Component } from 'react';
 
class EditCategory extends Component {
 constructor(props) {
   super(props);
 
   const { category } = props;
   this.state = {
     title: category.title,
     user_id: category.user_id,
   };
 
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
 }
 
 handleSubmit(ev) {
   ev.preventDefault();
   const data = {
       title: this.state.title,
       user_id: this.state.user_id,
       category_id: this.props.category.id
   }
   this.props.onSubmit(data);
 }
 
 handleChange(ev) {
   ev.preventDefault();
   const { name, value } = ev.target;
 
   this.setState({
     [name]: value
   });
 }
 handleDelete(ev) {
   //ev.preventDefault();
   const data = {
    title: this.state.title,
    user_id: this.state.user_id,
    category_id: this.props.category.id
   }
   this.props.onDelete(data);
 }
 render() {
   const { title } = this.state;
 
   return (
     <div className="form-container">
      <div className="create-category">
        <h2>Edit Category</h2>
    </div>
    <form onSubmit={this.handleSubmit} >
    <div className="row">
      <div className="col-25">
        <label for="title" className="edit-category">title</label>
      </div>
      <div className="col-75">
        <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange} />       
      </div>
    </div> 
    <div className="row">
      <input type="submit" value="Update Category" />
      <button onClick={() => this.handleDelete()}>Delete</button>
    </div>
    </form>
    </div>
   );
 }
}
 
export default EditCategory;
