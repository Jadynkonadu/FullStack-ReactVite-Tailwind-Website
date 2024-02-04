package com.example.serverside.Controllers;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.serverside.Models.Visitor;
import com.example.serverside.Repositories.VisitorRepo;

@RestController
@RequestMapping("/visitors")
@CrossOrigin(origins = "https://jac-enterprises.onrender.com")
public class VisitorController {
    @Autowired
    private VisitorRepo visitorRepo;

    @GetMapping("/name/{name}")
    public List<Visitor> getVisitorByName(@PathVariable String name) {
        return visitorRepo.findByName(name);
    }

    @GetMapping("/all")
    public List<Visitor> getAllVisitors() {
        return visitorRepo.findAll();
    }

    @GetMapping("/shuffle")
public List<Visitor> shuffleVisitors() {
    List<Visitor> allVisitors = visitorRepo.findAll();
    Collections.shuffle(allVisitors);
    return allVisitors;
}
}
