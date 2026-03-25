import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col flex-1 items-center justify-center">
      <div className="flex flex-row font-sans text-3xl text-black bg-white rounded-full p-20 justify-center items-center">
        <Image src={"/Kir-Dev.png"} width={200} height={200} alt="Kir-Dev" className="mr-4"/>
        Greetings from Kir-Dev!
      </div>
    </div>
  );
}
