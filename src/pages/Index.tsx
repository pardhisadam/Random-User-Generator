
import { motion } from "framer-motion";
import UsernameGenerator from "@/components/UsernameGenerator";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl mx-auto">
        <UsernameGenerator />
      </div>
    </div>
  );
};

export default Index;
