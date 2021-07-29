import React, { useState, useCallback } from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

export default function MediaPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const photos = [
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/1.jpg`,
      width: 4,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/2.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/3.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/4.jpg`,
      width: 4,
      height: 3,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/5.jpg`,
      width: 4,
      height: 3,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/6.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/7.jpg`,
      width: 3,
      height: 4,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/8.jpg`,
      width: 4,
      height: 3,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/eventupdates/9.jpg`,
      width: 4,
      height: 3,
    },
  ]
  return (
    <>
      <div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  )
}
