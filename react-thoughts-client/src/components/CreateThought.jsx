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
    <div className="form-container">
      <div className="create-thought">
       <h2>Create Thought</h2>
      </div>
       <form onSubmit={this.handleSubmit} >
       <div className="row">
          <div className="col-25">
            <label htmlFor="title" className="create-thought">title</label>
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
            <label htmlFor="thought" className="create-thought">thought</label>
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
            <label htmlFor="category_id" className="create-thought">category</label>
          </div>
          <div className="col-75">
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
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Create Thought" />
        </div>
       </form>
     </div>
   );
 }
}
 
export default CreateThought;