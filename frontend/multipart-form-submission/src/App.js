import './App.css';
import MultipartMultiFileWithFormData from './MultipartMultiFileWithFormData';
import MultipartSingleFileForm from './MultipartSingleFile';
import MultipartSingleFileWithFormData from './MultipartSingleFileWithFormData';

function App() {
  return (
    <div className="">
      <header className="App-header">    
        {/* <MultipartSingleFileForm /> */}
        {/* <MultipartSingleFileWithFormData /> */}
        <MultipartMultiFileWithFormData/>
      </header>
    </div>
  );
}

export default App;
