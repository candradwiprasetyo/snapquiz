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
    <div className="text-center w-full md:w-[400px] mx-auto">
      <button
        onClick={() => inputRefGallery.current?.click()}
        className="bg-blue-400 text-white px-8 py-4 rounded mb-4 w-full mx-auto rounded-full flex items-center gap-1 justify-center"
        disabled={loading}
      >
        <i className="material-icons text-white w-8">images</i>
        Upload dari Galeri
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
            className="bg-green-400 text-white px-8 py-4 rounded mb-4 w-full md:w-auto rounded-full flex items-center gap-1 justify-center"
            disabled={loading}
          >
            <i className="material-icons text-white w-8">photo_camera</i>
            Ambil Foto Kamera
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
