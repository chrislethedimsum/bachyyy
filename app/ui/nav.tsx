import Image from "next/image";
import logo from "@/public/imgs/logo.png";
function Nav() {
  return (
    <nav className="capitalize content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[40px] items-center not-italic relative shrink-0 text-[16px] text-black text-center tracking-[-0.08px] whitespace-nowrap" data-name="Nav">
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">Home</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">FEATUREDWORK</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">EDU</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">P201.C4</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">BOOK STUDIO</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0">
        <p className="leading-[1.45]">Vào việc</p>
        <p>&nbsp;</p>
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="content-stretch flex items-center justify-between px-[64px] py-[24px] relative size-full" data-name="Header 1">
      <div className="h-[125.904px] relative shrink-0 w-[187px]" data-name="image 2">
        <Image alt="Logo Tầng High" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logo} />
      </div>
      <Nav />
    </header>
  );
}