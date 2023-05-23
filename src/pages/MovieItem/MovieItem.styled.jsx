import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ButtonBack = styled(Link)`
font-size: 16px;
display: flex;
align-items: center;
text-decoration: none;
color: #fff;
&:hover{
  color: #03dac6
}

`
const IconBack = styled(BsArrowLeft)`
width: 20px;
height: 20px;
margin-right: 10px;
fill: currentColor;
`

export {ButtonBack, IconBack}