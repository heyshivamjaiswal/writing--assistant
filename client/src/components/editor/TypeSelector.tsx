import Button from '../ui/Button';

export default function TypeSelector() {
  return (
    <div className="bg-bg-card h-full w-[500px] flex flex-col justify-center gap-7 p-4 rounded-3xl">
      <div className="grid grid-cols-4  gap-2 w-full">
        <Button className="bg-purple-200 text-xs font-semibold text-purple-600 border border-purple-400 rounded-full py-1">
          Blog
        </Button>
        <Button className="bg-green-200 text-xs font-semibold text-green-600 border border-green-400 rounded-full py-1">
          Email
        </Button>
        <Button className="bg-orange-200 text-xs font-semibold text-orange-600 border border-orange-400 rounded-full py-1">
          Ad Copy
        </Button>
        <Button className="bg-pink-200 text-xs font-semibold text-pink-600 border border-pink-400 rounded-full py-1">
          Social
        </Button>
      </div>

      <div>
        <textarea
          rows={3}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
          }}
          className="w-full h-24 bg-bg-input py-5 text-text-primary border border-bg-base outline-none rounded-3xl px-4"
        />
      </div>
      <Button className="w-full bg-bg-base text-white rounded-full py-2">
        Generate
      </Button>
    </div>
  );
}
