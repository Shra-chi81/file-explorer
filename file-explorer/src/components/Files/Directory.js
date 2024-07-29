import React from 'react';
import { IoMdFolder, IoMdDocument } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { createFolder, deleteFile, renameFile } from '../redux/slices/fileSystemSlice';

const Directory = ({ fileSystem, onFileClick, onCreateFolder, onDeleteFile, onRenameFile }) => {
    const dispatch = useDispatch();

    const handleFileClick = (file) => {
        onFileClick(file);
    };

    const handleCreateFolder = (parentId) => {
        const folderName = prompt('Enter folder name:');
        if (folderName) {
            dispatch(createFolder({ parentId, folderName }));
        }
    };

    const handleRenameFile = (fileId) => {
        const newName = prompt('Update name:');
        if (newName) {
            dispatch(renameFile({ fileId, newName }));
        }
    };

    const handleDeleteFile = (fileId) => {
        if (window.confirm('Are you sure you want to delete this file/folder?')) {
            dispatch(deleteFile({ fileId }));
        }
    };

    const renderTree = (files) => {
        if (!Array.isArray(files)) {
            return null;
        }

        return files.map(file => (
            <div key={file.id}>
                {file.type === 'folder' ? (
                    <div className="folder-item">
                        <div>   <IoMdFolder /> {file.name}</div>
                        <div className='btns'>
                                <button  onClick={() => handleCreateFolder(file.id)}>New Folder</button>
                                <button className='rename' onClick={() => handleRenameFile(file.id)}>Rename</button>
                                <button  onClick={() => handleDeleteFile(file.id)}>Delete</button>
                        </div>
                       <div>
                          <div className="folder-children"> {renderTree(file.children)}  </div>  
                       </div>
                    </div>
                ) : (
                    <div className="file-item" onClick={() => handleFileClick(file)}>
                        <div>   <IoMdDocument /> {file.name}</div>
                        <div className='btns'>
                            <button onClick={() => handleRenameFile(file.id)}>Rename</button>
                            <button  className='rename' onClick={() => handleDeleteFile(file.id)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        ));
    };

    return (
        <div className="directory-tree">
            {renderTree(fileSystem)}
        </div>
    );
};

export default Directory;
