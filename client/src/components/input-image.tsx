import AddPic from "@/assets/icons/add.pic";

export function InputImage() {
  return (
    <span className="relative bg-anil-50 rounded-[15px] border-[1px] border-anil-950 border-opacity-20">
      <label
        className="absolute origin-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
        htmlFor="imageUpload"
      >
        <AddPic />
      </label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        className="w-[80px] h-[80px] hover:cursor-pointer opacity-0"
      />
    </span>
  );
}
