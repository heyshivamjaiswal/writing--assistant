import { FaSearch } from 'react-icons/fa';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="flex gap-5">
      <div className="relative w-72">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-sm" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search documents..."
          className="w-full pl-10 pr-4 py-2 rounded-2xl bg-bg-input text-text-primary outline-none border border-border-sidebar"
        />
      </div>
    </div>
  );
}
