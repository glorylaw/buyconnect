import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { FcSearch } from "react-icons/fc";
import {
  Container,
  Left,
  Wrapper,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "../styled_components/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language></Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <FcSearch style={{ color: "grey", fontSize: "1rem" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/" style={{textDecoration: 'none'}} >
                <Logo>BuyConnect...</Logo>
            </Link> 
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>

            <MenuItem>SIGN IN</MenuItem>
            <Link to='/cart'>
              <MenuItem>
                <Badge
                  overlap="rectangular"
                  badgeContent={quantity}
                  color="primary"
                >
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
