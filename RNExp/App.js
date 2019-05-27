import React from 'react';

import FlexBoxAPI from './components/FlexBoxAPIComponent';
import ScrollViewDemo from './components/ScrollViewDemoComponent';
import FlatListDemo from './components/FlatListDemoComponent';
import SectionListDemo from './components/SectionListDemoComponent';
import ToDoApp from './components/ToDoAppComponent';

import MinimalRedux from './redux/components/MinimalReduxComponent';
import Main from './redux/components/MainReduxComponent';

export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

