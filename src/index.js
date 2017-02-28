import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

import BasicExample from './components/BasicExample'
import ParamsExample from './components/ParamsExample'
import AuthExample from './components/AuthExample'
import CustomLinkExample from './components/CustomLinkExample'
import PreventingTransitionsExample from './components/PreventingTransitionsExample'
import NoMatchExample from './components/NoMatchExample'
import RecursiveExample from './components/RecursiveExample'
import SidebarExample from './components/SidebarExample'
import AnimationExample from './components/AnimationExample'
import AmbiguousExample from './components/AmbiguousExample'
import RouteConfigExample from './components/RouteConfigExample'

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);
