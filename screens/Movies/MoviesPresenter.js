import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import MovieSlider from "../../Components/MovieSlider";
import { BG_COLOR } from "../../constants/Color";
import Section from "../../Components/Section";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviePresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying ? <MovieSlider movies={nowPlaying} /> : null}
      {upcoming ? <Section movies={upcoming} title="Upcoming Movies" /> : null}
    </Container>
  );

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviePresenter;
