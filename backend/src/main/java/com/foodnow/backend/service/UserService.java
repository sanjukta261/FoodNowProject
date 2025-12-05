package com.foodnow.backend.service;

import com.foodnow.backend.dto.CreateUserRequest;
import com.foodnow.backend.entity.Canteen;
import com.foodnow.backend.entity.Role;
import com.foodnow.backend.entity.User;
import com.foodnow.backend.repository.CanteenRepository;
import com.foodnow.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepo;
    private final CanteenRepository canteenRepo;

    public UserService(UserRepository userRepo, CanteenRepository canteenRepo) {
        this.userRepo = userRepo;
        this.canteenRepo = canteenRepo;
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User createUser(CreateUserRequest req) {
        User user = new User();
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword()); // later we will encrypt
        user.setFullName(req.getFullName());
        user.setRole(req.getRole());

        // For STAFF or KIOSK, optionally attach a canteen
        if ((req.getRole() == Role.STAFF || req.getRole() == Role.KIOSK)
                && req.getCanteenId() != null) {

            Canteen canteen = canteenRepo.findById(req.getCanteenId())
                    .orElseThrow(() -> new RuntimeException("Canteen not found with id " + req.getCanteenId()));
            user.setCanteen(canteen);
        }

        return userRepo.save(user);
    }
}

