import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas'
import * as Assets from './assets-arrays.js'  

function App() {
  //props for canvas
  const [background, setBackground] = useState(null);
  const [base, setBase] = useState(null);
  const [outfit, setOutfit] = useState(null);

  const [backgroundColor, setBackgroundColor] = useState(null);
  const [baseColor, setBaseColor] = useState(null);
  const [outfitColor, setOutfitColor] = useState(null);

  //selection menu functionality 
  const [selectedCategory, setSelectedCategory] = useState(Assets.categories[0]);
  const [selectedItemMenu, setSelectedItemMenu] = useState(Assets.backgrounds);
  const [selectedItem, setSelectedItem] = useState(Assets.backgrounds[0]);
  const [selectedColor, setSelectedColor] = useState(Assets.backgrounds[0].colors[0]);

  //select category
  const categorySelection = (myCategory) => {
    console.log('category switch!');
    setSelectedCategory(myCategory);

    if (myCategory.id == "Backgrounds"){
      setSelectedItemMenu(Assets.backgrounds);
      setSelectedItem(Assets.backgrounds[0]);
      setOutfitColor(Assets.backgrounds[0].colors[0]);

    }
    if (myCategory.id == "Bases"){
      setSelectedItemMenu(Assets.bases);
      setSelectedItem(Assets.bases[0]);
      setOutfitColor(Assets.bases[0].colors[0]);


    }
    if (myCategory.id == "Outfits"){
      setSelectedItemMenu(Assets.outfits);
      setSelectedItem(Assets.outfits[0]);
      setOutfitColor(Assets.outfits[0].colors[0]);

    }
  }

  //select item
  const itemSelection = (myItem) => {
    setSelectedItem(myItem);
    if (selectedCategory.id == "Backgrounds"){
      setBackground(myItem);
      setOutfitColor(myItem.colors[0]);
    }
    if (selectedCategory.id == "Bases"){
      setBase(myItem);
      setOutfitColor(myItem.colors[0]);

    }
    if (selectedCategory.id == "Outfits"){
      setOutfit(myItem);
      setOutfitColor(myItem.colors[0]);

    }
  }

  //select color
  const colorSelection = (myColor) =>{
    setSelectedColor(myColor);
    if (selectedCategory.id == "Backgrounds"){
      setBackgroundColor(myColor);
    }
    if (selectedCategory.id == "Bases"){
      setBaseColor(myColor);
    }
    if (selectedCategory.id == "Outfits"){
      setOutfitColor(myColor);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="game-wrapper">
          <Canvas id="dressup-canvas" background={background} base={base} outfit={outfit} backgroundcolor={backgroundColor} basecolor={baseColor} outfitcolor={outfitColor}/>
          <div id="controllers-wrapper">
            <div id="colors-wrapper">
            {
              selectedItem.colors.map((color) => {
                return(
                  <div className="colors-card" id={color == selectedColor ? 'selected-colors' : undefined} onClick={() => colorSelection(color)}>
                    <img src={color.icon}/>
                    <div className="selection-indicator"  style={{ display: (color == selectedColor) ? 'block' : 'none' }}></div>
                  </div>
                )
              })
             }
            </div>
            <div id="category-wrapper">
             {
              Assets.categories.map((category) => {
                return(
                  <div className="category-card" id={category == selectedCategory ? 'selected-category' : undefined} onClick={() => categorySelection(category)}>
                    <img src={category.icon}/>
                    <div className="selection-indicator"  style={{ display: (category == selectedCategory) ? 'block' : 'none' }}></div>
                  </div>
                )
              })
             }
            </div>
            <div id="items-wrapper">
              {
              selectedItemMenu.map((items) => {
                return(
                  <div className="items-card" id={items == selectedItem ? 'selected-items' : undefined} onClick={() => itemSelection(items)}>
                    <img src={items.icon}/>
                    <div className="selection-indicator"  style={{ display: (items == selectedItem) ? 'block' : 'none' }}></div>
                  </div> 
                )
              })
            }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
