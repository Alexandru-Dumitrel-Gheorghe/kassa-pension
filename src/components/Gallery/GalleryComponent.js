import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./GalleryComponent.css";

const images = [
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554934498.jpg?k=df84e76d9bb2f71937a71b14bd270dd76e0e28434b66346e43f53f56f9c1b646&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554934498.jpg?k=df84e76d9bb2f71937a71b14bd270dd76e0e28434b66346e43f53f56f9c1b646&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229642.jpg?k=5040ecc9259b9650ff9d2206084d094196a579efb3866b58f9ce9fc882812055&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229642.jpg?k=5040ecc9259b9650ff9d2206084d094196a579efb3866b58f9ce9fc882812055&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557012813.jpg?k=b49600e68b767e80a66ba2347e3524300b722ff96137b3e4827abc2d129adf21&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557012813.jpg?k=b49600e68b767e80a66ba2347e3524300b722ff96137b3e4827abc2d129adf21&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229625.jpg?k=0b9ebe916f419bce7c7c2ce2e8f910091cd5a3a38c0171ba269d5098e8edd15b&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557015551.jpg?k=266e02afe025dfc4086710edceac0aef76fe21b545dc31c2cacbf52ec7069875&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557015551.jpg?k=266e02afe025dfc4086710edceac0aef76fe21b545dc31c2cacbf52ec7069875&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557011854.jpg?k=f2d8225f07de94560d713cf8099e07c73964ef430e4ab437d16d6f7e091bba33&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/557011854.jpg?k=f2d8225f07de94560d713cf8099e07c73964ef430e4ab437d16d6f7e091bba33&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554930705.jpg?k=48eba751d3db31acc4c2beeb6b6df8fe3e3fa2a69d17e66196db48d18c394946&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554930705.jpg?k=48eba751d3db31acc4c2beeb6b6df8fe3e3fa2a69d17e66196db48d18c394946&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229689.jpg?k=69129c1eea15d671299400bbda2da723180ff3990cb6a47c21fb44f8db980d4a&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229689.jpg?k=69129c1eea15d671299400bbda2da723180ff3990cb6a47c21fb44f8db980d4a&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229707.jpg?k=2b4da595e9c2f1a816479e98644865163f47c0b7b217cdaf4ccb73973ff1e570&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229707.jpg?k=2b4da595e9c2f1a816479e98644865163f47c0b7b217cdaf4ccb73973ff1e570&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229700.jpg?k=133c5dbd0d8d8ff9e9ddf6db9ecb4e85c5cb3192d1e84ac39ca9eda70238c8eb&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229700.jpg?k=133c5dbd0d8d8ff9e9ddf6db9ecb4e85c5cb3192d1e84ac39ca9eda70238c8eb&o=&hp=1",
  },
  {
    original:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933348.jpg?k=7553f2185dc363af7d6683c75a85a6286efea5c282500253f8b19aa6d3c96705&o=&hp=1",
    thumbnail:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554933348.jpg?k=7553f2185dc363af7d6683c75a85a6286efea5c282500253f8b19aa6d3c96705&o=&hp=1",
  },
];

const GalleryComponent = () => {
  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Povestea Noastră în Imagini</h2>
      <div className="gallery-container">
        <ImageGallery items={images} />
      </div>
    </div>
  );
};

export default GalleryComponent;
