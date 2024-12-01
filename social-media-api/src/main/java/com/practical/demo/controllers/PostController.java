package com.practical.demo.controllers;

import com.practical.demo.dtos.PostDto;
import com.practical.demo.models.Comment;
import com.practical.demo.models.Post;
import com.practical.demo.services.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:5173/")
public class PostController {

    @Autowired
    PostService postService;

    @GetMapping("")
    public ResponseEntity<List<PostDto>> all() {
        List<PostDto> postDtos = postService.getAllPosts();
        return new ResponseEntity<>(postDtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> one(@PathVariable Long id) {
        return  new ResponseEntity<>(new Post(), HttpStatus.OK);
    }

    @PostMapping("")
    public void newPost(@RequestBody PostDto post) {
        postService.createPost(post);
    }

    @PostMapping("/{postId}/comments")
    public void newComment(@PathVariable Long postId, @RequestBody Comment comment) {

    }
}