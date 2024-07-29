const initialFileSystem = {
    id: 'root',
    name: 'Root',
    type: 'folder',
    children: [
        {
            id: 'folder1',
            name: 'Folder 1',
            type: 'folder',
            children: [
                { id: 'file1', name: 'File-1.txt', type: 'file' },
                { id: 'file2', name: 'File-2.png', type: 'file' }
            ]
        },
        {
            id: 'folder2',
            name: 'Folder 2',
            type: 'folder',
            children: [
                { id: 'file1', name: 'File-1.txt', type: 'file' },
                { id: 'file2', name: 'File-2.png', type: 'file' }
            ]
        }
    ]
};

export default initialFileSystem;