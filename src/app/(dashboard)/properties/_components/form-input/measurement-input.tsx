import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type MeasurementInputProps = React.ComponentProps<typeof Input> & {
  label: string;
  unit?: string;
};

export const MeasurementInput = ({
  label,
  unit,
  ...props
}: MeasurementInputProps) => {
  const [value, setValue] = useState(0);
  return (
    <div className="grid gap-2 w-full">
      <Label htmlFor={props.id}>
        {label} {unit && `(${unit})`}
      </Label>
      <Input
        type="number"
        id={props.id}
        name={props.name}
        min={0}
        onChange={(e) => setValue(Number(e.target.value))}
        value={value}
        {...props}
      />
    </div>
  );
};
