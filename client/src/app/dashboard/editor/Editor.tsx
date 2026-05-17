import { useState } from 'react';
import OutputPanel from '../../../components/editor/OutputPanel';
import TypeSelector from '../../../components/editor/TypeSelector';
import Topbar from '../../../components/layout/Topbar';

export default function Editor() {
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
