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
import SlideShow from "../components/Slideshow";

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
      <SlideShow/>
    </>
  );
};

export default Index;
