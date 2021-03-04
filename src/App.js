import './App.css';
import React, {Component} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import 'bulma/css/bulma.css';

const SortableItem = SortableElement(({value}) => <li className="box">{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class App extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3'],
    form: [
      { label:'Name', placeholder: 'First Name', icon: 'fas fa-user' },
      { label:'Phone Number', placeholder: 'Phone number', icon: 'fas fa-phone-alt' },
      { label:'Email', placeholder: 'Email', icon: 'fas fa-envelope' },
    ],
    isSuccess: false
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  toggleSuccessClass = (e) => {
    if(e.target.value !== '') {
      this.setState({
        isSuccess: true
      });
    } else if (e.target.value === '') {
      this.setState({
        isSuccess: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Hello World
        </h1>
        <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
        
        <div className="columns mt-6">
          {
            this.state.form.map((index, v) => {
              return (
                <div className="column" key={v}>
                  <div className="field">
                    <label className="label">{index.label}</label>
                    <div className={`control has-icons-left ${index.label === 'Email' ? 'has-icons-right' : null }`}>
                      <input
                        key={v}
                        className={ `input${ this.state.isSuccess ? ` is-success ${v}` : '' }` }
                        type={ index.label === 'Email' ? 'email' : 'text' }
                        placeholder={ index.placeholder }
                        onBlur={ this.toggleSuccessClass }
                      />
                      <span className="icon is-small is-left">
                        <i className={index.icon}></i>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <progress className="progress is-success" value="1" max="100" />
      </div>
    );
  }
}

export default App;
