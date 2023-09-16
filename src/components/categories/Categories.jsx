import React from "react";
import Container from "../shared/Container/Container";
import { categories } from "./categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            label={item.label}
            icon={item.icon}
            key={item.id}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
