import React, { Component } from 'react';
import StudentService from '../services/StudentService';
class CreateStudentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            // step-1 
           // id: this.props.match.params.id,
            firstName: '', 
            lastName: '',
            emailId:''
        }

          this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
          this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        
          this.saveStudent = this.saveStudent.bind(this); 
    }

    saveStudent = (e) => {

        e.preventDefault();
        let student = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('student=> ' + JSON.stringify(student));

        /*Navigate List page of the */
        StudentService.createStudent(student).then( res => {
                this.props.history.push('/students');
        });

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel() {
        this.props.history.push('/students');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">  Add Student infromation </h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label > First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                 value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                        </div>

                                        <div className = "form-group">
                                            <label > Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                 value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        </div>

                                        <div className = "form-group">
                                            <label > Email Address : </label>
                                            <input placeholder="Email Address " name="emailId" className="form-control" 
                                                 value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                        </div>


                                            <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
            </div>
        );
}
}
export default CreateStudentComponent;