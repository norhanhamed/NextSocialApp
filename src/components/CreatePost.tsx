
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export type Post = {
  id: number;
  content: string;
  image: File | null;
};

type CreatePostProps = {
  onCreatePost: (post: Post) => void;
};

export default function CreatePost({
  onCreatePost,
}: CreatePostProps) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(
    null
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (!image) {
      setImagePreview(null);
      return;
    }

    const previewUrl = URL.createObjectURL(image);
    setImagePreview(previewUrl);

    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [image]);

  function handleSubmit() {
    if (!content.trim() && !image) {
      setError("Please write something or choose an image.");
      return;
    }

    const newPost: Post = {
      id: Date.now(),
      content: content.trim(),
      image,
    };

    onCreatePost(newPost);

    setContent("");
    setImage(null);
    setError("");
  }

  return (
    <section className="space-y-4 rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Create Post
      </h2>

      <Textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setError("");
        }}
        className="min-h-24 resize-y"
      />

      <div className="space-y-3">
        <label
          htmlFor="post-image"
          className="block cursor-pointer text-sm font-medium text-gray-700"
        >
          Choose an image
        </label>

        <input
          id="post-image"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selectedFile = e.target.files?.[0] ?? null;

            if (selectedFile && !selectedFile.type.startsWith("image/")) {
              setError("Please select a valid image.");
              return;
            }

            setImage(selectedFile);
            setError("");
          }}
          className="block w-full text-sm text-gray-600 file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-3 file:py-2"
        />

        {imagePreview && (
          <div className="space-y-2">
            <img
              src={imagePreview}
              alt="Selected post image preview"
              className="max-h-72 w-full rounded-lg object-contain"
            />

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setImage(null);
                setError("");
              }}
            >
              Remove image
            </Button>
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="flex justify-end">
        <Button type="button" onClick={handleSubmit}>
          Create Post
        </Button>
      </div>
    </section>
  );
}
