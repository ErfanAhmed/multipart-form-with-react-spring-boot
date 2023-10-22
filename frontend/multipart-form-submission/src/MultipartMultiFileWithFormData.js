import axios from "axios";
import { useState } from "react";

const MultipartMultiFileWithFormData = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [result, setResult] = useState("");

    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");

    const handleField1Change = (e) => {
        setField1(e.target.value);
    }

    const handleField2Change = (e) => {
        setField2(e.target.value);
    }

    const handleFileUpload = (e) => {
        setSelectedFiles(e.target.files);
        console.log(e.target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            field1: field1,
            field2: field2
        }


        const jsonFormData = JSON.stringify(form);
        const blobFormData = new Blob([jsonFormData], {
            type: 'application/json'
        });

        const formData = new FormData();
        
        for (const file of selectedFiles) {
            formData.append('files', file);
        }
        // formData.append("file", file);
        formData.append("form", blobFormData);

        console.log(formData);

        axios.post(
            "http://localhost:8080/multipart-multiple-file-with-form-data",
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

                    <input style={{ fontSize: 20 }} type="file" multiple onChange={handleFileUpload} />

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

export default MultipartMultiFileWithFormData;