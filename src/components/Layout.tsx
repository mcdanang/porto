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
    <div id={id} className="py-16 max-md:max-w-[672px] md:max-w-[819px] xl:max-w-[1091px]">
      <header className={id === "contact"? "flex justify-center text-xl" : "w-full flex items-center"}>
        <h1 className="font-roboto-mono mr-4 text-xl md:text-2xl">{no}</h1>
        <h1 className={["flex-shrink-0 ", id === 'contact'? "text-teal text-xl font-roboto-mono" : "text-white text-2xl md:text-4xl font-roboto" ].join("")}>{title}</h1>
        <hr className={id === 'contact'? "hidden" : "ml-5 w-full border-2 border-[#112240]"}/>
      </header>
      <main>{children}</main>
    </div>
  );
}
