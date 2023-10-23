package com.example.testProject;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * @author erfan
 * @since 10/23/23
 */
@Getter
@Setter
public class FormWithFiles extends Form {

    @Builder.Default
    private List<Document> documents;

    public FormWithFiles() {
        documents = new ArrayList<>();
    }
}
