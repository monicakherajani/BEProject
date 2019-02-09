import React, {Component} from 'react';
class Register extends Component {
    state ={
        Name:'',
        Email_id:'',
        Password:'',
        ConfirmPassword:'',
        State:'',
        City:'',
        PhoneNo:'',
        Age:'',
        Qualification:'',
        Address:'',
        College:'',
        Branch:'',

    }
     onChangeName = event => {
         this.setState({Name:event.target.value});
     };
     onChangeEmail_id = event => {
      this.setState({Name:event.target.value});
  };
  onChangePassword = event => {
    this.setState({Name:event.target.value});
};
  onChangeConfirmPassword = event => {
    this.setState({Name:event.target.value});
};
onChangeCity = event => {
  this.setState({Name:event.target.value});
};
onChangeState = event => {
  this.setState({Name:event.target.value});
};
     onChangeAge = event => {
        this.setState({Age :event.target.value});
    };

    onChangeQualification = event => {
        this.setState({Qualification :event.target.value});
    };
    onChangeAddress = event => {
        this.setState({Address :event.target.value});
    };
    onChangeCollege = event => {
        this.setState({College :event.target.value});
    };
     
    render() {
        return(
            <div className='Register'>
                <table>
          <tr>
            <td>Name</td>
            <td>
              <input onChange={this.onChangeName} />
            </td>
          </tr>
          <tr>
            <td>Email_id</td>
            <td>
              <input onChange={this.onChangeEmail_id} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input onChange={this.onChangePassword} />
            </td>
          </tr>
          <tr>
            <td>ConfirmPassword</td>
            <td>
              <input onChange={this.onChangeConfirmPassword} />
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input type='Age' onChange={this.onChangeAge} />
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>Qualification</td>
            <td>
              <input type='Qualification' onChange={this.onChangeQualification} />
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input type='Address' onChange={this.onChangeAddress} />
            </td>
          </tr>
          <tr>
            <td>City</td>
            <td>
              <input onChange={this.onChangeCity} />
            </td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <input onChange={this.onChangeState} />
            </td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>College</td>
            <td>
              <input type='College' onChange={this.onChangeCollege} />
            </td>
          </tr>
          <tr>
            <td colspan='2'>
              <button className='btn btn-success'onClick>Register</button>{' '}
            </td>
          </tr>
          
        </table>
        
        
        
      </div>//no need to write from table tag
    );
  }
}

export default Register;
 
            
    