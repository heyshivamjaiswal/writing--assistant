import { useState } from 'react';

import DashboardLayout from '../../../components/layout/DashboardLayout';

import DocumentList from '../../../components/History/DocumentList';
import FilterTabs from '../../../components/History/FilterTabs';
import SearchBar from '../../../components/History/SearchBar';

import { useDocumentStore } from '../../../store/useDocumentStore';

export default function History() {
  const documents = useDocumentStore((s) => s.documents);

  const [search, setSearch] = useState('');

  const [filterType, setFilterType] = useState('');

  const filteredDocs = documents
    .filter((doc) => doc.title.toLowerCase().includes(search.toLowerCase()))
    .filter((doc) =>
      filterType === ''
        ? true
        : doc.type.toLowerCase() === filterType.toLowerCase()
    );

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <SearchBar search={search} setSearch={setSearch} />

        <div className="flex items-center gap-4">
          <span className="text-xs text-text-secondary">Filters</span>

          <FilterTabs filterType={filterType} setFilterType={setFilterType} />
        </div>
      </div>

      <div className="border-b border-border-sidebar mb-6" />

      <DocumentList docus={filteredDocs} />
    </DashboardLayout>
  );
}
