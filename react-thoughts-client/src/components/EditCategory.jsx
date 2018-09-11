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
     <div>
       <h2>Edit Category</h2>
       <form onSubmit={this.handleSubmit}>
         <input
           name="title"
           value={this.state.title}
           onChange={this.handleChange} />
        
         <input type="submit" value="Update Category" />
         <button onClick={() => this.handleDelete()}>Delete</button>
       </form>
     </div>
   );
 }
}
 
export default EditCategory;
