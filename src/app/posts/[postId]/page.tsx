'use client';

import React from 'react';
import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { dummyPosts } from '@/utils/postsdummydata';

const PostDetailContainer = styled.div`
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
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

const Username = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostText = styled.p`
  margin: 0 0 1.5rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
`;

const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`;

const PostFooter = styled.div`
  display: flex;
  padding: 1.5rem;
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
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.5rem 1.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
`;

const BackButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const PostDetail: React.FC = () => {
  const params = useParams();
  const postId = params?.postId as string;
  const post = dummyPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <PostDetailContainer>
        <PostCard>
          <PostContent>
            <PostText>Post not found</PostText>
          </PostContent>
        </PostCard>
      </PostDetailContainer>
    );
  }

  return (
    <PostDetailContainer>
      <BackButton onClick={() => window.history.back()}>← Back</BackButton>
      <PostCard>
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
          <InteractionButton>
            ❤️ {post.likes}
          </InteractionButton>
          <InteractionButton>
            💬 {post.comments}
          </InteractionButton>
          <InteractionButton>
            🔄 {post.shares}
          </InteractionButton>
        </PostFooter>
      </PostCard>
    </PostDetailContainer>
  );
};

export default PostDetail;
