import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        let { numberofPage, currentPage, changeCurrentPage } = this.props;
        let pageNumberArr = []
        for (let i = 0; i < numberofPage; i++) {
            pageNumberArr.push(i + 1);
        }
        // console.log(pageNumberArr);
        return (
            <nav aria-label="..." className="col-2" >
                <ul className="pagination ">
                    {
                        pageNumberArr.map((pageNumber) => {
                            let additional = pageNumber == currentPage ? "page-item active" : "page-item";
                            return (
                                <li className={additional}
                                    aria-current="page" onClick={() => { changeCurrentPage(pageNumber) }}>
                                    <span className="page-link">{pageNumber}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}