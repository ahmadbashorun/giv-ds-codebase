import { imgGivAndroid, imgDesignSystem, imgEllipse6 } from "./svg-11pqa";

function GivAndroid() {
  return (
    <div className="absolute bottom-0 left-[65.07%] right-[-36.18%] top-0" data-name="Giv. Android">
      <img className="block max-w-none size-full" src={imgGivAndroid} />
    </div>
  );
}

function Owner() {
  return (
    <div className="content-stretch flex gap-5 items-start justify-start relative shrink-0" data-name="Owner">
      <div className="font-['Gilroy-Bold:☞',_sans-serif] h-[139px] leading-[40px] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.5px] w-[462px]">
        <p className="mb-0">{`Components UI-Kit and `}</p>
        <p>Style Library</p>
      </div>
    </div>
  );
}

function Persons() {
  return (
    <div className="content-stretch flex flex-col gap-6 h-[87px] items-start justify-start relative shrink-0" data-name="Persons">
      <Owner />
    </div>
  );
}

function Title() {
  return (
    <div className="absolute content-stretch flex flex-col gap-7 inset-[37.5%_53.06%_35.45%_11.67%] items-start justify-start" data-name="Title">
      <div className="font-['Gilroy-Black:☞',_sans-serif] h-[57px] leading-[0] not-italic relative shrink-0 text-[72px] text-black w-[508px]">
        <p className="leading-[76px]">Design System</p>
      </div>
      <Persons />
    </div>
  );
}

function Group() {
  return <img className="block max-w-none size-full" src={imgDesignSystem} />;
}

function GivCareAndroid() {
  return (
    <div className="absolute inset-[15.72%_74.44%_64.75%_11.67%] overflow-clip" data-name="Giv.Care Android">
      <Group />
    </div>
  );
}

export default function Cover() {
  return (
    <div className="bg-[#f3f3f3] relative size-full" data-name="Cover">
      <div className="absolute inset-[15.72%_-29.31%_-9.67%_61.39%]">
        <div className="absolute inset-[-31.18%_-30.67%]">
          <img className="block max-w-none size-full" src={imgEllipse6} />
        </div>
      </div>
      <GivAndroid />
      <Title />
      <GivCareAndroid />
    </div>
  );
}