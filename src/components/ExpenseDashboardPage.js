import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import { connect } from 'react-redux';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
