import Image from "next/image";
import smile from "@/public/imgs/symbol/smile.png";
import pattern1 from "@/public/imgs/pattern/1.png";
import pattern2 from "@/public/imgs/pattern/2.png";
import pattern3 from "@/public/imgs/pattern/3.png";


function NameMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center not-italic relative shrink-0" data-name="Name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[20px] text-black text-center tracking-[-0.3px] w-[320px]">Nâng tầm âm thanh. Định hình phong cách. Kích hoạt sáng tạo.</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] min-w-full relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Tầng High Studio là hệ sinh thái dịch vụ âm nhạc và sản xuất nội dung dành cho nghệ sĩ, nhà sáng tạo và thương hiệu hiện đại. `}</p>
        <p>Chúng tôi cung cấp giải pháp trọn gói từ ý tưởng, sản xuất, ghi hình đến phân phối và thương mại hóa sản phẩm sáng tạo.</p>
      </div>
    </div>
  );
}

function AuthorMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[350px]" data-name="Author">
      <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[48px]" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={smile} />
      </div>
      <NameMobile />
    </div>
  );
}

function Quote1Mobile() {
  return (
    <section className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[32px] py-[80px] relative size-full" data-name="Quote 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[-0.64px] w-[min-content]">
        <h3 className="block leading-[1.3]">TẦNG HIGH STUDIO</h3>
      </div>
      <AuthorMobile />
    </section>
  );
}

function NameDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0" data-name="Name">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[24px] text-black tracking-[-0.36px] whitespace-nowrap">Nâng tầm âm thanh. Định hình phong cách. Kích hoạt sáng tạo.</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] min-w-full relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`Tầng High Studio là hệ sinh thái dịch vụ âm nhạc và sản xuất nội dung dành cho nghệ sĩ, nhà sáng tạo và thương hiệu hiện đại. `}</p>
        <p>Chúng tôi cung cấp giải pháp trọn gói từ ý tưởng, sản xuất, ghi hình đến phân phối và thương mại hóa sản phẩm sáng tạo.</p>
      </div>
    </div>
  );
}

function AuthorDesktop() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Author">
      <div aria-hidden="true" className="relative rounded-[8px] shrink-0 size-[64px]" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={smile} />
      </div>
      <NameDesktop />
    </div>
  );
}

function Quote1Desktop() {
  return (
    <section className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[64px] py-[120px] relative size-full" data-name="Quote 1">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[32px] text-black text-center tracking-[-0.64px] w-[min-content]">
        <h3 className="block leading-[1.3]">TẦNG HIGH STUDIO</h3>
      </div>
      <AuthorDesktop />
    </section>
  );
}

function TextMobile() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2]">Đặt lịch thu âm</h5>
      </div>
    </div>
  );
}

function Card1Mobile() {
  return (
    <li className="content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-[224px]" data-name="Card 1">
      <div aria-hidden="true" className="aspect-[327/436] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern1} />
      </div>
      <TextMobile />
    </li>
  );
}

function TextMobile1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
        <h5 className="block leading-[1.2]">Nhận báo giá</h5>
      </div>
    </div>
  );
}

function Card2Mobile() {
  return (
    <li className="content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-[224px]" data-name="Card 2">
      <div aria-hidden="true" className="aspect-[327/436] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern2} />
      </div>
      <TextMobile1 />
    </li>
  );
}

function TextMobile2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">
        <h5 className="block leading-[1.2]">Xem dịch vụ</h5>
      </div>
    </div>
  );
}

function Card3Mobile() {
  return (
    <li className="content-stretch flex flex-col gap-[24px] items-start min-w-[224px] relative rounded-[8px] shrink-0 w-[224px]" data-name="Card 3">
      <div aria-hidden="true" className="aspect-[327/436] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern3} />
      </div>
      <TextMobile2 />
    </li>
  );
}

function FeatureCards1Mobile() {
  return (
    <ul className="content-stretch flex gap-[48px] items-start px-[24px] py-[80px] relative size-full" data-name="Feature cards 1">
      <Card1Mobile />
      <Card2Mobile />
      <Card3Mobile />
    </ul>
  );
}

function TextDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2]">Đặt lịch thu âm</h5>
      </div>
    </div>
  );
}

function Card1Desktop() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 1">
      <div aria-hidden="true" className="aspect-[362.6666564941406/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern1} />
      </div>
      <TextDesktop />
    </li>
  );
}

function TextDesktop1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2]">Nhận báo giá</h5>
      </div>
    </div>
  );
}

function Card2Desktop() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 2">
      <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern2} />
      </div>
      <TextDesktop1 />
    </li>
  );
}

function TextDesktop2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
        <h5 className="block leading-[1.2]">Xem dịch vụ</h5>
      </div>
    </div>
  );
}

function Card3Desktop() {
  return (
    <li className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start max-w-[388px] min-h-px min-w-[336px] relative rounded-[8px]" data-name="Card 3">
      <div aria-hidden="true" className="aspect-[362.66668701171875/483] relative rounded-[16px] shrink-0 w-full" data-name="Image" role="presentation">
        <Image alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={pattern3} />
      </div>
      <TextDesktop2 />
    </li>
  );
}

function FeatureCards1Desktop() {
  return (
    <ul className="content-stretch flex gap-[32px] items-start justify-center px-[64px] py-[120px] relative size-full" data-name="Feature cards 1">
      <Card1Desktop />
      <Card2Desktop />
      <Card3Desktop />
    </ul>
  );
}

function Feature2() {
  return (
    <>
      <div className="block xl:hidden">
        <Quote1Mobile />
        <FeatureCards1Mobile />
      </div>
      <div className="hidden xl:block">
        <Quote1Desktop />
        <FeatureCards1Desktop />
      </div>
    </>
  );
}

export default Feature2;