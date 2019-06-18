import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' exact={true} activeClassName='is-active'>Home page</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense page</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help page</NavLink>
    </header>
);

export default Header;