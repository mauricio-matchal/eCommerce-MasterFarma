import AddPicLarge from "@/assets/icons/add.pic.large";

export function InputImageLarge() {
  return (
    <span className="relative bg-anil-50 rounded-[30px] border-[1px] border-anil-950 border-opacity-20">
      <label
        className="absolute origin-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-anil-950 pointer-events-none text-2xl font-extrabold flex flex-col justify-center items-center text-center w-[400px] gap-2"
        htmlFor="imageUploadLg"
      >
        <AddPicLarge />
        Adicionar foto principal
      </label>
      <input
        type="file"
        id="imageUploadLg"
        name="imageUploadLg"
        accept="image/*"
        className="w-[500px] h-[500px] hover:cursor-pointer opacity-0"
      />
    </span>
  );
}
