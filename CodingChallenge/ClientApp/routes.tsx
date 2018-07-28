import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchPeople from './components/FetchPeople';
import ManagePerson from './components/ManagePerson';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/fetchpeople' component={ FetchPeople as any } />
	<Route path='/person/add' component={ ManagePerson as any} />
	<Route path='/person/edit/:personId' component={ ManagePerson as any} />
</Layout>;
