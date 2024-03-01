"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Profile from "../../../components/Profile";
import ComponentLoader from "@/components/Loader";

const MyProfile = () => {
    const router = useRouter();
    const { data: session }: any = useSession();

    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();
            setMyPosts(data);
            setIsLoading(false);
        };
        if (session?.user.id) fetchPosts();
    }, [session?.user.id]);

    const handleEdit = (post: any) => {
        router.push(`/blog-posts-app/update-posts?id=${post._id}`);
    };

    const handleDelete = async (post: any) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE",
                });
                const filteredPosts = myPosts.filter((item: any) => item._id !== post._id);
                setMyPosts(filteredPosts);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            {
                isLoading ?
                    <ComponentLoader /> :
                    <Profile
                        name='My'
                        desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
                        data={myPosts}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
            }
        </>
    );
};

export default MyProfile;