import React from 'react';
import GalleryItemLrgContainer from '../../containers/GalleryItemLrgContainer';
import GalleryItemSmlContainer from '../../containers/GalleryItemSmlContainer';

const GalleryContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 442px;
  width: 100%;
  cursor: pointer;
  margin: 0px;
`;

const LargerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
`;

const SmallContainer = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  flex-flow: row wrap;
  position: relative;
`;

const ViewPhotosButton = styled.button`
  position: absolute;
  top: 86.5%;
  left: 80.85%;
  cursor: pointer;
  padding: 8px 15px;
  border-radius: 5px;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 450 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: outline-color .25s;
  z-index: 2;

  &:focus {
    box-shadow: 0 0 3pt 2pt white;
    outline-color: white !important;
    border-radius: 1px solid black;
  }

  &:active {
    background-color: #e6e6e6;
    border-radius: 1px solid black;
  }
`;

const Gallery = ({
  handleHoverOff, handleHoverOn, handleHoverItemNull, modalView, change, listingData, data, loaded,
}) => (
  <GalleryContainer onMouseOver={handleHoverOn} onMouseLeave={() => { handleHoverOff(); handleHoverItemNull(); }}>
    <LargerContainer>
      {!loaded && <GalleryItemLrgContainer modalView={modalView} change={change} photo="" />}
      {loaded && <GalleryItemLrgContainer modalView={modalView} change={change} photo={data.photos[0]} />}
    </LargerContainer>
    <SmallContainer>
      {!loaded && <GalleryItemSmlContainer id="2" modalView={modalView} change={change} photo="" />}
      {loaded && <GalleryItemSmlContainer id="2" modalView={modalView} change={change} photo={data.photos[1]} />}
      {!loaded && <GalleryItemSmlContainer id="3" modalView={modalView} change={change} photo="" />}
      {loaded && <GalleryItemSmlContainer id="3" modalView={modalView} change={change} photo={data.photos[2]} />}
      {!loaded && <GalleryItemSmlContainer id="4" modalView={modalView} change={change} photo="" />}
      {loaded && <GalleryItemSmlContainer id="4" modalView={modalView} change={change} photo={data.photos[3]} />}
      {!loaded && <GalleryItemSmlContainer id="5" modalView={modalView} change={change} photo="" />}
      {loaded && <GalleryItemSmlContainer id="5" modalView={modalView} change={change} photo={data.photos[4]} />}
      <ViewPhotosButton type="button" onClick={modalView}>View Photos</ViewPhotosButton>
    </SmallContainer>
  </GalleryContainer>
);
export default Gallery;
