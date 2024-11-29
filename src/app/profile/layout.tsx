export default function Layout({
  displayfiles,
  listfolder,
  mainnote
}: {
  displayfiles: React.ReactNode;
  listfolder: React.ReactNode;
  mainnote: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-[100%] overflow-hidden bg-white text-black">
      {listfolder}
      {displayfiles}
      {mainnote}
    </div>
  );
}
