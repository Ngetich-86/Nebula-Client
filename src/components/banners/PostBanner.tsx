'use client';

import React from 'react';
import styled from 'styled-components';

const PostBannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3');
  background-size: cover;
  background-position: center;
  filter: brightness(0.7);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
`;

const Emoji = styled.span`
  font-size: 1rem;
  margin-bottom: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 500px;
  line-height: 1.6;
  opacity: 0.9;
`;

const ActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ff4081;
  background: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SocialStats = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostBanner: React.FC = () => {
  return (
    <PostBannerContainer>
      <BackgroundImage />
      <ContentWrapper>
        <Emoji>✨</Emoji>
        <Title>Share Your Story</Title>
        <Description>
          Join our vibrant community and connect with like-minded creators.
          Share your moments, inspire others, and be part of something amazing!
        </Description>
        <ActionButton>Start Creating</ActionButton>
        <SocialStats>
          <Stat>👥 10K+ Members</Stat>
          <Stat>💬 50K+ Posts</Stat>
          <Stat>❤️ 1M+ Likes</Stat>
        </SocialStats>
      </ContentWrapper>
    </PostBannerContainer>
  );
};

export default PostBanner;
