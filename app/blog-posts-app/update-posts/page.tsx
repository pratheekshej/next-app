"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "../../../components/Form";
import ComponentLoader from "@/components/Loader";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const [post, setPost] = useState({ prompt: "", tag: "", });
    const [isLoading, setIsLoading] = useState(false);
    const [submitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            setIsLoading(true);
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
            setIsLoading(false);
        };
        if (promptId) getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e: Event) => {
        e.preventDefault();
        setIsSubmitting(true);
        if (!promptId) return alert("Missing PromptId!");
        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
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
        !isLoading ?
            <Form
                type='Edit'
                label='Update'
                ingText='Updating'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            /> :
            <ComponentLoader />
    );
};

export default UpdatePrompt;