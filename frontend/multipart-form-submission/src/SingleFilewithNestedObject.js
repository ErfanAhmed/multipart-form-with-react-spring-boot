import axios from "axios";
import { useState } from "react";

const SingleFileWithNestedObject = () => {

    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [fileName, setFileName] = useState("");
    const [fileType, setFileType] = useState("");
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");


    const handleField1Change = (e) => {
        setField1(e.target.value);
    }

    const handleField2Change = (e) => {
        setField2(e.target.value);
    }

    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    }

    const handleFileTypeChange = (e) => {
        setFileType(e.target.value);
    }

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        // console.log(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("field1", field1);
        formData.append("field2", field2);
        formData.append("document.fileName", fileName);
        formData.append("document.fileType", fileType);
        formData.append("document.document", file);

        console.log(formData);

        axios.post(
            "http://localhost:8080/single-file-with-nested-obj-model-attr",
            formData
        ).then((response) => {
            console.log(response);
            setResult(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    return (
        <section>
            <div>
                <h3>Multipart form submission with single file</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        style={{ fontSize: 20, marginBottom: "10px" }} 
                        type="text"
                        name="field1"
                        placeholder="Enter your name"
                        value={ field1 }
                        onChange={ handleField1Change }
                    />
                    <br/>

                    <input
                        style={{ fontSize: 20, marginBottom: "15px" }} 
                        type="text"
                        name="filed2"
                        placeholder="enter your age"
                        value={ field2 }
                        onChange={ handleField2Change }
                    />

                    <br/>

                    <input
                        style={{ fontSize: 20, marginBottom: "10px" }} 
                        type="text"
                        name="fileName"
                        placeholder="Enter fileName"
                        value={ fileName }
                        onChange={ handleFileNameChange }
                    />
                    <br/>

                    <input
                        style={{ fontSize: 20, marginBottom: "15px" }} 
                        type="text"
                        name="fileType"
                        placeholder="file type"
                        value={ fileType }
                        onChange={ handleFileTypeChange }
                    />

                    <br/>

                    <input style={{ fontSize: 20 }} type="file" onChange={handleFileUpload} />

                    <br />

                    <button
                        style={{ fontSize: 20, marginTop: "20px" }}
                        type="submit">
                        Upload
                    </button>

                    <br />
                </form>

                <b style={{
                    marginTop: '30px',
                    fontStyle: 'Italic',
                    fontSize: 15,
                    color: 'orange'
                }}>
                    {result}
                </b>
            </div>
        </section>
    );
}

export default SingleFileWithNestedObject;