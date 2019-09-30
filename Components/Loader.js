import React from "react";
import {ActivityIndicator, View } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Color";
import styled from "styled-components";


const Container = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
    justify-content: center; 
`;


export default () => <Container><ActivityIndicator color={TINT_COLOR} size="small" /></Container>

