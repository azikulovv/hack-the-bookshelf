import CreativeWorkImage from "@/assets/images/creative-works/creative-work-1.png";

export const CreativeWorkCard = () => {
  return (
    <div className="flex flex-col ">
      <img
        className="w-[316px] h-[249px] aspect-[316/250] rounded-[12px] object-cover"
        src={CreativeWorkImage}
        alt=""
      />

      <div className="bg-[#447DF30A] rounded-[4px] p-[6px_10px] w-fit mt-[12px]">
        <span className="text-[#447DF3] text-body-14">Категория</span>
      </div>

      <p className="text-body-16 text-[#565656] mt-[8px]">Название работы</p>
      <p className="text-body-14 text-[#8C8C8C] mt-[4px]">Краткая аннотация или описание работы</p>
    </div>
  );
};
