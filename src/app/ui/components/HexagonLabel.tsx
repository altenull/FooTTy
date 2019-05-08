import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  imgUrl: string | null;
  label: string;
  onSelectPlayer(playerId: string): void;
}

interface StCutterProps {
  rotate: string;
}

interface StHexagonProps {
  backgroundImage: string | null;
}

const StHexagonLabel = styled.div`
  display: inline;
  position: relative;
`;

const StCutter = styled.div`
  overflow: hidden;
  width: 140px;
  height: 120px;
  transform: ${(props: StCutterProps) => `rotate(${props.rotate})`};
`;

const StHexagon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: ${(props: StHexagonProps) => `url(${props.backgroundImage ? props.backgroundImage : 'undefined'})`};
`;

const StHexagonCurtain = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-60deg);
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  user-select: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const StLabel = styled.span`
  font-size: 0.875rem;
  color: #ffffff;
  max-width: 75%;
  text-align: center;
`;

class HexagonLabel extends Component<Props> {
  render() {
    const { id, imgUrl, label, onSelectPlayer } = this.props;

    return (
      <StHexagonLabel onClick={() => onSelectPlayer(id)}>
        <StCutter rotate={'120deg'}>
          <StCutter rotate={'-60deg'}>
            <StHexagon backgroundImage={imgUrl} />
            <StHexagonCurtain>
              <StLabel>{label}</StLabel>
            </StHexagonCurtain>
          </StCutter>
        </StCutter>
      </StHexagonLabel>
    );
  }
}

export default HexagonLabel;
