"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

const CreatePost = () => {
    const router: any = useRouter();
    const { data: session }: any = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });

    const createPost = async (e: Event) => {
        e.preventDefault();
        setIsSubmitting(true);
        /* if (session) {
            console.log('>> session data : ', session);
            return;
        } */
        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                    name: session.user.name
                }),
            });

            if (response.ok) {
                router.push("/blog-posts-app");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type='Create'
            ingText='Creating'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPost}
        />
    );
};

export default CreatePost;