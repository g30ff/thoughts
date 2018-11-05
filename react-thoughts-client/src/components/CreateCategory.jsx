import React, { Component } from 'react';
 
class CreateCategory extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
       title: '',
       user_id: 1,
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
      <div className="create-category">
        <h2>Create Category</h2>
      </div>
          <form onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="col-25">
              <label htmlFor="title" className="create-category">title</label>
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
            <input type="submit" value="Create Category" />
        </div>
       </form>
    </div>
   );
 }
}
 
export default CreateCategory;