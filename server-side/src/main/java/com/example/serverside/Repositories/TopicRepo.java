package com.example.serverside.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.serverside.Models.Topic;

public interface TopicRepo extends JpaRepository<Topic, Long>{
    List<Topic> findByName(String name);
}
