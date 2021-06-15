import React, { Component } from 'react'

export default class New extends Component {
    state = {
        data: {
            title: "",
            genre: "",
            stock: "",
            rate: ""
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMovie(this.state.data);
    }
    handleChange = (e) => {
        let id = e.currentTarget.id;
        // console.log(id)
        let value = e.target.value;
        let newobject = { ...this.state.data };
        newobject[id] = value;

        this.setState({
            data: newobject
        })
    }
    render() {
        let { title, genre, stock, rate } = this.state.data;
        return (
            <div>
                {/* form  */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">
                        Title:
                        <input type="text" id="title" value={title} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="genre">
                        Genre
                        <select id="genre" value={genre} onChange={this.handleChange}>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Thriller">Thriller</option>
                        </select>
                    </label>
                    <label htmlFor="stock">
                        Stock
                        <input type="number" id="stock" value={stock} onChange={this.handleChange} />
                    </label>
                    <label htmlFor="rate">
                        Rate
                        <input type="number" id="rate" value={rate} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
