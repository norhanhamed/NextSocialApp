
"use client";

import { useState } from "react";
import type { Post } from "@/components/CreatePost";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommentsSection from "@/components/CommentsSection";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);

  const likesCount = liked ? 1 : 0;

  return (
    <article className="space-y-4 rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-blue-100">
          <span className="font-semibold text-blue-700">N</span>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            Norhan Hamed
          </h3>
          <p className="text-xs text-gray-500">Just now · Public</p>
        </div>

        <Button type="button" variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </div>

      {post.content && (
        <p className="whitespace-pre-wrap text-gray-800">
          {post.content}
        </p>
      )}

      {post.image && (
        <img
          src={URL.createObjectURL(post.image)}
          alt="Post image"
          className="max-h-96 w-full rounded-lg object-contain"
        />
      )}

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{likesCount} likes</span>
        <span>{commentsCount} comments</span>
      </div>

      <div className="flex items-center justify-around border-t pt-2">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setLiked((previous) => !previous)}
          className={liked ? "text-red-600" : "text-gray-600"}
        >
          <Heart className={liked ? "fill-current" : ""} />
          Like
        </Button>

        <Button type="button" variant="ghost">
          <MessageCircle />
          Comment
        </Button>

        <Button type="button" variant="ghost">
          <Share2 />
          Share
        </Button>
      </div>
      <CommentsSection onCommentsChange={setCommentsCount} />
    </article>
  );
}
