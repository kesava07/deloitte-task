 import React, { Component } from 'react';
import '../App.css'

export default class TodoApp extends Component {
    state = {
        todo: "",
        totalTodos: [],
        error: null
    }
    handleOnChange = event => this.setState({ todo: event.target.value.trimStart() });
    handleSubmit = event => {
        event.preventDefault()
        const { totalTodos, todo } = this.state;
        if (!todo) {
            this.setState({
                error: "Please add something"
            });
        } else if (this.state.totalTodos.indexOf(todo) > -1) {
            this.setState({
                error: "The todo already exists"
            });
        } else {
            this.setState({ totalTodos: totalTodos.concat(todo), todo: '', error: '' });
        }
    };
    handleDelete = option => {
        this.setState({ totalTodos: this.state.totalTodos.filter(val => val !== option) })
    };

    handleRemoveAll = () => this.setState({ totalTodos: [] })
    render() {
        const { todo, error, totalTodos } = this.state;
        return (
            <div className="App">
                <h1>TODOS &nbsp; <button disabled={totalTodos.length === 0} onClick={this.handleRemoveAll}>Delete All</button></h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleOnChange}
                        value={todo}
                        placeholder="Add something"
                    />&nbsp;
                    <button type="submit" >ADD</button>
                </form>
                <p>{error}</p>
                {
                    totalTodos.length > 0
                        ?
                        totalTodos.map((val, i) =>
                            <h4 key={i}>{val}
                                &nbsp; <button onClick={() => this.handleDelete(val)}>Delete</button>
                            </h4>) :
                        <p>No todos found</p>
                }
            </div>
        )
    }
}
