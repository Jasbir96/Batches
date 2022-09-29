import React from "react";
import ResumePreview from './resumePreview';
// js written -> pdf

import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import { connect } from "react-redux";
function Finalize(props) {
  let educationSection = props.education
  let contactSection = props.contact


  const downloadResume = () => {
    // document -> dom 
    // get header part
    const input = document.getElementById('resumePreview');
// convert image
    html2canvas(input)
      .then((canvas) => {
// image -> 64bit 
        const imgData = canvas.toDataURL('image/png');
        //  type pdf -> potartit ,mm, a4
        const pdf = new jsPDF("p", "mm", "a4");
        // x-axis final point : page with
        // y-axis final point : page height
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();

        // pdf -> image add
          // function -> addImages
            // params
                // * imageData: 64bitimage data
               // extension
              // starting x,y coordinates
             // width ,height 
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        // download pdf
        pdf.save("resume.pdf");
      }).catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className="container full finalize-page" >
      <div className="funnel-section ">
        <div className="finalize-preview-card " id="resumePreview">
          <ResumePreview contactSection={contactSection}
            educationSection={educationSection}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
        <div className="finalize-settings center">
          <div className=" download-resume resume-options">
            <p className="no-margin"  >
              Download Resume As PdF
            </p>
            <a style={{ cursor: 'pointer' }} onClick={downloadResume}  >download Resume</a>
          </div>
          <div className=" download-resume resume-options">
            <p className="no-margin"  >
              Save to Database
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


function mapStateToProps(store) {
  return {
    document: store.document,
    education: store.education,
    contact: store.contact,
  }

}
export default connect(mapStateToProps)(Finalize)
