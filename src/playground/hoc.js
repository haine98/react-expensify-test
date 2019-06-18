//Higher order component (HOC) - component (HOC) that renders another component
//Reusing code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

//spread operator
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Don't share.</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
};

const requireAuthentification = (WrappedComponent)=> {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> :
            <p>You are not authenticated</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="detail" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="detail" />, document.getElementById('app'));