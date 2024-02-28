export interface NextApp {
    id: string;
    href: string;
    title: string;
    description: string;
}

export const nextApps: NextApp[] = [
    { id: 'blog_posts', href: '/blog-posts-app', title: 'Blog Posts App', description: 'A new Next.js App feature with Blogs' },
    { id: 'users_list', href: '/users-list-app', title: 'Users List App', description: 'A new Next.js App feature with Users' }
]