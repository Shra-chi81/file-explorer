import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Directory from './Directory';
import FileView from './FileView';
import { setSelectedFile, createFolder, createFile, renameFile, deleteFile, setError } from '../redux/slices/fileSystemSlice';

const FileExplorer = () => {
    const dispatch = useDispatch();
    const fileSystem = useSelector(state => state.fileSystem.fileSystem);
    const selectedFile = useSelector(state => state.fileSystem.selectedFile);
    const error = useSelector(state => state.fileSystem.error);

    const [folderName, setFolderName] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileClick = (file) => {
        dispatch(setSelectedFile(file));
    };

    const handleFolderNameChange = (e) => {
        setFolderName(e.target.value);
    };

    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    };

    const handleCreateFolder = () => {
        if (folderName.trim()) {
            dispatch(createFolder({ parentId: null, folderName }));
            setFolderName('');
        } else {
            dispatch(setError('Folder name cannot be empty.'));
        }
    };

    const handleCreateFile = () => {
        if (fileName.trim()) {
            dispatch(createFile({ parentId: null, fileName }));
            setFileName('');
        } else {
            dispatch(setError('File name cannot be empty.'));
        }
    };

    const handleRenameFile = (fileId) => {
        const newName = prompt('Enter new name:');
        if (newName && newName.trim()) {
            dispatch(renameFile({ fileId, newName }));
        } else {
            dispatch(setError('New name cannot be empty.'));
        }
    };

    const handleDeleteFile = (fileId) => {
        if (window.confirm('Are you sure you want to delete this file/folder?')) {
            dispatch(deleteFile({ fileId }));
        }
    };

    return (
        <>
        <div className='custom-card'>
        <FileView file={selectedFile} /> 
        <br />
            <div className="file-explorer ">
                  
                <Directory
                    fileSystem={fileSystem}
                    onFileClick={handleFileClick}
                    onCreateFolder={handleCreateFolder}
                    onDeleteFile={handleDeleteFile}
                    onRenameFile={handleRenameFile}
                />

                 <br />

                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
        </>
    );
};

export default FileExplorer;
