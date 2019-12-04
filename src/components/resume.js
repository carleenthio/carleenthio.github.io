import React from 'react'
import '../css/mainpage.css'
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
        };

        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this);
    }
     
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
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
  }   
    render() {
        const { pageNumber, numPages } = this.state;
        return (   
            <div className='resume' 
            style={{
              marginTop: "10px",
              display : "grid", 
              justifyContent : "center", 
              textAlign: "center",
              width : "100%"}}>
                
            <a href="../Resume.pdf" download>Click to download</a>
            
            <Document file={resumePDF} onLoadSuccess={this.onDocumentLoadSuccess} >
            <Page onLoadSuccess={() => this.removeTextLayerOffset()} pageNumber={pageNumber} />
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