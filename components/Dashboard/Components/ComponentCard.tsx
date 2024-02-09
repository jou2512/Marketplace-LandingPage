import { ComponentRecord } from "@/hooks";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn-ui/card";

function ComponentCard(data: any[], selectedCategory: string | string[] | null) {
    const filteredData = data.filter((record: ComponentRecord) => {
        console.log(record.fields);
        return selectedCategory
            ? record.fields.Categories.some((category) =>
                selectedCategory.includes(category)
            )
            : true
    }
  );
    return (<>
        {filteredData.map((record: ComponentRecord, index: number) => (
            <Card key={record.id}>
                <CardHeader>
                    <CardTitle>{`Record ${index + 1}`}</CardTitle>
                    <CardDescription>{record.fields.Name}</CardDescription>
                </CardHeader>
                <CardContent>{/* Content of the record */}</CardContent>
                <CardFooter>{/* Footer of the record */}</CardFooter>
            </Card>
        ))}
    </>)
}

export default ComponentCard;
