import React, { Component } from 'react'
import StudentService from '../services/StudentService'

export default class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 students: []
        }

        this.addStudent = this.addStudent.bind(this)
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);

    }
    addStudent(){
        this.props.history.push('/add-student');
    }

    editStudent(id) {
        this.props.history.push(`/update-student/${id}`);
    }

    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
            this.setState({ students: this.state.students.filter(student => student.id !== id) });
        });
    }
    
    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

    componentWillUnmount() {
        
    }

    // Prototype methods, Bind in Constructor (ES2015)
    handleEvent() {}

    // Class Properties (Stage 3 Proposal)
    handler = () => { this.setState() }
    componentDidMount(){ //rest api call

        StudentService.getStudents().then((res)=> {
            this.setState({students: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className='text-center'>Students List</h2>
                <div className='row'>
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student </button>
                </div>

                <div className='row'>
                    <table className='table table-striped table-border'>
                        <thead>
                            <tr>
                                <th> Student First Name</th>
                                <th> Student Last Name</th>
                                <th> Student Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student=>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.emailId}</td>

                                        <td>
                                            <button onClick={() => this.editStudent(student.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteStudent(student.id)} className="btn btn-danger">Delete</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewStudent(student.id)} className="btn btn-info">View</button>
                                        </td>

                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
