export default function Layout({
  children,
  no,
  title,
  id
}: {
  children: React.ReactNode;
  no: string;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="py-16">
      <header className={id === "contact"? "flex justify-center text-xl" : "w-full flex items-center text-2xl"}>
        <h1 className="font-roboto-mono mr-4">{no}</h1>
        <h1 className={["flex-shrink-0 ", id === 'contact'? "text-teal text-xl font-roboto-mono" : "text-white text-4xl font-roboto" ].join("")}>{title}</h1>
        <hr className={id === 'contact'? "hidden" : "ml-5 w-full border-[#112240]"}/>
      </header>
      <main>{children}</main>
    </div>
  );
}
