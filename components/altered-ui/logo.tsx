"use client";

import ImageComponent from "./Image-component";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import { StaticImageData } from "next/image";

// Manually define theme names
type ThemeName = "light" | "dark" | "system"; // Add more themes as needed

type ThemeMatching = {
  [theme in ThemeName]: StaticImageData;
};

interface LogoComponentProps extends React.HTMLAttributes<HTMLElement> {
  ThemeMatching?: ThemeMatching;
  logonumber?: number;
  size?: number; // Define your size options
  ratio?: number;
  className?: string; // Extract className separately
}

const Logo: React.FC<LogoComponentProps> = ({
  ThemeMatching = {
    dark: logo3,
    light: logo4,
    system: logo4,
  },
  logonumber = 4,
  size = 250,
  ratio = 16 / 9,
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultTheme: StaticImageData = logo3;

  const getThemeImage = (themeName: ThemeName): StaticImageData => {
    return ThemeMatching[themeName] ?? defaultTheme;
  };


  return (
    <ImageComponent src={getThemeImage(theme as ThemeName)} size={size} className={className} />
  );
};

export default Logo;
