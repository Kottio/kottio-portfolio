// app/mdx-components.tsx (or app/blog/mdx-components.tsx)
import type { MDXComponents } from 'mdx/types';

// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // You can customize default HTML elements here, e.g., to add Tailwind classes:
    // h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    // p: ({ children }) => <p className="mb-4">{children}</p>,
    ...components, // This ensures any components passed via MDXRemote's 'components' prop are also used
  };
}