import React from 'react';
import Markdown from 'markdown-to-jsx';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Button } from 'react-bootstrap';
import fs from 'fs';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  
  async componentWillMount() {
    fs.readFile('../../../../README.md', 'utf8', (i) => {
      console.log(i);
    });
  }
  
  render() {

    return (
      <div style={{marginTop: '20px', marginBottom: '20px'}}>
        lol
      </div>
    );
  }
}