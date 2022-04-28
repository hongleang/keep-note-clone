import * as React from 'react';
import Masonry from 'react-masonry-css'

import '../_css/note-layout.css'

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};


const NotesLayout = ({ children, className='', ...props }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`my-masonry-grid ${className}`}
      columnClassName="my-masonry-grid_column"
      {...props}
    >
      {/* array of JSX items */}
      {children}
    </Masonry>
  );
}

export default NotesLayout;