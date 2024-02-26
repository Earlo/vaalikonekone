'use client';
import LoadingSpinner from '@/components/generic/LoadingSpinner';
import { useSupabase } from '@/context/supabaseProvider';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';

type ImageUploadProps = {
  userId: string;
  currentImageUrl: string;
  onImageUrlChange: (newUrl: string) => void;
  storageBucket: string;
  className?: string;
  disabled?: boolean;
  context?: string;
  children?: React.ReactNode;
  width?: number;
  height?: number;
};

const ImageUpload = ({
  userId,
  currentImageUrl,
  onImageUrlChange,
  storageBucket,
  className,
  children,
  disabled = false,
  context,
  width = 128,
  height = 128,
}: ImageUploadProps) => {
  const { supabase } = useSupabase();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <div className="relative inline-block">
      <input
        type="file"
        onChange={handleImageChange}
        ref={fileInputRef}
        className="hidden"
        disabled={disabled}
      />
      {isLoading ? (
        <div className="flex size-32 items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div
          className={`relative h-32 w-32 ${className}`}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <Image
            src={currentImageUrl || '/blank_user.png'}
            alt="Upload Image"
            height={width}
            width={height}
            className={cn('rounded-full object-cover', {
              'cursor-pointer': !disabled,
            })}
          />
          {children ? (
            <div className="absolute inset-0 flex items-center justify-between opacity-0 transition-opacity duration-200 hover:opacity-100">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-40 hover:cursor-pointer hover:bg-opacity-20">
                {children}
              </div>
            </div>
          ) : (
            !disabled && (
              <div className="absolute inset-0 flex items-center justify-between opacity-0 transition-opacity duration-200 hover:opacity-100">
                <div
                  className="flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-40 hover:cursor-pointer hover:bg-opacity-20"
                  onClick={() => !disabled && fileInputRef.current?.click()}
                >
                  <ArrowUpOnSquareIcon className="h-6 w-6" />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
