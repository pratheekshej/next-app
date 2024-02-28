"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }: any) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post: any) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(undefined);
    const [searchedResults, setSearchedResults] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();

        setAllPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const filterPrompts = (searchtext: string) => {
        const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
        return allPosts.filter(
            (item: any) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e: any) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.event);
        const timeOutMethod = () => {
            const searchResult = filterPrompts(e.target.value);
            setSearchedResults(searchResult);
        }
        const setTimeOutMethod: any = setTimeout(timeOutMethod, 500);

        // debounce method
        setSearchTimeout(setTimeOutMethod);
    };

    const handleTagClick = (tagName: string) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for a tag or a username'
                    onChange={(e: any) => handleSearchChange(e)}
                    value={searchText}
                    required
                    className='search_input peer'
                />
            </form>

            {/* All Prompts */}
            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
            )}
        </section>
    );
};

export default Feed;