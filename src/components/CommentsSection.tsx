
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

type Comment = {
  id: number;
  content: string;
  author: string;
};

type CommentsSectionProps = {
  onCommentsChange: (count: number) => void;
};

export default function CommentsSection({
  onCommentsChange,
}: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState("");

  function handleAddComment() {
    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    const newComment: Comment = {
      id: Date.now(),
      content: trimmedContent,
      author: "Norhan Hamed",
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    onCommentsChange(updatedComments.length);
    setContent("");
  }

  return (
    <section className="space-y-3">
      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-2">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              {comment.author.charAt(0)}
            </div>

            <div className="flex-1 rounded-xl bg-gray-100 p-3">
              <p className="text-sm font-semibold text-gray-900">
                {comment.author}
              </p>
              <p className="text-sm text-gray-700">
                {comment.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form
        className="flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddComment();
        }}
      >
        <Input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a comment..."
          aria-label="Write a comment"
        />

        <Button
          type="submit"
          size="icon"
          aria-label="Add comment"
          disabled={!content.trim()}
        >
          <Send />
        </Button>
      </form>
    </section>
  );
}
