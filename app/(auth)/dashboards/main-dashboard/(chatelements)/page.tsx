"use client";

import React, { useEffect, useState } from "react";
import { useComponents, ComponentRecord, SubcategoryType, CategoriesSubcategories } from "@/hooks/index";
import Image from "next/image"
import marketplaceimage from '@/assets/MarkplaceImage.png'

import { AspectRatio } from "@/components/shadcn-ui/aspect-ratio"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn-ui/accordion";

import { formatStringtoCategorie } from "@/util/strings/utils";
import ComponentCard from "components/Dashboard/Components/ComponentCard";




function MainDashboard() {
  const [selectedCategory, setSelectedCategory] =
    useState<SubcategoryType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data, isPending, isFetching } = useComponents();

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [selectedCategory]);
  

  return (
    <>
      <AspectRatio ratio={1630 / 416}>
        <Image
          src={marketplaceimage}
          fill
          alt="Image"
          className="rounded-b-md object-cover"
        />
      </AspectRatio>
      <div className="grid grid-cols-5 mt-[50px]">
        <div className="col-span-2 pl-[80px]">
          <div className="text-xl font-normal">Categories</div>
          <Accordion type="single" className="max-w-[400px]" collapsible>
            {Object.entries(CategoriesSubcategories).map(
              ([category, items], index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={`categorie-${index}`}
                >
                  <AccordionTrigger>
                    {formatStringtoCategorie(category)}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      {items.map((item, index) => (
                        <div
                          key={`${category}-item-${index}`}
                          className={`text-sm text-gray-500 hover:text-gray-900 cursor-pointer ${
                            item === selectedCategory
                              ? "text-blue-500 font-bold"
                              : ""
                          }`}
                          onClick={() => setSelectedCategory(item)}
                        >
                          {formatStringtoCategorie(item)}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
        <div className="col-span-3">
          <div className="flex justify-start">
            {isPending || isLoading ? (
              <div>Loading</div>
            ) : (
              ComponentCard(data, selectedCategory)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;