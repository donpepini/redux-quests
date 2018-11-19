import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
})

const mapDispatchToProps = dispatch => ({
    onAdd: () => dispatch({
        type: "ADD1"
    }),
    onRemove: () => dispatch({
        type: "REMOVE1"
    }),
    onReset: () => dispatch({
        type: "RESET"
    })
})

const counterComponent = ({counter, onAdd, onRemove, onReset}) => <div>
    <p>{counter}</p>
    <button onClick={onAdd}>+1</button>
    <button onClick={onRemove}>-1</button>
    <button onClick={onReset}>Reset</button>
    </div>;

export default connect(mapStateToProps, mapDispatchToProps)(counterComponent);


