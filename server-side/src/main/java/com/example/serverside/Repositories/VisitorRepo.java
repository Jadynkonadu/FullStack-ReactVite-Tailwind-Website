package com.example.serverside.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.serverside.Models.Visitor;

public interface VisitorRepo extends JpaRepository<Visitor, Long> {
    List<Visitor> findByName(String name);
    
}
