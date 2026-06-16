import OutputPanel from '../../../components/editor/OutputPanel';
import TypeSelector from '../../../components/editor/TypeSelector';
import Topbar from '../../../components/layout/Topbar';
import { useDocumentStore } from '../../../store/useDocumentStore';

export default function Editor() {
  const selected = useDocumentStore((s) => s.selectedDocument);
  return (
    <div className="h-screen bg-bg-base flex flex-col overflow-hidden">
      {/* Topbar */}
      <Topbar />

      {/* Main Panels */}
      <div className="flex flex-1 gap-5 p-5 overflow-hidden">
        {/* Left */}
        <TypeSelector />

        {/* Right */}
        <OutputPanel />
      </div>
    </div>
  );
}
