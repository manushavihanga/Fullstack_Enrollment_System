package com.example.demo.dto;

public class CourseRegiDTO {
    private long id;
    private String studentName;
    private String email;
    private String lectName;
    private String subject;

    public CourseRegiDTO() {
    }

    public CourseRegiDTO(int id, String studentName, String email, String lectName, String subject) {
        this.id = id;
        this.studentName = studentName;
        this.email = email;
        this.lectName = lectName;
        this.subject = subject;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLectName() {
        return lectName;
    }

    public void setLectName(String lectName) {
        this.lectName = lectName;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "CourseRegiDTO{" +
                "id=" + id +
                ", studentName='" + studentName + '\'' +
                ", email='" + email + '\'' +
                ", lectName='" + lectName + '\'' +
                ", subject='" + subject + '\'' +
                '}';
    }
}
