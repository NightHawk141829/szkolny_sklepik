import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Piórnik', description: 'Stylowy piórnik z wieloma kieszeniami na długopisy i ołówki.', price: 25, available: true, image: 'https://eplecaki.pl/145105-large_default/piornik-mlodziezowy-coolpack-saszetka-podwojna-clio-black.jpg' },
    { id: 2, name: 'Notatnik w linię', description: 'Notatnik w linię idealny do robienia notatek.', price: 15, available: true, image: 'https://www.fajnynotes.pl/wp-content/uploads/2018/05/1103273a.jpg' },
    { id: 3, name: 'Notatnik w kratkę', description: 'Notatnik w kratkę świetny do szkicowania i pisania.', price: 15, available: true, image: 'https://sklep.edica.pl/userdata/public/gfx/1265/NOTEBOOK-A5-wnetrze-w-kratke.jpg' },
    { id: 4, name: 'Zestaw długopisów (kolorowych)', description: 'Zestaw kolorowych długopisów idealnych do zaznaczania i pisania.', price: 15, available: true, image: 'https://leclerc-online.pl/public/upload/sellasist_cache/thumb_page_6201293623eee76e4ceb3b19f2b6f302.jpg' },
    { id: 5, name: 'Zestaw ołówków', description: 'Komplet wysokiej jakości ołówków do szkicowania i pisania.', price: 15, available: true, image: 'https://biurowe-szkolne.pl/images/Zestaw-olowkow-12-sztuk-5B-5H-Koh-i-noor-1500-w-metalowej-kasetce.jpg' },
    { id: 6, name: 'Korektor w taśmie', description: 'Praktyczny korektor w taśmie do szybkich poprawek.', price: 15, available: true, image: 'https://sklepherlitz.pl/media/wysiwyg/Produkty/korektory/pelikan_korektor_blanco_w_tasmie_mini_340448_1_.jpg' },
    { id: 7, name: 'Gumka do mazania', description: 'Gumka do mazania, która nie pozostawia smug.', price: 15, available: true, image: 'https://inkhouse.pl/foto/7283/gumka-do-mazania-biala-1-szt_1.webp' },
    { id: 8, name: 'Zakreślacze (różne kolory)', description: 'Zestaw zakreślaczy w różnych kolorach do podkreślania ważnych informacji.', price: 15, available: true, image: 'https://9.allegroimg.com/original/06b98a/cb36bf73421b9919bc37e87cb629/ZAKRESLACZE-STABILO-rozne-KOLORY-neonowe-FLUORESCENCYJNE-6szt-STABILO-BOSS' },
    { id: 9, name: 'Linijka', description: 'Solidna linijka o długości 30 cm.', price: 10, available: true, image: 'https://skala.wroclaw.pl/userdata/public/gfx/3312/Linijka-aluminiowa-15-cm-LENIAR.jpg' },
    { id: 10, name: 'Zeszyt do matematyki', description: 'Specjalny zeszyt do matematyki z kratkowanymi kartkami.', price: 20, available: true, image: 'https://strefaucznia.pl/63970-thickbox_default/zeszyt-a560k-oxford-do-matematyki-kratka-z-marginesem-niebieski.jpg' },
    { id: 11, name: 'Plecak szkolny', description: 'Wytrzymały plecak szkolny z wieloma kieszeniami na książki i akcesoria.', price: 100, available: true, image: 'https://coolpack.pl/pol_pl_Plecak-mlodziezowy-szkolny-CoolPack-Cross-Black-Collection-F099877-27700_1.jpg' },
    { id: 12, name: 'Pudełko śniadaniowe', description: 'Praktyczne pudełko śniadaniowe z przegródkami.', price: 30, available: true, image: 'https://globalgift.pl/1877192-large_default/Pudelko_sniadaniowe_kanapka_450_ml.jpg' },
  ];
  

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
