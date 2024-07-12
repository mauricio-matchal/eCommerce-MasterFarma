import style from "@/components/input image large/input-image-large.module.css";
import AddPicLarge from "@/assets/icons/add.pic.large";
import { useState } from "react";

export function InputImageLarge() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <span className={style.container}>
      {imagePreview && <div className={style.border}>Trocar de foto</div>}
      <label className={style.icon} htmlFor="imageUpload">
        <AddPicLarge />
      </label>
      <input
        type="file"
        id="imageUpload"
        name="imageUpload"
        accept="image/*"
        className={style.input}
        onChange={handleImageChange}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Selected" className={style.imagePreview} />
      )}
    </span>
  );
}
