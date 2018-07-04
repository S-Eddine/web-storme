import React, { Component } from 'react';

class CoursesPage extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            course : { title : ""},
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course : course});
    }

    onSave() {
        console.log("Saving ",this.state.course.title);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add cours</h2>
                    <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                    <input type="submit" value="save" onClick={this.onSave} />

            </div>
        );
    }
}

export default CoursesPage;