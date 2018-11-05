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
     <div className="form-container">
      <div className="edit-thought">
      <h2>Edit Thought</h2>
      </div>
       
       <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="title" className="edit-thought">title</label>
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
          <div className="col-25">
            <label htmlFor="thought" className="edit-thought">thought</label>
          </div>
          <div className="col-75">
            <input
            type="text"
            name="thought"
            value={this.state.thought}
            onChange={this.handleChange} />  
          </div>
        </div>

        <input
           name="active"
           type="hidden"
           value={this.state.active}
           onChange={this.handleChange} />  

      <div className="row">
        <div className="col-25">
          <label htmlFor="category_id" className="edit-thought">category</label>
        </div>
        <div className="col-75">
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
        </div>
      </div>
      <div className="row">
         <input type="submit" value="Update Thought" />
      </div>
    </form>
    </div>
   );
 }
}
 
export default EditThought;
