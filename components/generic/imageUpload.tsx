'use client';

import { useSupabase } from '@/context/supabaseProvider';
import Image from 'next/image';

type ImageUploadProps = {
  userId: string;
  currentImageUrl: string;
  onImageUrlChange: (newUrl: string) => void;
  storageBucket: string;
  width?: number;
  height?: number;
};

const ImageUpload = ({
  userId,
  currentImageUrl,
  onImageUrlChange,
  storageBucket,
  width = 128,
  height = 128,
}: ImageUploadProps) => {
  const { supabase } = useSupabase();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const fileName = `${userId}-${Date.now()}.${file.name.split('.').pop()}`;
      const { error } = await supabase.storage
        .from(storageBucket)
        .upload(fileName, file);

      if (error) {
        console.error('Image upload failed:', error);
      } else {
        const newImageUrl = supabase.storage
          .from(storageBucket)
          .getPublicUrl(fileName).data.publicUrl;
        onImageUrlChange(newImageUrl);
      }
    }
  };

  return (
    <div>
      <Image
        src={currentImageUrl}
        alt="Uploaded image"
        width={width}
        height={height}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImageUpload;
