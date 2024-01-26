"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const Theme = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <div className="flex flex-initial flex-row justify-end">
      <div className="mr-2 flex items-center space-x-2">
        {/* need edit more in dark mode */}
        <Switch
          id="checkbox"
          onCheckedChange={() =>
            toggleTheme(mode === "light" ? "dark" : "light")
          }
        />
        <label
          htmlFor="checkbox"
          className="text-sm font-semibold dark:text-white"
        >
          {mode === "light" ? "Light" : "Dark"}
        </label>
      </div>
    </div>
  );
};

export default Theme;
