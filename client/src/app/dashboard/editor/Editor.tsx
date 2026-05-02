import OutputPanel from '../../../components/editor/OutputPanel';
import TypeSelector from '../../../components/editor/TypeSelector';

export default function Editor() {
  return (
    <div className="flex h-screen bg-bg-base p-5 gap-5">
      <TypeSelector />

      <OutputPanel />
    </div>
  );
}
