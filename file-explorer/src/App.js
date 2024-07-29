import './App.css';
import FileExplorer from './components/Files/FileExplorer';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h2>File Explorer App</h2>
        </header>
        <main className="App-main">
               <div className="file-explorer-container">
               <FileExplorer />
               </div>
        </main>
        <footer className="App-footer">
            <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} CodeForTomorrow. All rights reserved.</p>
            </div>
        </footer>
    </div>
  );
}

export default App;
