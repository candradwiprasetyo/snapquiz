"use client";

type ResultSummaryProps = {
  totalSoal: number;
  totalBenar: number;
  totalSalah: number;
  nilai: number;
};

export default function ResultSummary({
  totalSoal,
  totalBenar,
  totalSalah,
  nilai,
}: ResultSummaryProps) {
  return (
    <div className="mt-6 border rounded-2xl bg-gray-700 text-white flex overflow-hidden">
      <div className="w-1/2 p-6">
        <h3 className="font-bold mb-2">Hasil:</h3>
        <p>Total soal {totalSoal}</p>
        <p>Benar {totalBenar}</p>
        <p>Salah {totalSalah}</p>
      </div>
      <div className="w-1/2 text-center bg-gray-600 p-6">
        <p className="font-semibold mt-2 text-2xl">
          <div className="mb-2 text-gray-300">Nilai</div>
          <span className="text-5xl">{nilai}</span>
        </p>
      </div>
    </div>
  );
}
