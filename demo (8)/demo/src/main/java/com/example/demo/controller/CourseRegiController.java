package com.example.demo.controller;

import com.example.demo.dto.CourseRegiDTO;
import com.example.demo.entity.CourseRegiEntity;
import com.example.demo.service.CourseRegiService;
import com.example.demo.service.impl.CourseRegiIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/course")
@CrossOrigin("http://localhost:5173")
public class CourseRegiController {

    @Autowired
    private CourseRegiService courseRegiService;

    @PostMapping("/save-my-course")
    public String saveCourse(@RequestBody CourseRegiDTO courseRegiDTO){
       courseRegiService.saveCourseRegi(courseRegiDTO);
       return "saved success";
    }

    @GetMapping("/get-my-courses")
    public List<CourseRegiDTO> getCourses(@RequestParam String email) {
        System.out.println(email);
        return courseRegiService.getCoursesByEmail(email);
    }
   // @DeleteMapping("/delete-my-course")

}
