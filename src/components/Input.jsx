import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSuccess: false
        }
    }
    // const getValue = e => {
    //     if(e.target.value !== '' && e.target.value !== ' ') {
    //         setIsSuccess(true);
    //         alert('true');
    //     }
    //     else {
    //         setIsSuccess(false);
    //         alert('false');
    //     }
    // }
    render() {
        return(
            <div className="column">
                <div className="field">
                    <label className="label">{this.props.label}</label>
                    <div className={`control has-icons-left ${this.props.label === 'Email' ? 'has-icons-right' : null }`}>
                        <input
                            className={ `input${ this.state.isSuccess ? ` is-success` : ` is-danger` }` }
                            type={ this.props.label === 'Email' ? 'email' : 'text' }
                            placeholder={ this.props.placeholder }
                            value={ this.props.value }
                            onChange={ this.props.getValue }
                        />
                        <span className="icon is-small is-left">
                            <i className={ this.props.icon }></i>
                        </span>
                    </div>
                    <p className={`help ${ this.state.isSuccess ? ` is-success` : ` is-danger` }`}>Enter your {this.props.label}</p>
                </div>
            </div>
        )
    }
}

export default Input;
