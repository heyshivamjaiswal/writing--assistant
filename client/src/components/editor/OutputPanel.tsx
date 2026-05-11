type props = {
  output: string;
};

export default function OutputPanel({ output }: props) {
  return (
    <div className="flex-1 bg-bg-card min-h-[230px] p-6 rounded-3xl">
      <div className="text-center pt-40 text-text-primary whitespace-pre-wrap">
        {output || `Your content will be displayed here...`}
      </div>
    </div>
  );
}
