import styled from "styled-components"

export const StyleGalleryImageContainer = styled.div`
`;

export const StyleGalleryImage = styled.img`
    position: absolute;
    left: -10000%;
    right: -10000%;
    top: -10000%;
    bottom: -10000%;
    margin: auto auto;
    min-width: 1000%;
    min-height: 1000%;
    transform: scale(.1);
    -o-object-fit: cover;
    object-fit: contain;
`;

export const StyleHorizontalScrollChild = styled.div`
  height: 50%;
  transform: rotate(90deg);
  transform-origin: right top;
`;