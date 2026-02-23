import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FlaskConical, Package } from "lucide-react";
import {
  liquidMedia, liquidMediaSizes,
  agarMedia, agarMediaSizes,
  moltenAgarMedia, moltenAgarMediaSizes,
  laboratoryInstruments, laboratoryConsumables,
  type MediaProduct, type InstrumentProduct,
} from "@/data/productCatalog";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categoryIndex: number; // 0-4
  categoryTitle: string;
}

const mediaData: Record<number, { products: MediaProduct[]; sizes: string[] }> = {
  0: { products: liquidMedia, sizes: liquidMediaSizes },
  1: { products: agarMedia, sizes: agarMediaSizes },
  2: { products: moltenAgarMedia, sizes: moltenAgarMediaSizes },
};

const instrumentData: Record<number, InstrumentProduct[]> = {
  3: laboratoryInstruments,
  4: laboratoryConsumables,
};

const ProductDialog = ({ open, onOpenChange, categoryIndex, categoryTitle }: ProductDialogProps) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaProduct | null>(null);
  const isMedia = categoryIndex <= 2;

  const handleClose = (val: boolean) => {
    if (!val) setSelectedMedia(null);
    onOpenChange(val);
  };

  const handleBack = () => setSelectedMedia(null);

  if (isMedia) {
    const { products, sizes } = mediaData[categoryIndex];

    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              {selectedMedia && (
                <Button variant="ghost" size="icon" className="h-7 w-7 mr-1" onClick={handleBack}>
                  <ArrowLeft size={16} />
                </Button>
              )}
              {selectedMedia ? selectedMedia.name : categoryTitle}
            </DialogTitle>
            <DialogDescription>
              {selectedMedia ? "Available sizes" : "Select a media to view available sizes"}
            </DialogDescription>
          </DialogHeader>

          {!selectedMedia ? (
            <div className="grid gap-2 mt-2">
              {products.map((product) => (
                <button
                  key={product.code}
                  onClick={() => setSelectedMedia(product)}
                  className="flex items-center gap-3 rounded-lg border border-border p-4 text-left hover:border-primary/60 hover:bg-primary/5 transition-colors"
                >
                  <FlaskConical size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">Code: {product.code}</p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 mt-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className="flex items-center justify-between rounded-lg border border-border p-4 hover:border-primary/40 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{selectedMedia.name}</p>
                    <p className="text-xs text-muted-foreground">Code: {selectedMedia.code}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  // Instruments & Consumables — flat list
  const items = instrumentData[categoryIndex] ?? [];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-foreground">{categoryTitle}</DialogTitle>
          <DialogDescription>All products in this category</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 mt-2">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3 rounded-lg border border-border p-4"
            >
              <Package size={18} className="text-primary shrink-0" />
              <p className="text-sm font-medium text-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
