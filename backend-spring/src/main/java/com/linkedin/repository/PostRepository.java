package com.linkedin.repository;

import com.linkedin.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {

    public void deleteById(int id);
}
