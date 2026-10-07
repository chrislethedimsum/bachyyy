import Image from "next/image";
import pattern4 from "@/public/imgs/pattern/4.png";
import pattern5 from "@/public/imgs/pattern/5.png";
import pattern6 from "@/public/imgs/pattern/6.png";

function TextMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-full">
        <h1 className="block leading-[1.1]">CHÚNG TÔI LÀM GÌ?</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Hệ sinh thái dịch vụ toàn diện cho ngành sáng tạo</p>
      </div>
    </div>
  );
}

function Hero1Mobile() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[80px] relative size-full" data-name="Hero 1">
      <TextMobile />
    </section>
  );
}

function TextDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[64px] text-black tracking-[-1.28px] w-[740px]">
        <h1 className="block leading-[1.1]">CHÚNG TÔI LÀM GÌ?</h1>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] tracking-[-0.12px] w-[min-content]">
        <p className="leading-[1.45]">Hệ sinh thái dịch vụ toàn diện cho ngành sáng tạo</p>
      </div>
    </div>
  );
}

function Hero1Desktop() {
  return (
    <section className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[64px] py-[120px] relative size-full" data-name="Hero 1">
      <TextDesktop />
    </section>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic p-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
          <h5 className="block leading-[1.2]">{`Sản xuất & Xử lý Âm thanh`}</h5>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <ul className="list-disc">
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.45]">{`Sáng tác & sản xuất nhạc theo yêu cầu`}</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.45]">Thu âm vocal chuyên nghiệp</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.45]">Mixing, Remix, Mastering</span>
            </li>
            <li className="mb-0 ms-[27px]">
              <span className="leading-[1.45]">Tune Vocal / Chỉnh pitch</span>
            </li>
            <li className="ms-[27px]">
              <span className="leading-[1.45]">{`Sound Design & VFX`}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative rounded-[16px]" data-name="Card 3">
      <Text />
      <div aria-hidden="true" className="aspect-[560/570] relative shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" fill className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={pattern5} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
          <h5 className="block leading-[1.2]">Sản phẩm Âm nhạc cho Producer</h5>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <p className="mb-0">{`Bán beat độc quyền & không độc quyền`}</p>
          <p className="mb-0">Sample pack, sound pack</p>
          <p>Tài nguyên âm thanh phục vụ sản xuất nhạc</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-[359.001px] relative shrink-0 w-full max-w-[560px]" data-name="Union">
        <Image alt="" fill className="absolute block max-w-none object-cover pointer-events-none size-full" src={pattern4} />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Card 1">
      <Text1 />
      <Frame />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic p-[32px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
          <h5 className="block leading-[1.2]">{`Biểu diễn & Đào tạo`}</h5>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <p className="mb-0">DJ biểu diễn sự kiện</p>
          <p className="mb-0">Dạy DJ 1:1</p>
          <p className="mb-0">Đào tạo sản xuất âm nhạc</p>
          <p>{`Tổ chức & vận hành sự kiện âm nhạc`}</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Card 2">
      <Text2 />
      <div aria-hidden="true" className="aspect-[560/192.5] relative shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" fill className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={pattern6} />
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-h-px min-w-px relative" data-name="Column">
      <Card />
      <Card1 />
    </div>
  );
}

function Grid() {
  return (
    <li className="content-stretch flex flex-col xl:flex-row flex-[1_0_0] gap-[32px] items-start min-h-px min-w-px relative w-full" data-name="Grid">
      <Card2 />
      <Column />
    </li>
  );
}

function FeatureCards() {
  return (
    <ul className="content-stretch flex flex-col items-center justify-center px-[64px] py-[120px] relative size-full" data-name="Feature cards 2">
      <Grid />
    </ul>
  );
}

function Feature3() {
  return(
    <>
      <div className="block xl:hidden">
        <Hero1Mobile />
        <FeatureCards />
      </div>
      <div className="hidden xl:block">
        <Hero1Desktop />
        <FeatureCards />
      </div>
      
    </>
  );
}

export default Feature3;