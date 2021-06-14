import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let { genres, groupBygenre } = this.props;
        return (
            <ul class="list-group">
                {
                    genres.map((cgObj) => {
                        return (<li class="list-group-item" key={cgObj.id}
                            onClick={() => { groupBygenre(cgObj.name) }}>
                            {cgObj.name}</li>)
                    })
                }

            </ul>
        )
    }
}