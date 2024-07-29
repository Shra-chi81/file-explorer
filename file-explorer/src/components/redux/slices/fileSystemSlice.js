// fileSystemSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
  fileSystem: [
    {
      id: uuid(),
      name: 'Root',
      type: 'folder',
      children: [],
    },
  ],
  selectedFile: null,
  error: null,
};

const fileSystemSlice = createSlice({
  name: 'fileSystem',
  initialState,
  reducers: {
    createFolder: (state, action) => {
      const { parentId, folderName } = action.payload;
      const newFolder = {
        id: uuid(),
        name: folderName,
        type: 'folder',
        children: [],
      };
      const parentFolder = findFolderById(state.fileSystem, parentId);
      if (parentFolder) {
        parentFolder.children.push(newFolder);
      }
    },
    createFile: (state, action) => {
      const { parentId, fileName } = action.payload;
      const newFile = {
        id: uuid(),
        name: fileName,
        type: 'file',
        content: '',
      };
      const parentFolder = findFolderById(state.fileSystem, parentId);
      if (parentFolder) {
        parentFolder.children.push(newFile);
      }
    },
    renameFile: (state, action) => {
      const { fileId, newName } = action.payload;
      const file = findFileById(state.fileSystem, fileId);
      if (file) {
        file.name = newName;
      }
    },
    deleteFile: (state, action) => {
      const { fileId } = action.payload;
      state.fileSystem = removeFileById(state.fileSystem, fileId);
    },
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Helper functions
const findFolderById = (folders, id) => {
  for (let folder of folders) {
    if (folder.id === id) {
      return folder;
    }
    const foundFolder = findFolderById(folder.children, id);
    if (foundFolder) return foundFolder;
  }
  return null;
};

const findFileById = (folders, id) => {
  for (let folder of folders) {
    for (let file of folder.children) {
      if (file.id === id) {
        return file;
      }
    }
    const foundFile = findFileById(folder.children, id);
    if (foundFile) return foundFile;
  }
  return null;
};

const removeFileById = (folders, id) => {
  return folders.map(folder => {
    folder.children = folder.children.filter(file => file.id !== id);
    return {
      ...folder,
      children: removeFileById(folder.children, id),
    };
  });
};

export const { createFolder, createFile, renameFile, deleteFile, setSelectedFile, setError } = fileSystemSlice.actions;

export default fileSystemSlice.reducer;
