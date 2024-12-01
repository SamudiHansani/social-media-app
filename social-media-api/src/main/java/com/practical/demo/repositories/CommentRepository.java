package com.practical.demo.repositories;

import com.practical.demo.models.Comment;
import com.practical.demo.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Integer countByPost(Post post);

    List<Comment> getAllByPost(Post post);
}
