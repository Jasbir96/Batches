import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import update from 'immutability-helper';
import { fieldCd, skinCodes } from '../../constants/typeCodes';
import * as contactActions from '../../redux/actionTypes';
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ResumePreview from './resumePreview'
// import { connect } from "react-redux";
import { connect } from "react-redux";
function Contact(props) {
    // console.log(props)
    let history = useHistory();
    const [contact, setContact] = useState(props.contact);
    // 2-3
    const onSubmit = async () => {

        props.setContact(contact);

        history.push('/education');
    }
    const onBack = async () => {

        props.setContact(contact);

        history.push('/getting-started');
    }
    const onchange = (event) => {  // 3 
        var key = event.target.name;
        var val = event.target.value;
        setContact({ ...contact, [key]: val })
    }
    // 2
    const getFieldData = (key) => {
        if (contact && contact[key]) {
            return contact[key]
        }
        return "";
    }

    return (
        <div className="container med contact">
            <div className="section funnel-section">
                {/* lhs */}
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">

                        <div className="input-group">
                            <label>First Name</label>
                            <div className="effect">
                                {/* 1 */}
                                <input type="text" name={fieldCd.FirstName} value={getFieldData(fieldCd.FirstName)} onChange={onchange} /><span></span>

                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName} value={getFieldData(fieldCd.LastName)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary} value={getFieldData(fieldCd.ProfSummary)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text" name={fieldCd.Email} value={getFieldData(fieldCd.Email)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text" name={fieldCd.Phone} value={getFieldData(fieldCd.Phone)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text" name={fieldCd.Profession} value={getFieldData(fieldCd.Profession)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street} value={getFieldData(fieldCd.Street)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City} value={getFieldData(fieldCd.City)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text" name={fieldCd.State} value={getFieldData(fieldCd.State)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text" name={fieldCd.Country} value={getFieldData(fieldCd.Country)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode} value={getFieldData(fieldCd.ZipCode)} onChange={onchange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <div onClick={onBack} className="center back">Back</div>
                        </div>
                    </div>

                </div>
                <div className="preview-card">
                    {/* it takes data from contact data and 
                    skin that we are getting from gettingStarted  */}
                    <ResumePreview
                        contactSection={contact}
                        skinCd={props?.document?.skinCd}
                    ></ResumePreview>
                </div>
            </div>
        </div>
    );
}
// 1. get old data -> skin
function mapStateToProps(store) {
    console.log(store.document, " ", store.contact)
    return {
        document: store.document,
        contact: store.contact
    }
}
// 2-1 =-> next ya back -> data save 
function mapDispatchToProps(dispatch) {
    return {
        setContact: (contactObj) => {
            dispatch({
                type: contactActions.SET_CONTACT,
                payload: contactObj

            })
        },
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Contact);

