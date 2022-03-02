/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {useState} from "react";
// node.js library that concatenates classes (strings)
// javascipt plugin for creating charts
import {Document, Page, pdfjs} from 'react-pdf';
// import {PDFtoIMG} from 'react-pdf-to-image';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FileUploader } from "react-drag-drop-files";
// react plugin used to create charts
// reactstrap components
import {Col, Container, Row,} from "reactstrap";


import Header from "components/Headers/Header.js";

const fileTypes = ["JPEG", "PNG", "GIF", "PDF"];
const Index = (props) => {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }


  console.log('test 1',file);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
          </Col>
          <Col xl="4">
          </Col>
        </Row>
        <Row className="mt-0 justify-content-center w-100" fluid>
          <Col className="ml-5 align-items-center justify-content-center mb-5 mb-xl-0" xl="8">
            <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            <p>{file ? `File name: ${file[0]?.name}` : ""}</p>
            {file && file[0].type === 'application/pdf'? <Document file={file[0]} onLoadSuccess={onDocumentLoadSuccess}>
              <Col className="mt-5 scroll-y overflow-hidden">
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
              </Col>
            </Document>:null}
            {/*{file?<PDFtoIMG file={file}>*/}
            {/*  {({pages}) => {*/}
            {/*    if (!pages.length) return 'Loading...';*/}
            {/*    return pages.map((page, index)=>*/}
            {/*        <img key={index} src={page}/>*/}
            {/*    );*/}
            {/*  }}*/}
            {/*</PDFtoIMG>:null}*/}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
