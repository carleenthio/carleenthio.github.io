webpackHotUpdate("main",{

/***/ "./src/components/resume.js":
/*!**********************************!*\
  !*** ./src/components/resume.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_mainpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/mainpage.css */ "./src/css/mainpage.css");
/* harmony import */ var _css_mainpage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_mainpage_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf */ "./node_modules/react-pdf/dist/entry.js");
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Resume_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Resume.pdf */ "./src/Resume.pdf");
/* harmony import */ var _Resume_pdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Resume_pdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _css_resume_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/resume.css */ "./src/css/resume.css");
/* harmony import */ var _css_resume_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_resume_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/Carleen/Documents/GitHub/carleen.thio/src/components/resume.js";






react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].GlobalWorkerOptions.workerSrc = "//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(react_pdf__WEBPACK_IMPORTED_MODULE_2__["pdfjs"].version, "/pdf.worker.js"); // const pdfjsLib = require('pdfjs-dist');

class Resume extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.onDocumentLoadSuccess = ({
      numPages
    }) => {
      this.setState({
        numPages
      });
    };

    this.state = {
      numPages: 3,
      pageNumber: 1
    };
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleNext() {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState(state => ({
        pageNumber: state.pageNumber + 1
      }));
    }
  }

  handlePrevious() {
    if (this.state.pageNumber > 1) {
      this.setState(state => ({
        pageNumber: state.pageNumber - 1,
        finalPage: false
      }));
    }
  } // https://github.com/wojtekmaj/react-pdf/issues/332#issuecomment-458121654


  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
      const style = layer.style;
      style.top = "0";
      style.left = "0";
      style.transform = "";
    });
  }

  render() {
    const _this$state = this.state,
          pageNumber = _this$state.pageNumber,
          numPages = _this$state.numPages;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resume",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"], {
      file: _Resume_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,
      onLoadSuccess: this.onDocumentLoadSuccess,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Page"], {
      onLoadSuccess: () => this.removeTextLayerOffset(),
      pageNumber: pageNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "secondary",
      onClick: this.handlePrevious,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Previous Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "secondary",
      onClick: this.handleNext,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Next Page")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=main.ddb1b98b0f02ff258583.hot-update.js.map