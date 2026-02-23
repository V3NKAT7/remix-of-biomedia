// Product catalog data extracted from Biomedia Catalogue

export interface SizeOption {
  label: string;      // e.g. "10 mL × 100 qty"
  size: string;       // e.g. "10 mL"
  packQty: number;    // units per pack
  note?: string;      // e.g. "5 pieces per pack"
}

export interface MediaProduct {
  name: string;
  code: string;
}

export interface MediaCategory {
  name: string;
  sizes: SizeOption[];
  products: MediaProduct[];
}

export interface InstrumentProduct {
  name: string;
}

// ─── Size options per category ───────────────────────────────────────

export const liquidMediaSizes: SizeOption[] = [
  { label: "10 mL × 100 qty", size: "10 mL", packQty: 100 },
  { label: "10 mL × 25 qty", size: "10 mL", packQty: 25 },
  { label: "100 mL × 50 qty", size: "100 mL", packQty: 50 },
  { label: "90 mL × 50 qty", size: "90 mL", packQty: 50 },
  { label: "400 mL × 24 qty", size: "400 mL", packQty: 24 },
  { label: "2000 mL × 5 qty", size: "2000 mL", packQty: 5 },
];

export const agarMediaSizes: SizeOption[] = [
  { label: "55 mm × 200 qty", size: "55 mm", packQty: 200, note: "5 pieces per pack" },
  { label: "90 mm × 100 qty", size: "90 mm", packQty: 100, note: "5 pieces per pack" },
];

export const moltenAgarMediaSizes: SizeOption[] = [
  { label: "100 mL × 50 qty", size: "100 mL", packQty: 50 },
  { label: "90 mL × 50 qty", size: "90 mL", packQty: 50 },
  { label: "400 mL × 24 qty", size: "400 mL", packQty: 24 },
];

// ─── Products ────────────────────────────────────────────────────────

export const liquidMedia: MediaProduct[] = [
  { name: "Soyabean Casein Digest Medium", code: "BM102" },
  { name: "Soyabean Casein Digest Medium with 0.1% Polysorbate 80", code: "BM103" },
  { name: "0.1% Peptone Water", code: "BM124" },
  { name: "MacConkey Broth", code: "BM104" },
  { name: "Sabouraud Dextrose Broth", code: "BM105" },
  { name: "Reinforced Medium for Clostridia", code: "BM111" },
  { name: "Rappaport Vassiliadis Salmonella Enrichment Broth", code: "BM108" },
  { name: "Buffered Sodium Chloride-Peptone Solution pH 7.0", code: "BM109" },
  { name: "Enterobacteria Enrichment Broth, Mossel", code: "BM107" },
  { name: "Fluid Thioglycollate Medium (Wide Mouth)", code: "BM129WM" },
];

export const agarMedia: MediaProduct[] = [
  { name: "Cetrimide Agar Plate", code: "BM-1101" },
  { name: "MacConkey Agar Plate", code: "BM-1103" },
  { name: "Mannitol Salt Agar Plate", code: "BM-1105" },
  { name: "Columbia Agar Plate", code: "BM-1126" },
  { name: "Violet Red Bile Glucose Agar Plate", code: "BM-1121" },
  { name: "Xylose Lysine Deoxycholate Agar Plate", code: "BM-1122" },
  { name: "R2A Agar Plate", code: "BM-1106" },
  { name: "Sabouraud Dextrose Agar Plate", code: "BM-1112" },
  { name: "Soyabean Casein Digest Agar Plate", code: "BM-1114" },
  { name: "Soyabean Casein Digest Agar Plate with Polysorbate 80, Soya Lecithin & Glycerol (90mm)", code: "BM-1115" },
  { name: "Soyabean Casein Digest Agar Plate with Polysorbate 80, Soya Lecithin & Glycerol (55mm)", code: "BM-1206" },
  { name: "Soyabean Casein Digest Agar with 1% Glycerol (90mm)", code: "BM-1135" },
  { name: "Soyabean Casein Digest Agar with 1% Glycerol (55mm)", code: "BM-1136" },
  { name: "Burkholderia Cepacia Selective Agar", code: "BM-1139" },
];

export const moltenAgarMedia: MediaProduct[] = [
  { name: "R2A Agar (Molten Media)", code: "BM1127" },
  { name: "Soyabean Casein Digest Agar (Molten Media)", code: "BM116" },
  { name: "Sabouraud Dextrose Agar (Molten Media)", code: "BM112" },
];

// Categories 4 & 5 — Consumables & Instruments (flat lists)
export const laboratoryConsumables: InstrumentProduct[] = [
  { name: "RTU Plates" },
  { name: "Disposable Filter Funnel" },
  { name: "Magnetic Filter Funnel" },
  { name: "Sterile Media Bottle" },
  { name: "Measuring Scoops" },
  { name: "Sterile Forceps" },
  { name: "3 Place Manifold" },
  { name: "Sterilizable Media Bottle" },
  { name: "Sentinorx" },
  { name: "Wipes Lint Free-White" },
  { name: "Garment-Disposable Coverall Sterile" },
  { name: "Antistatic Garment" },
  { name: "Cleanroom Paper Autoclavable" },
  { name: "Blue Nitrile Gloves" },
  { name: "Biobreathable Paper" },
  { name: "Steam Indicator Tape" },
  { name: "Spreader L-Shaped PP-Sterile" },
  { name: "Membrane Filter" },
  { name: "Spatula" },
  { name: "Swab" },
  { name: "Wide Mouth Bottle HDPE" },
  { name: "Autoclavable Biohazard Bags" },
  { name: "Weighing Boats" },
  { name: "Sterilization Reels" },
  { name: "Sticky Mat" },
  { name: "Autoclavable Spray Bottle" },
  { name: "96 Well Plates" },
  { name: "Reagent Reservoirs" },
  { name: "Biological Indicators" },
  { name: "Bowie-Dick Test Pack" },
  { name: "Gamma Process Indicator Labels" },
  { name: "Chemical Indicators" },
];

export const laboratoryInstruments: InstrumentProduct[] = [
  { name: "Walk-in Chambers" },
  { name: "Pure Steam Sampler" },
  { name: "Leak Test Apparatus" },
  { name: "Filter Integrity Test Apparatus (Bubble Point)" },
  { name: "Biosafety Cabinet" },
  { name: "Laminar Air Flow Units" },
  { name: "Hot Air Oven" },
  { name: "Digital Hot Plate" },
  { name: "Analytical Balance" },
  { name: "Filtration Apparatus" },
  { name: "Vortex Mixer" },
  { name: "Vertical Autoclave" },
  { name: "HPHV Steam Sterilizer" },
  { name: "Vacuum Pump" },
  { name: "Sterility Pump" },
  { name: "Digital Colony Counter" },
  { name: "Fogger" },
  { name: "Dry Fogger" },
  { name: "Heating Block" },
  { name: "Water Bath" },
  { name: "pH Meter" },
  { name: "Conductivity Meter" },
  { name: "TDS Apparatus" },
  { name: "Microscope" },
  { name: "BOD Incubators" },
];
