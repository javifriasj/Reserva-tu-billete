import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';
import { shallow } from 'enzyme';
import app, {Search, Button, Table} from './App';

describe('Search', () => {

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search>Search</Search>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Search>Search</Search>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('Button', () => {

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Give me more</Button>, div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Button>Give me more</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

describe('table', () => {

  const props = {
    list:[
      {title:'1', author:'1', num_comments:1, points:2, objectID:'y'},
      {title:'2', author:'2', num_comments:1, points:2, objectID:'z'}
    ]
  }

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table { ...props }/>,div);
  });

  test('snapshots', () => {
    const component = renderer.create(<Table { ...props }/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Shows two items in list', () => {
    const element = shallow(<Table { ...props }/>);
    expect(element.find('.table-row').length).toBe(2);
  });

});
