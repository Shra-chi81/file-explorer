// src/components/FileView.js

import React from 'react';

const FileView = ({ file }) => {
    return (
        <div className="file-view">
            {file ? (
                <div>
                    <h2>{file.name}</h2>
                </div>
            ) : (
                <div>
                    <p className='view-content'>Select a file to view its content.</p>
                </div>
            )}
        </div>
    );
};

export default FileView;
