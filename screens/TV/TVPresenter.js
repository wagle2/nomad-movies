import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";

const TVPresenter = ({loading, popular, topRated, airingToday}) => (loading?<Loader/>:<Text>TV</Text>);

TVPresenter.propTypes = {
    loading : PropTypes.bool,
    popular : PropTypes.array,
    topRated : PropTypes.array,
    airingToday : PropTypes.array
};

export default TVPresenter;