package com.foodnow.backend.controller;

import com.foodnow.backend.dto.CreateUserRequest;
import com.foodnow.backend.entity.User;
import com.foodnow.backend.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/users")
public class AdminUserController {

    private final UserService userService;

    public AdminUserController(UserService userService) {
        this.userService = userService;
    }

    // GET /api/admin/users
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAll();
    }

    // POST /api/admin/users
    @PostMapping
    public User createUser(@RequestBody CreateUserRequest request) {
        return userService.createUser(request);
    }
}

