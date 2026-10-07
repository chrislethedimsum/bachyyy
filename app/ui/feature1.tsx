import art from "@/public/imgs/art.jpg";
import Image from "next/image";

function TextMobile() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">“studio is to be heard, not to be seen”</p>
      </div>
    </div>
  );
}

function ButtonMobile() {
  return (
    <button className="bg-black cursor-pointer relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-center text-ellipsis text-white tracking-[-0.08px] whitespace-nowrap">
            <p className="leading-[1.45] overflow-hidden">Call to action</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function ContentMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <TextMobile />
      <ButtonMobile />
    </div>
  );
}

function Feature1Mobile() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-center px-[24px] py-[80px] relative size-full" data-name="Feature 1">
      <div aria-hidden="true" className="flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-full" data-name="Image" role="presentation">
        <Image alt="ART" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={art} />
      </div>
      <ContentMobile />
    </section>
  );
}

function TextDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">“studio is to be heard, not to be seen”</p>
      </div>
    </div>
  );
}

function ButtonDesktop() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Call to action</p>
      </div>
    </button>
  );
}

function ContentDesktop() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Content">
      <TextDesktop />
      <ButtonDesktop />
    </div>
  );
}

function Feature1Desktop() {
  return (
    <section className="content-stretch flex gap-[64px] items-center px-[64px] py-[120px] relative size-full" data-name="Feature 1">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ContentDesktop />
      </div>
      <div aria-hidden="true" className="flex-[1_0_0] h-[432px] min-h-px min-w-px relative rounded-[16px]" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={art} />
      </div>
    </section>
  );
}

export default function Feature1() {
  return (
    <>
      <div className="block xl:hidden">
        <Feature1Mobile />
      </div>
      <div className="hidden xl:block">
        <Feature1Desktop />
      </div>
    </>
  );
}