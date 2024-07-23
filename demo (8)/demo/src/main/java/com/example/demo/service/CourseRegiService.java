package com.example.demo.service;

import com.example.demo.dto.CourseRegiDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourseRegiService {
   public String saveCourseRegi(CourseRegiDTO courseRegiDTO);


   List<CourseRegiDTO> getCoursesByEmail(String email);
}
