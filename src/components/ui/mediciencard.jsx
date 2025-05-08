import React from "react";
import { Button } from "@/components/ui/button"; // uses your custom button
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MedicienCard({ image, title, description, onClick }) {
  return (
    <Card>
      <CardContent className="p-0">{image}</CardContent>
      <div className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl font-semibold">
            {title}
          </CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>

        <CardFooter className="justify-between">
          <Button variant="secondary" size="sm">
            Shop Hair Essentials
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
