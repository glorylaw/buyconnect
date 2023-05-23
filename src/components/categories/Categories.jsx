import React from 'react';
import { categories } from '../data';
import { CategoryContainer } from '../styled_components/styles'
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <CategoryContainer>
        {categories.map((item) => {
            return <CategoryItem key={item.id} item={item} />
})}
    </CategoryContainer>
  )
}

export default Categories