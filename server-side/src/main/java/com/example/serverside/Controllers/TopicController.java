package com.example.serverside.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.serverside.Models.Topic;
import com.example.serverside.Repositories.TopicRepo;

@RestController
@RequestMapping("/topic")
@CrossOrigin(origins = "https://jac-enterprises.onrender.com")
public class TopicController {
    @Autowired
    private TopicRepo topicRepo;

    @GetMapping("/name/{name}")
    public List<Topic> getTopicByName(@PathVariable String name) {
        return topicRepo.findByName(name);
    }

    @GetMapping("/all")
    public List<Topic> getAllTopics() {
        return topicRepo.findAll();
    }
}
