import React from 'react'
import '../css/index.css'
import { Document, Page , pdfjs} from 'react-pdf'
import resumePDF from "../Resume.pdf";
import { Button } from "react-bootstrap";
import '../css/resume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const pdfjsLib = require('pdfjs-dist');
class Resume extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
        numPages : 3,
        pageNumber : 1,
        scale: 1.0
        };

        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.onPageLoadSuccess = this.onPageLoadSuccess.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }
     
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });

      }
    onPageLoadSuccess(page) {
      // https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654
      const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
      textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
      });
  
      // https://github.com/wojtekmaj/react-pdf/issues/74
      const parentDiv = document.querySelector('#resume');
  
      if (parentDiv.clientWidth > 750) {
        this.setState({ scale: 1.2 });
      }
      else{
        let pageScale = parentDiv.clientWidth / page.originalWidth;
  
        if (this.state.scale !== pageScale) {
          this.setState({ scale: pageScale });
        }
      }
    }
    handleNext() {
        if (this.state.pageNumber < this.state.numPages) {
          this.setState((state) => ({pageNumber : state.pageNumber + 1}));
        } 
    }
    handlePrevious() {
        if (this.state.pageNumber > 1) {
          this.setState((state) => ({pageNumber : state.pageNumber - 1, finalPage : false}));
        }
      }
    
  // https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654
  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
    // const parentDiv = document.querySelector('#pdfDocument')
    // let pageScale = parentDiv.clientWidth / this.originalWidth
    // if (this.state.scale !== pageScale) {
    //   this.setState({ scale: pageScale });
    // }
  }   
    render() {
        // const { pageNumber} = this.state;
        return (   
            <div className='resume' id='resume'
            style={{
              display: "grid",
              justifyContent: "center",
              textAlign: "center"
              }}>
                
            <h2>Resume</h2>
            <a href={resumePDF} download="carleen-thio-resume">Click to Download</a>
            <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page
                onLoadSuccess={this.onPageLoadSuccess}
                pageNumber={this.state.pageNumber}
                scale={this.state.scale} />
            </Document>
            
            <table className="button-table">
                <tr>
                    <td><Button variant="secondary" onClick={this.handlePrevious}>Previous Page</Button></td>
                    <td><Button variant="secondary" onClick={this.handleNext}>Next Page</Button></td>
                </tr>
            </table>
            </div>

        );
    }
}

export default Resume