"use client";

const posts = [
  {
    image: "/tabla/haaland-tabla.jpg",
    title: "Haaland x Tabla",
    url: "https://www.instagram.com/reel/DRqpiuKjEr7/",
  },
  {
    image: "/tabla/malaar-duet.jpg",
    title: "Bhagat Naam Dev Ji — Raag Malaar",
    url: "https://www.instagram.com/reels/Da8JbYWRXEe/",
  },
  {
    image: "/tabla/tiger-sweater.jpg",
    title: "Dholki cover",
    url: "https://www.instagram.com/reel/DaxsoxJxf_u/",
  },
];

export default function FeaturedContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <a
          key={post.url}
          href={post.url}
          target="_blank"
          className="group block rounded-lg overflow-hidden border border-neutral/20 hover:border-gold transition-colors"
        >
          <div className="relative aspect-[9/16] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
          </div>
          <div className="p-3">
            <p className="text-paper text-sm">{post.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
}