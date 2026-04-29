import HairMatchClient from "@/components/hair-match/HairMatchClient";

export default function HairMatchPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Hair Consultation</h1>
      <p className="mt-2 opacity-80">
        Upload a selfie to get hairstyle recommendations that suit your face.
      </p>

      <div className="mt-8">
        <HairMatchClient />
      </div>
    </main>
  );
}