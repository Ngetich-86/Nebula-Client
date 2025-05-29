export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  tags: string[];
}

export const dummyPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      username: "@sarahj"
    },
    content: "Just launched my new photography portfolio! Check out my latest nature shots 🌿📸 #photography #nature",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    likes: 245,
    comments: 32,
    shares: 12,
    timestamp: "2024-03-15T10:30:00Z",
    tags: ["photography", "nature", "portfolio"]
  },
  {
    id: "2",
    author: {
      name: "Mike Chen",
      avatar: "https://i.pravatar.cc/150?img=2",
      username: "@mikechen"
    },
    content: "Excited to share my latest coding project! Built a real-time chat application using React and WebSocket 🚀 #coding #webdev",
    likes: 189,
    comments: 45,
    shares: 23,
    timestamp: "2024-03-14T15:45:00Z",
    tags: ["coding", "webdev", "react"]
  },
  {
    id: "3",
    author: {
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=3",
      username: "@emmaw"
    },
    content: "Beautiful morning hike in the mountains! The view was absolutely breathtaking 🏔️ #hiking #nature",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    likes: 432,
    comments: 67,
    shares: 89,
    timestamp: "2024-03-13T08:15:00Z",
    tags: ["hiking", "nature", "mountains"]
  },
  {
    id: "4",
    author: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?img=4",
      username: "@alexr"
    },
    content: "Just finished reading 'The Midnight Library' - highly recommend it! What's everyone else reading? 📚 #books #reading",
    likes: 156,
    comments: 89,
    shares: 34,
    timestamp: "2024-03-12T20:00:00Z",
    tags: ["books", "reading", "recommendations"]
  },
  {
    id: "5",
    author: {
      name: "Lisa Park",
      avatar: "https://i.pravatar.cc/150?img=5",
      username: "@lisap"
    },
    content: "My new art exhibition opens next week! Here's a preview of some of my latest pieces 🎨 #art #exhibition",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    likes: 567,
    comments: 123,
    shares: 78,
    timestamp: "2024-03-11T14:20:00Z",
    tags: ["art", "exhibition", "creativity"]
  }
];
