'use client';

import { useState } from 'react';
import Image from 'next/image';

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    username: 'johndoe',
    userImage: 'https://i.pravatar.cc/150?img=1',
    content: 'Just launched my new website! Check it out and let me know what you think. #webdev #coding',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 12,
    shares: 5
  },
  {
    id: 2,
    username: 'sarahsmith',
    userImage: 'https://i.pravatar.cc/150?img=2',
    content: 'Beautiful sunset at the beach today! 🌅 #nature #photography',
    timestamp: '4 hours ago',
    likes: 128,
    comments: 24,
    shares: 8
  },
  {
    id: 3,
    username: 'techguru',
    userImage: 'https://i.pravatar.cc/150?img=3',
    content: 'Just finished reading "Clean Code" by Robert C. Martin. Highly recommend it to all developers! #programming #books',
    timestamp: '6 hours ago',
    likes: 89,
    comments: 15,
    shares: 3
  }
];

const Feed = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Create Post Section */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow">
            {/* Post Header */}
            <div className="p-4 flex items-center space-x-4">
              <div className="relative w-10 h-10">
                <Image
                  src={post.userImage}
                  alt={post.username}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{post.username}</h3>
                <p className="text-sm text-gray-500">{post.timestamp}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-4">
              <p className="text-gray-800">{post.content}</p>
            </div>

            {/* Post Actions */}
            <div className="px-4 py-3 border-t flex items-center justify-between">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-2 text-gray-500 hover:text-purple-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{post.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
