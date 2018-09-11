import React, { Component } from 'react';
 
class CreateThought extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
       title: '',
       thought: '',
       active: true,
       category_id: '',
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
       <h2>Create Thought</h2>
       <form onSubmit={this.handleSubmit} >
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
            value={this.props.categoryId}
            name="category_id"
            onChange={this.handleChange} >
            <option value='' >Choose a Category</option>
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
 
         <input type="submit" value="Create Thought" />
       </form>
     </div>
   );
 }
}
 
export default CreateThought;