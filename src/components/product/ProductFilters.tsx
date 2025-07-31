
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";

interface ProductFiltersProps {
  filters: {
    search: string;
    category: string;
    scentFamily: string;
    priceRange: [number, number];
    notes: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const categories = ["All", "Men", "Women", "Unisex"];
const scentFamilies = ["All", "Floral", "Woody", "Oriental", "Fresh"];
const keyNotes = [
  "Amber", "Bergamot", "Cedarwood", "Jasmine", "Lavender", "Leather", 
  "Musk", "Oud", "Patchouli", "Rose", "Sandalwood", "Vanilla", "Vetiver"
];


export function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev: any) => ({ ...prev, search: e.target.value }));
  };

  const handleCategoryChange = (value: string) => {
    setFilters((prev: any) => ({ ...prev, category: value }));
  };

  const handleScentFamilyChange = (value: string) => {
    setFilters((prev: any) => ({ ...prev, scentFamily: value }));
  };

  const handlePriceChange = (value: [number, number]) => {
    setFilters((prev: any) => ({ ...prev, priceRange: value }));
  };

  const handleNoteChange = (note: string, checked: boolean) => {
    setFilters((prev: any) => ({
      ...prev,
      notes: checked
        ? [...prev.notes, note]
        : prev.notes.filter((n: string) => n !== note),
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      search: "",
      category: "All",
      scentFamily: "All",
      priceRange: [0, 450],
      notes: [],
    });
  }

  return (
    <Card className="sticky top-20 shadow-none border-none md:border md:shadow-sm">
      <CardHeader className="hidden md:flex">
        <div className="flex justify-between items-center">
          <CardTitle className="font-headline text-2xl">Filters</CardTitle>
          <Button variant="link" size="sm" onClick={clearFilters} className="pr-0">
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 p-1 md:p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name..."
            value={filters.search}
            onChange={handleSearchChange}
            className="pl-9"
          />
        </div>
        
        <Separator/>

        <div className="space-y-4">
          <h3 className="font-semibold text-md">Category</h3>
          <RadioGroup value={filters.category} onValueChange={handleCategoryChange} className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={`cat-${category}`} />
                <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer">{category}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <Separator/>

        <div className="space-y-4">
          <h3 className="font-semibold text-md">Scent Family</h3>
          <RadioGroup value={filters.scentFamily} onValueChange={handleScentFamilyChange} className="space-y-2">
            {scentFamilies.map((family) => (
              <div key={family} className="flex items-center space-x-2">
                <RadioGroupItem value={family} id={`fam-${family}`} />
                <Label htmlFor={`fam-${family}`} className="font-normal cursor-pointer">{family}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <Separator/>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-md">Key Notes</h3>
           <ScrollArea className="h-40">
            <div className="space-y-2 pr-4">
              {keyNotes.map((note) => (
                <div key={note} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`note-${note}`}
                    checked={filters.notes.includes(note)}
                    onCheckedChange={(checked) => handleNoteChange(note, !!checked)}
                  />
                  <Label htmlFor={`note-${note}`} className="font-normal cursor-pointer">{note}</Label>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        <Separator/>
        
        <div className="space-y-4">
          <h3 className="font-semibold text-md">Price Range</h3>
          <Slider
            min={0}
            max={450}
            step={10}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
          />
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
