import DashboardLayout from '../../../components/layout/DashboardLayout';

import OutputPanel from '../../../components/editor/OutputPanel';
import TypeSelector from '../../../components/editor/TypeSelector';

export default function Editor() {
  return (
    <DashboardLayout>
      <div className="flex gap-5 h-full">
        <TypeSelector />

        <OutputPanel />
      </div>
    </DashboardLayout>
  );
}
