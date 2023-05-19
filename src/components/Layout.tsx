export default function Layout({
  children,
  no,
  title,
}: {
  children: React.ReactNode;
  no: string;
  title: string;
}) {
  return (
    <div className="py-16">
      <header className="w-full flex items-center">
        <h1 className="font-roboto-mono text-2xl mr-4">{no}</h1>
        <h1 className=" flex-shrink-0 font-roboto text-4xl text-white">{title}</h1>
        <hr className="ml-5 w-full border-[#112240]"/>
      </header>
      <main>{children}</main>
    </div>
  );
}
