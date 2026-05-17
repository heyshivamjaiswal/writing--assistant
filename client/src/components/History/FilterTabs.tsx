import Button from '../ui/Button';

type filterProp = {
  filterType: string;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
};
export default function FilterTabs({ filterType, setFilterType }: filterProp) {
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => setFilterType('')}
        className={`px-3 py-1 text-xs rounded-full border ${
          filterType === '' ? 'bg-white text-black' : 'text-text-secondary'
        }`}
      >
        All
      </Button>
      <Button
        className="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-200 border border-purple-400 rounded-full
      "
        onClick={() => setFilterType('blog')}
      >
        Blog
      </Button>

      <Button
        className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-200 border border-green-400 rounded-full"
        onClick={() => setFilterType('Email')}
      >
        Email
      </Button>

      <Button
        className="px-2 py-1 text-xs font-semibold text-orange-600 bg-orange-200 border border-orange-400 rounded-full"
        onClick={() => setFilterType('adCopy')}
      >
        Ad Copy
      </Button>

      <Button
        className="px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-200 border border-pink-400 rounded-full"
        onClick={() => setFilterType('social')}
      >
        Social
      </Button>
    </div>
  );
}
