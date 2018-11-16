import React, { Component } from 'react';

import style from './Typewriter.css';

class Typewriter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        text: ''
      }
    }

    componentWillMount() {
        let { text } = this.props;

        if (Array.isArray(text)) {
            this.originalString = text.reverse().pop();
        } else {
            this.originalString = text;
        }

        this.originalString = this.originalString.split('').reverse();
    }

    componentDidMount() {
        this.type(this.originalString.pop());
    }

    type(char) {
        const { speed, text } = this.props;

        setTimeout(() => {
            this.setState({
                text: this.state.text + char
            });

            if (this.originalString.length) {
                this.type(this.originalString.pop());
            } else {
                if (Array.isArray(text) && text.length) {
                    this.originalString = text.pop().split('').reverse();

                    setTimeout(() => {
                        this.setState({ text: '' });
                        this.type(this.originalString.pop());
                    }, 1500);
                }
            }
        }, speed);
    }

    render() {
      const { text } = this.state;
        return <h1 className={ style.root }>{ text }</h1>;
    }
}

Typewriter.defaultProps = {
    speed: 100
};

export default Typewriter;