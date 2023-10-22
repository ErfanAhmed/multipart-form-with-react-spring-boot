import axios from "axios";
import { useState } from "react";

const MultipartSingleFileForm = () => {

    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");

    const handleFileUpload = (e) => {
        setFile(e.target.files[0]);
        // console.log(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file);

        console.log(formData);

        axios.post(
            "http://localhost:8080/multipart-single-file", 
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                
            }
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
                
                <form onSubmit={ handleSubmit }>
                    <input style={{ fontSize: 20 }} type="file" onChange={ handleFileUpload }/>
                    
                    <br />

                    <button
                        style={{ fontSize: 20, marginTop: "20px" }}
                        type="submit">
                        Upload
                    </button>

                    <br/>
                </form>

                <b style={{ 
                    marginTop: '30px',
                    fontStyle: 'Italic',
                    fontSize: 15,
                    color: 'orange'
                }}>
                    { result }
                </b>
            </div>
        </section>
    );
}

export default MultipartSingleFileForm;