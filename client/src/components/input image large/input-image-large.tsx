import style from "@/components/input image large/input-image-large.module.css";
import AddPicLarge from "@/assets/icons/add.pic.large";

export function InputImageLarge() {
  return (
    <span className={style.container}>
      <label
        className={style.icon}
        htmlFor="imageUpload"
      >
        <AddPicLarge />
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
