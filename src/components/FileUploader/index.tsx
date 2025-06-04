"use client";
import React, { useRef } from "react";
import { isMobile } from "react-device-detect";

type FileUploaderProps = {
  onFilesSelected: (files: FileList | null) => void;
  loading: boolean;
};

export default function FileUploader({
  onFilesSelected,
  loading,
}: FileUploaderProps) {
  const inputRefGallery = useRef<HTMLInputElement>(null);
  const inputRefCamera = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilesSelected(e.target.files);
  };

  return (
    <div className="text-center w-full md:w-[400px] mx-auto text-xl">
      <button
        onClick={() => inputRefGallery.current?.click()}
        className="bg-button-red text-white px-8 py-4 rounded mb-4 w-full font-medium mx-auto rounded-full flex items-center gap-1 justify-center"
        disabled={loading}
      >
        Upload from Gallery
      </button>
      <input
        ref={inputRefGallery}
        type="file"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
        disabled={loading}
      />

      {isMobile && (
        <>
          <button
            onClick={() => inputRefCamera.current?.click()}
            className="bg-button-yellow text-white px-8 py-4 rounded mb-4 w-full font-medium md:w-auto rounded-full flex items-center gap-1 justify-center"
            disabled={loading}
          >
            Take a picture
          </button>
          <input
            ref={inputRefCamera}
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: "none" }}
            onChange={handleChange}
            disabled={loading}
          />
        </>
      )}
    </div>
  );
}
