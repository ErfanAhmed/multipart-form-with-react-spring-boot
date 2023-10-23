package com.example.testProject;

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

    @PostMapping(value = "/multipart-multiple-file-with-form-data")
    public String multipartForm(@RequestPart("files") List<MultipartFile> files,
                                @RequestPart("form") Form form) {

        return files.size() + " files uploaded with " + form.getField1();
    }

    @PostMapping(value = "/single-file-model-attr")
    public String multipartForm(@ModelAttribute Document form) {

        return form.getFileType() + " is submitted with filename: " + form.getDocument().getOriginalFilename();
    }

    @PostMapping(value = "/single-file-with-nested-obj-model-attr")
    public String multipartForm(@ModelAttribute FormWithSingleFile form) {

        return form.getField1() + " your form submitted with filename: " + form.getDocument().getDocument().getOriginalFilename();
    }

    @PostMapping(value = "/files-with-nested-obj-list-model-attr")
    public String multipartForm(@ModelAttribute FormWithFiles form) {

        return form.getField1() + " your form submitted with file count : " + form.getDocuments().size();
    }
}
