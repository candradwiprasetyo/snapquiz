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
    <div className="mt-6 p-4 border rounded bg-gray-100">
      <h3 className="font-bold mb-2">Hasil:</h3>
      <p>Total soal: {totalSoal}</p>
      <p>Benar: {totalBenar}</p>
      <p>Salah: {totalSalah}</p>
      <p className="font-semibold mt-2">Nilai: {nilai}</p>
    </div>
  );
}
