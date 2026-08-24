import FeaturedContent from "./FeafuredContent";

export default function TablaPage() {
  return (
    <main className="min-h-screen bg-ink text-paper px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-3xl mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Featured content
        </h1>
        <FeaturedContent />
      </div>
    </main>
  );
}