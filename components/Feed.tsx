"use client";

import { useState, useEffect, useCallback } from "react";
import PromptCard from "./PromptCard";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ComponentLoader from "./Loader";

const PromptCardList = ({ data, handleTagClick }: any) => {
    const router = useRouter();
    const handleEdit = (post: any) => {
        router.push(`/blog-posts-app/update-posts?id=${post._id}`);
    }

    return (
        <div className='mt-12 prompt_layout'>
            {data.map((post: any) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setAllPosts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        fetchPosts();
    }, []);

    const filterPrompts = (searchtext: string, posts: any = []) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        let postList = posts || allPosts;
        return [...postList].filter((item: any) => (
            regex.test(item.creator.username) ||
            regex.test(item.tag) ||
            regex.test(item.prompt)
        ));
    };

    const debounceSearch = (cb: any, time: number) => {
        let timer: any;
        return (...args: any) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => cb(...args), time);
        }
    }

    const handleSearchChange = useCallback(debounceSearch((searchText: string, posts: any[] = []) => {
        const searchResults: any = filterPrompts(searchText, posts);
        setSearchedResults(searchResults);
    }, 250), []);

    const handleTagClick = (tagName: string, posts: any[] = []) => {
        setSearchText(tagName);
        const searchResult: any = filterPrompts(tagName, posts);
        setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    value={searchText}
                    onChange={(e: any) => {
                        setSearchText(e.target.value);
                        handleSearchChange(e.target.value, allPosts);
                    }}
                    required
                    className='search_input peer'
                />
            </form>

            {/* All Prompts */}
            {
                !isLoading ? (
                    searchText ?
                        <PromptCardList
                            data={searchedResults}
                            handleTagClick={(tag: string) => handleTagClick(tag, allPosts)}
                        /> :
                        <PromptCardList
                            data={allPosts}
                            handleTagClick={(tag: string) => handleTagClick(tag, allPosts)}
                        />
                ) : (
                    <ComponentLoader />
                )

            }
        </section>
    );
};

export default Feed;