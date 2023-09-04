import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop />
        </div>
              <MoviesTable />
              <Footer /> 
    </div>
  );
}