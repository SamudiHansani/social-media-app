package com.practical.demo.services;

import com.practical.demo.dtos.CommentDto;
import com.practical.demo.dtos.PostDto;
import com.practical.demo.models.Comment;
import com.practical.demo.models.Post;
import com.practical.demo.repositories.CommentRepository;
import com.practical.demo.repositories.PostRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<PostDto> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        List<PostDto> postDtos = new ArrayList<>();

        for(Post post: posts) {
            Integer commentsCount = commentRepository.countByPost(post);
            PostDto postDto = modelMapper.map(post, PostDto.class);
            postDto.setCommentsCount(commentsCount);
            postDtos.add(postDto);
        }
        return postDtos;
    }

    public PostDto getPostById(Long id) {
        Post post = postRepository.findById(id).orElseThrow();
        List<Comment> comments = commentRepository.getAllByPost(post);
        PostDto postDto = modelMapper.map(post, PostDto.class);
        List<CommentDto> commentDtos = comments.stream().map(comment -> modelMapper.map(comment, CommentDto.class)).toList();
        postDto.setComments(commentDtos);
        postDto.setCommentsCount(commentDtos.size());
        return postDto;
    }

    public void createPost(PostDto postDto) {
        Post newPost = modelMapper.map(postDto, Post.class);
        postRepository.save(newPost);
    }

    public PostDto addComment(Long postId, Comment comment) {
        Post post = postRepository.findById(postId).orElseThrow();
        comment.setPost(post);
        commentRepository.save(comment);
        return modelMapper.map(post, PostDto.class);
    }
}
