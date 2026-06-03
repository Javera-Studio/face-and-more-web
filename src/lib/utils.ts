import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function imgSrc(img: any): string {
  if (typeof img === "string") return img;
  if (img && typeof img === "object" && "src" in img) return img.src as string;
  return "";
}
