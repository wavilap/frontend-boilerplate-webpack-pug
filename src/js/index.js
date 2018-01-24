import React from 'react';
import { render } from 'react-dom';

import data from './persons.json';
import Persons from './components/persons.js';
import '../scss/main.scss';

render(<Persons data={data} />, document.getElementById('app'));