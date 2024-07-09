import style from "@/components/input image/input-image.module.css"
import AddPic from "@/assets/icons/add.pic";

export function InputImage() {
  return (
    <span className={style.container}>
      <label
        className={style.icon}
        htmlFor="imageUpload"
      >
        <AddPic />
      </label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        className={style.input}
      />
    </span>
  );
}
