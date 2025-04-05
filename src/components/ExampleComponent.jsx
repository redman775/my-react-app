import React from 'react';

const ExampleComponent = (props) => {
    return (
        <div>
            <h1>{props.title || "Default Title"}</h1>
            <p>{props.content || "This is an example component."}</p>
        </div>
    );
};

export default ExampleComponent;