package com.example.serverside;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.serverside.Models.Topic;
import com.example.serverside.Models.Visitor;
import com.example.serverside.Repositories.TopicRepo;
import com.example.serverside.Repositories.VisitorRepo;

@Component
public class Populator implements CommandLineRunner {
    
    @Autowired
    private VisitorRepo visitorRepo;

    @Autowired
    private TopicRepo topicRepo;

    @Override
    public void run(String...args) throws Exception{
        
        Visitor visitor1 = new Visitor("John Garvey", "Professor at Mars University", "As a professor at Mars University, I find solace and inspiration in the daily revelations brought forth by NASA's APOD & JAC Enterprises. ");
        visitorRepo.save(visitor1);

        Visitor visitor2 = new Visitor("Melissa Walnut", "Stay-At-Home Mom", "From the comfort of our home, JACs website has become a magical gateway for my children and me to embark on celestial adventures. ");
        visitorRepo.save(visitor2);

        Visitor visitor3 = new Visitor("Hubert Gigglehumpty", "Aspiring Astronaut", "Exploring the cosmos from the confines of our screens, powered by the boundless wonder of NASA's APOD, ignites the same adventurous spirit that fuels my dream of venturing beyond.");
        visitorRepo.save(visitor3);
        
        Visitor visitor4 = new Visitor("Clara Lawson", "Zumba Instructor", "Much like the rhythmic universe, where stars dance through the galaxies, NASA's APOD website fuels my cosmic curiosity as a Zumba instructor.  ");
        visitorRepo.save(visitor4);

        Visitor visitor5 = new Visitor("Tavion Jackson III", "Student Athlete", "Training and reaching for the stars share a common essence of pushing boundaries. As a student athlete, JAC and NASA fuel my drive by showcasing the limitless potential of human exploration.  ");
        visitorRepo.save(visitor5);

        Visitor visitor6 = new Visitor("Amber Dickinson", "Expert Coupon Collector", 
        "Just as I meticulously gather and piece together coupons to create savings masterpieces, NASA's APOD website offers a different kind of treasure hunt. ");
        visitorRepo.save(visitor6);

        Topic topic1 = new Topic("Apollo 11: Landing on The Moon", "Apollo 11 was the first successful mission to land humans on the Moon, with Neil Armstrong taking the historic step onto its surface in 1969.");
        topicRepo.save(topic1);

        Topic topic2 = new Topic("Mars Pathfinder Touches Down", "The Mars Pathfinder mission, launched by NASA in 1996, successfully delivered the Sojourner rover to the Martian surface, pioneering a new era of planetary exploration by studying the Red Planet's geology and climate.");
        topicRepo.save(topic2);

        Topic topic3 = new Topic("Columbia Makes History", "Columbia, the inaugural space shuttle, introduced a new era of reusable spacecraft in 1981, transforming human spaceflight.");
        topicRepo.save(topic3);

        Topic topic4 = new Topic("Apollo 13: Space Rescue", "The Apollo 13 mission, launched by NASA in 1970, faced a life-threatening crisis in space when an oxygen tank exploded, but through ingenuity and teamwork, the astronauts safely returned to Earth.");
        topicRepo.save(topic4);
    }

}
