package com.example.demo.service.impl;

import com.example.demo.dto.CourseRegiDTO;

import com.example.demo.entity.CourseRegiEntity;
import com.example.demo.repo.CourseRegiRepo;
import com.example.demo.service.CourseRegiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseRegiIMPL implements CourseRegiService {
     @Autowired
     private CourseRegiRepo courseRegiRepo;

    @Override
    public String saveCourseRegi(CourseRegiDTO courseRegiDTO) {
        CourseRegiEntity courseRegiEntity=new CourseRegiEntity(
                (int) courseRegiDTO.getId(),
                courseRegiDTO.getStudentName(),
                courseRegiDTO.getEmail(),
                courseRegiDTO.getLectName(),
                courseRegiDTO.getSubject()
        );
        courseRegiRepo.save(courseRegiEntity);
        return courseRegiDTO.getStudentName();
    }

    @Override
    public List<CourseRegiDTO> getCoursesByEmail(String email) {

        if(courseRegiRepo.existsByEmail(email)){
            List<CourseRegiEntity> courseRegiEntities = courseRegiRepo.findAllByEmail(email);
            return courseRegiEntities.stream()
                    .map(entity -> new CourseRegiDTO(
                            entity.getId(),
                            entity.getStudentName(),
                            entity.getEmail(),
                            entity.getLectName(),
                            entity.getSubject()
                    ))
                    .collect(Collectors.toList());
        }else{
            throw new RuntimeException("not found ");
        }

    }



}
