package com.example.testProject;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author erfan
 * @since 10/23/23
 */
@Getter
@Setter
public class Document {
    private String fileName;
    private String fileType;
    private MultipartFile document;
}
