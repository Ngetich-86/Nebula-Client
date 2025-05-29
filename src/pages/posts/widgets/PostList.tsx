'use client';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { Post, dummyPosts } from '@/utils/postsdummydata';

const PostListContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  min-height: 100vh;
`;

const PostCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

const Username = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

const PostContent = styled.div`
  padding: 1rem;
`;

const PostText = styled.p`
  margin: 0 0 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PostFooter = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  gap: 2rem;
`;

const InteractionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const PostList: React.FC = () => {
  const router = useRouter();

  const handlePostClick = (postId: string) => {
    router.push(`/posts/${postId}`);
  };

  return (
    <PostListContainer>
      {dummyPosts.map((post) => (
        <PostCard key={post.id} onClick={() => handlePostClick(post.id)}>
          <PostHeader>
            <Avatar src={post.author.avatar} alt={post.author.name} />
            <AuthorInfo>
              <AuthorName>{post.author.name}</AuthorName>
              <Username>{post.author.username}</Username>
            </AuthorInfo>
          </PostHeader>
          <PostContent>
            <PostText>{post.content}</PostText>
            {post.image && <PostImage src={post.image} alt="Post content" />}
            <Tags>
              {post.tags.map((tag) => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </Tags>
          </PostContent>
          <PostFooter>
            <InteractionButton onClick={(e) => e.stopPropagation()}>
              ❤️ {post.likes}
            </InteractionButton>
            <InteractionButton onClick={(e) => e.stopPropagation()}>
              💬 {post.comments}
            </InteractionButton>
            <InteractionButton onClick={(e) => e.stopPropagation()}>
              🔄 {post.shares}
            </InteractionButton>
          </PostFooter>
        </PostCard>
      ))}
    </PostListContainer>
  );
};

export default PostList;