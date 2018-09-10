import React, { Component } from 'react';
 
class CreateCategory extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
       title: '',
       user_id: 7,
   };
 
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleSubmit(ev) {
   ev.preventDefault();
   this.props.onSubmit(this.state);
 }
 
 handleChange(ev) {
   const { name, value } = ev.target;
   this.setState({
     [name]: value
   });
 }
 
 render() {
 
   return (
     <div>
       <h2>Create Category</h2>
       <form onSubmit={this.handleSubmit} >
         <input
           name="title"
           value={this.state.title}
           onChange={this.handleChange} />       
 
         <input type="submit" value="Create Category" />
       </form>
     </div>
   );
 }
}
 
export default CreateCategory;