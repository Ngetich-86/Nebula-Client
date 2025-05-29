'use client';

import PostBanner from "@/components/banners/PostBanner"
import PostList from "@/pages/posts/widgets/PostList"

const PostsPage = () => {
    return (
        <>
            <style jsx global>{`
                body {
                    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
                    color: #fff;
                    // font-family: 'Arial', sans-serif;
                }
            `}</style>
            <PostBanner />
            <PostList />
        </>
    )
}

export default PostsPage;