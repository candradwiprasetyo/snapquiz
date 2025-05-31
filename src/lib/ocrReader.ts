import Tesseract from "tesseract.js";

export const preprocessImage = (file: File): Promise<Blob> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const maxWidth = 800;
      const scale = Math.min(1, maxWidth / img.width);
      const width = img.width * scale;
      const height = img.height * scale;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imgData.data.length; i += 4) {
        const avg =
          (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;
        imgData.data[i] = avg;
        imgData.data[i + 1] = avg;
        imgData.data[i + 2] = avg;
      }
      ctx.putImageData(imgData, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
      }, "image/png");
    };

    img.onerror = () => {
      console.error("Gagal memuat gambar.");
    };

    img.src = URL.createObjectURL(file);
  });
};

export const handleFilesOCR = async (files: FileList): Promise<string[]> => {
  const results: string[] = [];

  for (let i = 0; i < files.length; i++) {
    try {
      const processedBlob = await preprocessImage(files[i]);
      const {
        data: { text },
      } = await Tesseract.recognize(processedBlob, "eng+ind", {
        logger: (m) => console.log(m),
      });

      results.push(text.trim());
    } catch (err: unknown) {
      if (err instanceof Error) {
        results.push("Error: " + err.message);
      } else {
        results.push("Terjadi kesalahan.");
      }
    }
  }

  return results;
};
