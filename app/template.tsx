export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-grow min-h-0">
      <main className="flex flex-col justify-center items-center p-8">
        {children}
      </main>
    </div>
  );
}
