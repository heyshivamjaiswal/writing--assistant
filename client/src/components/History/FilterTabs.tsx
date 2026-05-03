export default function FilterTabs() {
  return (
    <div className="flex items-center gap-2">
      <p className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-200 border border-purple-400 rounded-full">
        Blog
      </p>

      <p className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-200 border border-green-400 rounded-full">
        Email
      </p>

      <p className="px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-200 border border-orange-400 rounded-full">
        Ad Copy
      </p>

      <p className="px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-200 border border-pink-400 rounded-full">
        Social
      </p>
    </div>
  );
}
