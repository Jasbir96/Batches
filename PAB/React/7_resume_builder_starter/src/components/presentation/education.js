import React, { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import { skinCodes, fieldCd } from './../../constants/typeCodes';
import { connect } from 'react-redux';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import * as taskActions from "../../redux/actionTypes";
function Education(props) {
  console.log(props.education);
  console.log('Education');
  let history = useHistory();
  const [education, setEducation] = useState(props.educationSection);
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
    let keys = Object.keys(props.education)
    if (keys.length == 0) {
      // set 
      props.setEducation(education);
    } else {
      // update 
      props.updateEducation(education);
    }
    history.push('/finalize')
  }
  useEffect(() => {
    // redux store contact 
    let keys = Object.keys(props.education)
    if (keys.length != 0) {
      // back 
      setEducation(props.edcation);
    }
  }, []);
  return (
    // -> if props.contact , 
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
              <NavLink to='/contact' className="center">Back</NavLink>
            </div>
          </div>
        </div>
        <div className="preview-card">
          {/* redux get  */}
          {/* contact */}
          {/* education */}
          <ResumePreview
            contactSection={props.contact}
            educationSection={education}
            skinCd={props?.document?.skinCd}></ResumePreview>
        </div>
      </div>
    </div>
  );
}
function mapStatetoProps(store) {
  return {
    document: store.document,
    contact: store.contact,
    education: store.education
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setEducation: (object) => {
      dispatch({
        type: taskActions.ADD_EDUCATION,
        payload: object
      })
    }
    ,
    updateEducation: (object) => {
      dispatch({
        type: taskActions.UPDATE_EDUCATION,
        payload: object
      })
    }
  }
}
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Education))