import React, { Component } from 'react';
class sidemenu extends Component {
  render() {
    return (
        <React.Fragment>
        <div className='container'>
        <div className='row'>
        <button className='btn btn-success'>Home</button>
        <button className='btn btn-success'>Courses</button>
        <button className='btn btn-success'>Videos</button>
        <button className='btn btn-success'>Discuss</button>
        <button className='btn btn-success'>My Profile</button>
</div>
</div>
</React.Fragment>
    );
  }
}
export default sidemenu;