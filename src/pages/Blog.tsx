// import React from "react";
// import codegirl from "../images/codegirl.jpg";


// const Blog = () => {
//   const posts = [
//     {
//       id: 1,
//       title: "Welcome to My Dev Journey",
//       date: "November 11, 2025",
//       category: "Personal",
//       readTime: "3 min read",
//       excerpt:
//         "Starting my blog journey as an aspiring Front-End Developer. Here I'll share insights, lessons learned, and tips about web development, UX/UI design, and my path in tech.",
//       content: `I finally decided to start a blog section on my website. I’m not completely sure yet where it will go, but I thought it could be fun to share what I do, what I’m learning, or just something that I find interesting as a front-end developer.

// I’ve been learning front-end for about two years now through bootcamp, courses, mentoring program, and my own projects. It’s been, and still is, an exciting journey, but sometimes also a bit challenging, because the tech world changes fast and there’s always something new to discover.

// I don’t want to force myself to post regularly or share daily updates. I want it to be relaxed, like a conversation with someone who is also interested in what I do. I’ll write about the projects I’m working on, what I’m learning, and what inspires me.

// So, welcome to my blog! Let’s see where this goes.`,
//       image: codegirl,
//     },
//   ];

//   const [selectedPost, setSelectedPost] = React.useState<
//     (typeof posts)[0] | null
//   >(null);

//   return (
//     <div className="blog-root">
//       <div className="container">
//         {/* Header */}
//         <div className="blog-header fade-up">
//           <h2 className="blog-subtitle">
//             Thoughts, insights, and stories from a Front-End Developer
//           </h2>
//         </div>

//         {/* Posts Grid */}
//         <div className="blog-posts fade-up">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="blog-card"
//               onClick={() => setSelectedPost(post)}
//             >
//               <div className="blog-card-header">
//                 <span className="blog-category">{post.category}</span>
//                 <span className="blog-read-time">{post.readTime}</span>
//               </div>
//               <h2>{post.title}</h2>
//               <p className="blog-excerpt">{post.excerpt}</p>
//               <div className="blog-meta">
//                 <span className="blog-date">{post.date}</span>
//                 <span className="blog-link">Read More →</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Modal - Full Post */}
//         {selectedPost && (
//           <div
//             className="blog-modal-overlay"
//             onClick={() => setSelectedPost(null)}
//           >
//             <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
//               <button
//                 className="blog-close"
//                 onClick={() => setSelectedPost(null)}
//               >
//                 ✕
//               </button>
//               <article className="blog-full-post">
//                 <div className="blog-post-header">
//                   <span className="blog-category">{selectedPost.category}</span>
//                   <h1>{selectedPost.title}</h1>
//                   <div className="blog-post-meta">
//                     <span>{selectedPost.date}</span>
//                     <span>•</span>
//                     <span>{selectedPost.readTime}</span>
//                   </div>
//                 </div>
//                 {/* obrazek przed tekstem */}
//                 {selectedPost.image && (
//                   <img
//                     src={selectedPost.image}
//                     alt={selectedPost.title + " image"}
//                     className="blog-post-image"
//                   />
//                 )}
//                 <div className="blog-post-content">
//                   {selectedPost.content.split("\n\n").map((paragraph, idx) => (
//                     <p key={idx}>{paragraph}</p>
//                   ))}
//                 </div>
//               </article>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blog;
