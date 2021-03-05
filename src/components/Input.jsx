import React, { useState } from 'react';

const Input = (props) => {
    const [isSuccess, setIsSuccess] = useState(false);
    return(
        <div className="column">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className={`control has-icons-left ${props.label === 'Email' ? 'has-icons-right' : null }`}>
                    <input
                        className={ `input${ isSuccess ? ` is-success` : ` is-danger` }` }
                        type={ props.label === 'Email' ? 'email' : 'text' }
                        placeholder={ props.placeholder }
                        value={ props.value }
                        onChange={
                            (e) => e.target.value !== '' && e.target.value !== ' '
                            ? setIsSuccess(true) : setIsSuccess(false)
                        }
                    />
                    <span className="icon is-small is-left">
                        <i className={ props.icon }></i>
                    </span>
                </div>
                <p class={`help ${ isSuccess ? ` is-success` : ` is-danger` }`}>Enter your {props.label}</p>
            </div>
        </div>
    )
}

export default Input;