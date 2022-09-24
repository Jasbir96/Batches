import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import { skinCodes, fieldCd } from './../../constants/typeCodes';
// import { connect } from 'react-redux'
import * as educationActions from '../../redux/actionTypes';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
function Education(props) {
  console.log('Education');
  let history = useHistory();
  const [education, setEducation] = useState(props.education);
  const onchange = (event) => {
    var key = event.target.name;
    var val = event.target.value;
    setEducation({ ...education, [key]: val })
  }
  const getFieldData = (key) => {
    if (education && education[key]) {
      return education[key]
    }
    return "";
  }
  const onSubmit = async (e) => {
    props.setEducation(education)
    history.push('/finalize')
  }
  const onBack = async (e) => {
    props.setEducation(education)
    history.push('/contact')
  }

  return (
    <div className="container med education" >
      <div className="section funnel-section">
        <div className="form-card">
          <h2 className="form-heading center">Educational Section</h2>
          <div className="form-section">
            <div className="input-group"><label>College Name</label>
              <div className="effect"><input type="text" name={fieldCd.SchoolName}
                onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Degree</label>
              <div className="effect"><input type="text" name={fieldCd.Degree}
                onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>CGPA</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>City/State</label>
              <div className="effect"><input type="text" name={fieldCd.City}
                onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Graduation Month</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="input-group"><label>Graduation Year</label>
              <div className="effect"><input type="text" name={fieldCd.GraduationYear}
                onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
              </div>
              <div className="error"></div>
            </div>

            <div className="form-buttons">
              <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
              <div className="center back" onClick={onBack}>Back</div>
              {/* <NavLink to='/contact' className="center">Back</NavLink> */}
            </div>
          </div>
        </div>
        <div className="preview-card">
          <ResumePreview
            contactSection={props.contact}
            educationSection={education}
            skinCd={props?.document?.skinCd}></ResumePreview>
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
    contact: store.contact,
    education: store.education
  }
}
// 2-1 =-> next ya back -> data save 
function mapDispatchToProps(dispatch) {
  return {
    setEducation: (educationObj) => {
      dispatch({
        type: educationActions.SET_EDUCATION,
        payload: educationObj
      })
    },
  }

}




export default connect(mapStateToProps, mapDispatchToProps)(Education);

