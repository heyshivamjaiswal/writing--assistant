import DocumentList from '../../../components/History/DocumentList';
import FilterTabs from '../../../components/History/FilterTabs';
import SearchBar from '../../../components/History/SearchBar';

export default function History() {
  return (
    <div className="bg-bg-base h-full p-5">
      <header>
        <div className="flex  ml-40 gap-30 px-20 ">
          <SearchBar />

          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary">Filters</span>
            <FilterTabs />
          </div>
        </div>
      </header>
      <div className="border border-border-sidebar mt-10"></div>9
      <DocumentList />
    </div>
  );
}
