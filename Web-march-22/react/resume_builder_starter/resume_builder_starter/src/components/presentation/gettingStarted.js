import { skinCodes } from '../../constants/typeCodes';
import { connect } from 'react-redux';
// import { withRouter } from "react-router-dom";
import React, { useState } from 'react';
import * as actionTypes from "../../redux/actionTypes";
import { useHistory } from "react-router-dom";
const { v4: uuidv4 } = require("uuid");
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';

// import { withRouter } from "react-router-dom";
function GettingStarted(props) {
    // currentSkin 
    // id-> save -> set /update
    
    let history = useHistory();
    // /ye skin select hua hu
    
   
    const changeTemplate = async (skinCd) => {
        console.log(skinCd);
        if (props.document.id) {
            props.updateDocument(skinCd);
        }
        else {
            props.setDocument(skinCd);
        }
        // when this function finishes running send me to /contact page
        history.push('/contact');
    }
    return (
        <div className="container med gettingStarted">
            <div className="section">
                <h1 className=" center">
                    Select a resume template to get started</h1>
                <p className=" center">
                    You’ll be able to edit and change this template later!
                </p>
                {/* template wala  */}
                { /*"['skin1', 'skin2', 'skin3','skin4' ];"*/}
                <div className="styleTemplate ">
                    {
                        skinCodes.map((value, index) => {
                            return (<div key={index} className="template-card rounded-border">
                                <i className={(value == props.document.skinCd ? 'selected fa fa-check' : 'hide')} ></i>
                                <img className='' src={'/images/' + value + '.svg'} />
                                <button type="button"
                                    onClick={() => changeTemplate(value)} className='btn-select-theme'>USE TEMPLATE</button>

                            </div>);

                        })
                    }
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        document: state.document
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDocument: (skinCd) => {
            dispatch({
                type: actionTypes.SET_SKIN, payload: {
                    skinCd: skinCd,
                    id: uuidv4()
                }
            })
        },
        updateDocument: (skinCd) => {
            console.log(skinCd)
            dispatch({ type: actionTypes.UPDATE_SKIN, payload: { skinCd: skinCd } })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);