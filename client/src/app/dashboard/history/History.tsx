import { useState } from 'react';
import DocumentList from '../../../components/History/DocumentList';
import FilterTabs from '../../../components/History/FilterTabs';
import SearchBar from '../../../components/History/SearchBar';
import { documentsData } from '../../../data/mockData';

export default function History() {
  //filtering through title of the content
  const [search, setSearch] = useState('');

  //filtering through types
  const [filterType, setFilterType] = useState('');

  const filteredDocs = documentsData
    .filter((doc) => doc.title.toLowerCase().includes(search.toLowerCase()))
    .filter((doc) =>
      filterType === ''
        ? true
        : doc.type.toLowerCase() === filterType.toLowerCase()
    );

  return (
    <div className="bg-bg-base min-h-screen p-5">
      <header>
        <div className="flex  ml-40 gap-30 px-20 ">
          <SearchBar search={search} setSearch={setSearch} />

          <div className="flex items-center gap-4">
            <span className="text-xs text-text-secondary">Filters</span>
            <FilterTabs filterType={filterType} setFilterType={setFilterType} />
          </div>
        </div>
      </header>
      <div className="border border-border-sidebar mt-10"></div>
      <DocumentList docus={filteredDocs} />
    </div>
  );
}
