export interface NextApp {
    id: string;
    href: string;
    title: string;
    description: string;
}

export const nextApps: NextApp[] = [
    { id: 'users_list', href: '/users-list-app', title: 'Users List App', description: 'Next.js Sample application containing users listing feature with the implementation of tools such as TailwindCSS and DaisyUI.' },
    { id: 'blog_posts', href: '/blog-posts-app', title: 'Blog Posts App', description: 'Next.js Application that provides a medium for users to login using Google Auth services and create their posts through prompts with tags.' },
]