import './styles.css'
import {connect} from "react-redux";
import React, {Component} from 'react';

class CustomComponent extends Component {
    render() {
        return (
            <>
                <h2>
                    number value: <span>{this.props.adad}</span>
                </h2>
                <button onClick={this.props.onAdd}>number UP</button>
                <button onClick={this.props.onMinus}>number Down</button>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adad: state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch({type: 'ADD_NUM', value: 2}),
        onMinus: () => dispatch({type: 'MINUS_NUM', value: 3}),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomComponent);