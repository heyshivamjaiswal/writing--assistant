import Button from '../ui/Button';

export default function TypeSelector() {
  return (
    <div className="bg-bg-card h-screen pl-5 flex flex-col justify-center ">
      <div className="flex flex-row gap-5 py-10 pl-8">
        <span className="bg-purple-200 h-6 w-13 text-center pt-0.5 text-xs font-semibold text-purple-600 border border-purple-400 rounded-full">
          Blog
        </span>
        <span className="bg-green-200  h-6 w-13 text-center pt-0.5 text-xs font-semibold text-green-600 border border-green-400 rounded-full">
          Email
        </span>
        <span className="bg-orange-200 h-6 w-18 text-center pt-0.5 text-xs font-semibold text-orange-600 border border-orange-400 rounded-full">
          Ad Copy
        </span>
        <span className="bg-pink-200 h-6 w-13 text-center pt-0.5 text-xs font-semibold text-pink-600 border border-pink-400 rounded-full">
          Social
        </span>
      </div>
      <div>
        <input
          type="text"
          className="bg-bg-input h-25 w-96 border border-bg-base rounded-3xl"
        />
      </div>
      <div className="pt-15">
        <Button className="bg-bg-base text-white w-96 rounded-full">
          Generate
        </Button>
      </div>
    </div>
  );
}
