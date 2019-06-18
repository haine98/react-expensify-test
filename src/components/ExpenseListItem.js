import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <p>Description: {description} </p>
        </Link>
        <p>Amount: {amount} </p>
        <p>createdAt: {createdAt} </p>
    </div>
);



export default ExpenseListItem;