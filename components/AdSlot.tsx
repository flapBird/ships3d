interface AdSlotProps {
  type: "sidebar" | "rectangle" | "banner";
  className?: string;
}

/**
 * AdSlot — placeholder for future AdSense ad units.
 *
 * Currently returns null (no ads displayed). The AdSense script is already
 * loaded in the <head> via layout.tsx. When ready to show ads, replace the
 * return statement with <ins class="adsbygoogle"> using the placeholder below.
 */
export default function AdSlot({ type, className = "" }: AdSlotProps) {
  return null;
}
