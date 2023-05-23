import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../../components/announcements/Announcement";
import Footers from "../../components/footers/Footers";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import { mobile } from "../../responsive";


const Container = styled.div``;
const Title = styled.h1`
    margin: 20px;

`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })} })} 
`;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: 1px solid teal;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    font-weight: 600;
    color: #555;
    ${mobile({ margin: "10px 0px" })}
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]


 const [filters, setFilters] = useState({});
 const [sort, setSort] = useState({})
 
 const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value, 
        })
 };

 const handleSort = (e) => {
    const value = e.target.value;
    setSort(value)
    console.log("bug", value)
 }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
                <option disabled >Color</option>
                <option>white</option>
                <option>black</option>
                <option>red</option>
                <option>blue</option>
                <option>yellow</option>
                <option>green</option>
            </Select >
            <Select name="size" onChange={handleFilters}>
                <option disabled >Size</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select onChange={handleSort}>
                <option value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>

            </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footers />
    </Container>
  );
};

export default ProductList;
