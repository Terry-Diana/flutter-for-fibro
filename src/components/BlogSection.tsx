
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Pain Processing in Fibromyalgia",
    excerpt: "New research reveals insights into how the nervous system processes pain signals differently in people with fibromyalgia.",
    date: "May 10, 2025",
    author: "Dr. Emily Rodriguez",
    image: "/placeholder.svg",
    tags: ["Research", "Pain Science"]
  },
  {
    id: 2,
    title: "Managing Fibromyalgia Flares: Practical Tips",
    excerpt: "Learn effective strategies to prepare for, cope with, and recover from fibromyalgia flare-ups.",
    date: "April 28, 2025",
    author: "Lisa Thompson",
    image: "/placeholder.svg",
    tags: ["Self-Care", "Lifestyle"]
  },
  {
    id: 3,
    title: "The Connection Between Fibromyalgia and Sleep Disorders",
    excerpt: "Exploring the complex relationship between fibromyalgia symptoms and disrupted sleep patterns.",
    date: "April 15, 2025",
    author: "Dr. Michael Chen",
    image: "/placeholder.svg",
    tags: ["Sleep", "Research"]
  },
  {
    id: 4,
    title: "Navigating Work Life with Invisible Illness",
    excerpt: "Strategies for workplace accommodations and communication when living with fibromyalgia.",
    date: "March 30, 2025",
    author: "Rebecca Williams",
    image: "/placeholder.svg",
    tags: ["Work", "Advocacy"]
  },
  {
    id: 5,
    title: "Gentle Movement Practices for Fibromyalgia",
    excerpt: "Discover adaptive yoga, tai chi, and other movement therapies specifically designed for fibromyalgia.",
    date: "March 17, 2025",
    author: "James Peterson, PT",
    image: "/placeholder.svg",
    tags: ["Exercise", "Self-Care"]
  },
  {
    id: 6,
    title: "The Emotional Impact of Chronic Pain",
    excerpt: "Understanding the psychological aspects of living with fibromyalgia and strategies for emotional wellness.",
    date: "March 5, 2025",
    author: "Dr. Sarah Thompson",
    image: "/placeholder.svg",
    tags: ["Mental Health", "Coping"]
  }
];

const allTags = ["All", "Research", "Self-Care", "Lifestyle", "Sleep", "Work", "Advocacy", "Exercise", "Mental Health", "Coping"];

const BlogSection = () => {
  const [activeTag, setActiveTag] = React.useState("All");
  const [visiblePosts, setVisiblePosts] = React.useState(blogPosts.slice(0, 3));

  const filterByTag = (tag: string) => {
    setActiveTag(tag);
    if (tag === "All") {
      setVisiblePosts(blogPosts.slice(0, 3));
    } else {
      const filtered = blogPosts
        .filter(post => post.tags.includes(tag))
        .slice(0, 3);
      setVisiblePosts(filtered);
    }
  };

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Latest Articles & Updates
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Stay informed with the latest research, personal stories, and practical advice about fibromyalgia.
          </p>
        </div>

        {/* Tags filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeTag === tag ? "default" : "outline"}
              className={`rounded-full text-sm ${
                activeTag === tag 
                  ? "bg-primary text-white" 
                  : "text-primary hover:bg-primary/10"
              }`}
              onClick={() => filterByTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visiblePosts.length > 0 ? (
            visiblePosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">No articles found for this category.</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

// Blog card component
interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Card className="overflow-hidden hover-card h-full flex flex-col">
      <div className="aspect-video relative bg-secondary">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 m-4 flex gap-1">
          {post.tags.slice(0, 2).map(tag => (
            <Badge key={tag} className="bg-primary text-white">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-primary hover:text-primary-light">
          <a href="#">{post.title}</a>
        </CardTitle>
        <CardDescription className="flex items-center text-sm">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="link" className="text-primary p-0">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogSection;
