import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p className="priorityhigh"> {props.priorityhigh}</p>
            <p className="prioritymedium"> {props.prioritymedium}</p>
            <p className="prioritylow"> {props.prioritylow}</p>
        </div>
    )

}


export default Task;
