"use";

export default function Header() {
  return (
    <header className="bg-donker/80 backdrop-blur w-screen fixed top-0 h-24 flex justify-between px-24 items-center">
      <div>
        <a href="#" className="text-3xl font-roboto">
          mcdanang
        </a>
      </div>
      <div>
        {["About", "Projects", "Contact"].map((section) => {
          return (
            <a key={section} className="px-4">
              {section}
            </a>
          );
        })}
      </div>
    </header>
  );
}
