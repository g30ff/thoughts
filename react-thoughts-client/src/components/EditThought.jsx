import React, { Component } from 'react';
 
class EditThought extends Component {
 constructor(props) {
   super(props);
 
   const { thought } = props;
   this.state = {
    title: thought.title,
    thought: thought.thought,
    active: thought.active,
    category_id: thought.category_id,
    id: thought.id,
   };
 
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
//    this.handleDelete = this.handleDelete.bind(this);
 }
 
 handleSubmit(ev) {
   ev.preventDefault();
   const data = {
       title: this.state.title,
       thought: this.state.thought,
       active: this.state.active,
       category_id: this.state.category_id,
       id: this.state.id,
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
//  handleDelete(ev) {
//    //ev.preventDefault();
//    const data = {
//     title: this.state.title,
//     user_id: this.state.user_id,
//     category_id: this.props.category.id
//    }
//    this.props.onDelete(data);
//  }
 render() {
//    const { title } = this.state;
 
   return (
     <div>
       <h2>Edit Thought</h2>
       <form onSubmit={this.handleSubmit}>
         <input
           name="title"
           value={this.state.title}
           onChange={this.handleChange} />
        <input
           name="thought"
           value={this.state.thought}
           onChange={this.handleChange} />  
        <input
           name="active"
           type="hidden"
           value={this.state.active}
           onChange={this.handleChange} />  
        <select
            value={this.state.category_id}
            name="category_id"
            onChange={this.handleChange} >
            {this.props.categories.map(category => {
                return (
                    <option
                        key={category.id}
                        value={category.id}>
                        {category.title}
                    </option>
                )
                })
            }
        </select>
        
         <input type="submit" value="Update Thought" />
         {/* <button onClick={() => this.handleDelete()}>Delete</button> */}
       </form>
     </div>
   );
 }
}
 
export default EditThought;
