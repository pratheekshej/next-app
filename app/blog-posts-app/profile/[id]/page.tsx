"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "../../../../components/Profile";
import ComponentLoader from "../../../../components/Loader";

const UserProfile = ({ params }: any) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");

    const [userPosts, setUserPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            const response = await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
            setUserPosts(data);
            setIsLoading(false);
        };
        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        (!isLoading) ?
            <Profile
                name={userName}
                desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
                data={userPosts}
            /> :
            <ComponentLoader />
    );
};

export default UserProfile;