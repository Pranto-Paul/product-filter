import React from "react";
import Input from "../../components/Input";
import { useStore } from "../../store";

const Colors = () => {
  const { colors, selectedColor, handleColorChange } = useStore();
  return (
    <div className="space-y-2">
      {colors.map((color) => (
        <Input
          key={color.name}
          name="color"
          value={color.name.toLowerCase()}
          label={color.name}
          color={color.class}
          checked={selectedColor === color.name}
          onChange={() => handleColorChange(color.name)}
        />
      ))}
    </div>
  );
};

export default Colors;
