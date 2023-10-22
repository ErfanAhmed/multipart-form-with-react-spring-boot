package com.example.testProject;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author erfan
 * @since 10/22/23
 */
@RestController
@CrossOrigin("*")
public class TestController {

    @PostMapping(value = "/multipart-single-file")
    public String multipartForm(@RequestPart("file") MultipartFile file) {
        return file.getOriginalFilename() + " is uploaded";
    }

    @PostMapping(value = "/multipart-single-file-with-form-data")
    public String multipartForm(@RequestPart("file") MultipartFile file,
                                @RequestPart("form") Form form) {

        return file.getOriginalFilename() + " is uploaded with " + form.getField1();
    }

    @PostMapping(value = "/form-data")
    public String multipartForm(@RequestBody Form form) {

        return form.getField1() + " is submitter ";
    }

    @PostMapping(value = "/multipart-multiple-file-with-form-data")
    public String multipartForm(@RequestPart("files") List<MultipartFile> files,
                                @RequestPart("form") Form form) {

        return files.size() + " files uploaded with " + form.getField1();
    }
}
