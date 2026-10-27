
"use client";

import { useEffect, useState } from "react";
import HomeLayout from "@/components/HomeLayout";
import CreatePost, { type Post } from "@/components/CreatePost";
import PostCard from "@/components/PostCard";

function PostImage({ file }: { file: File }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file]);

  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt="Post image"
      className="mt-3 max-h-80 w-full rounded-lg object-contain"
    />
  );
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  function addPost(newPost: Post) {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  }

  return (
    <HomeLayout>
      <div className="mx-auto max-w-2xl space-y-5">
        <CreatePost onCreatePost={addPost} />

        {posts.map((post) => (
           <PostCard key={post.id} post={post} />

        ))}
      </div>
    </HomeLayout>
  );
}
