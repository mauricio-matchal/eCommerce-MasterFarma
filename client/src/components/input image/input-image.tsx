import style from "@/components/input image/input-image.module.css"
import AddPic from "@/assets/icons/add.pic";
import { useState } from "react";

export function InputImage() {
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
        onChange={handleImageChange}
      />
      {imagePreview && (
        <img src={imagePreview} alt="Selected" className={style.imagePreview} />
      )}
    </span>
  );
}
