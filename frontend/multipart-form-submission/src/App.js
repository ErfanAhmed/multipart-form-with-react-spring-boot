import './App.css';
import MultiFileWithNestedObjectList from './MultiFileWithNestedObjectList';
import MultipartMultiFileWithFormData from './MultipartMultiFileWithFormData';
import MultipartSingleFileForm from './MultipartSingleFile';
import MultipartSingleFileWithFormData from './MultipartSingleFileWithFormData';
import SingleFileWithFormData from './SingleFileWithFromData';
import SingleFileWithNestedObject from './SingleFilewithNestedObject';

function App() {
  return (
    <div className="">
      <header className="App-header">    
        {/* <MultipartSingleFileForm /> */}
        {/* <MultipartSingleFileWithFormData /> */}
        {/* <MultipartMultiFileWithFormData/> */}
        {/* <SingleFileWithFormData/> */}
        {/* <SingleFileWithNestedObject/> */}
        <MultiFileWithNestedObjectList/>
      </header>
    </div>
  );
}

export default App;
