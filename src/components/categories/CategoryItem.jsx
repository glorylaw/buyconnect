import React from 'react'
import { ButtonCategory,  CategoryImg,  CategoryInfo, CategoryTitle, CategoryDiv } from '../styled_components/styles'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <CategoryDiv>
      <Link to={`/products/${item.cat}`}>      
        <CategoryImg src={item.img} />
         <CategoryInfo>
            <CategoryTitle>{item.title}</CategoryTitle>
            <ButtonCategory>SHOP NOW</ButtonCategory>
         </CategoryInfo>
      </Link>
    </CategoryDiv>
  )
}

export default CategoryItem