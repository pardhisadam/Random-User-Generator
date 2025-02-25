
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const adjectives = [
  "Swift", "Mystic", "Cosmic", "Crystal", "Silent", "Noble", "Radiant",
  "Epic", "Stellar", "Brave", "Lunar", "Astral", "Royal", "Ancient"
];

const nouns = [
  "Phoenix", "Dragon", "Wolf", "Tiger", "Eagle", "Knight", "Warrior",
  "Spirit", "Shadow", "Guardian", "Legend", "Sage", "Hunter", "Oracle"
];

const UsernameGenerator = () => {
  const [username, setUsername] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecials, setIncludeSpecials] = useState(false);

  const generateUsername = () => {
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    let result = `${adjective}${noun}`;

    if (includeNumbers) {
      result += Math.floor(Math.random() * 1000);
    }

    if (includeSpecials) {
      const specials = ["!", "_", "-", "x"];
      result += specials[Math.floor(Math.random() * specials.length)];
    }

    setUsername(result);
  };

  const copyToClipboard = async () => {
    if (!username) return;
    
    try {
      await navigator.clipboard.writeText(username);
      toast.success("Username copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy username");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 w-full max-w-md mx-auto"
    >
      <div className="space-y-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-2"
          >
            USERNAME GENERATOR
          </motion.span>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create Your Unique Identity
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Include Numbers</label>
            <Switch
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Include Special Characters</label>
            <Switch
              checked={includeSpecials}
              onCheckedChange={setIncludeSpecials}
            />
          </div>
        </div>

        <Button
          className="w-full py-6 text-base font-medium transition-all hover:scale-[1.02]"
          onClick={generateUsername}
        >
          Generate Username
        </Button>

        {username && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 rounded-lg bg-secondary/50 relative group"
          >
            <div className="text-center text-lg font-medium tracking-wide">
              {username}
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2"
            >
              <Copy className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UsernameGenerator;
