"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/context/ThemeProvider";
import React from "react";

const Theme = () => {
  const { mode, toggleTheme } = useTheme();
  return (
    <div className="mr-2 flex items-center space-x-2">
      {/* need edit more in dark mode */}
      <Switch
        id="checkbox"
        onCheckedChange={() => toggleTheme(mode === "light" ? "dark" : "light")}
      />
      <label
        htmlFor="checkbox"
        className="text-sm font-semibold text-gray-600 dark:text-slate-200"
      >
        {mode === "light" ? "Light" : "Dark"}
      </label>
    </div>
  );
};

export default Theme;
