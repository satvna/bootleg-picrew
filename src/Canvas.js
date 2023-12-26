import React, { useRef, useEffect, useState } from 'react'
import * as Assets from './assets-arrays.js'


const Canvas = props => {
  
  const canvasRef = useRef(null);

  //get bg
  const getBg = () => {
    if (props.background == null) {
        let bg_default = new Image();
        bg_default.src = Assets.backgrounds[0].image;
        return bg_default;
      }
      else {
        let bg = new Image();
        bg.src = props.background.image
        return bg;
      }
  }
  //set base
  const getBase = () => {
    if (props.base == null) {
        let base_default = new Image();
        base_default.src = Assets.bases[0].image;
        return base_default;
      }
      else {
        let base = new Image();
        base.src = props.base.image;
        return base;
      }
    }

    //set outfit
    const getOutfit = () => {
        if (props.outfit == null){
            let outfit_default = new Image();
            outfit_default.src = Assets.outfits[0].image;
            return outfit_default;
        }
        else {  
            let outfit = new Image();
            outfit.src = props.outfit.image;
            return outfit;
        }
    }
    //set outfit color
       const getOutfitColor = () => {
        if (props.outfitcolor == null){
            let outfit_default = new Image();
            outfit_default.src = Assets.outfits[0].colors[0].image;
            return outfit_default;
        }
        else {  
            let outfit = new Image();
            outfit.src = props.outfitcolor.image;
            return outfit;
        }
    }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.drawImage(getBg(), 0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(getBase(), 0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(getOutfit(), 0, 0, context.canvas.width, context.canvas.height);
    context.drawImage(getOutfitColor(), 0, 0, context.canvas.width, context.canvas.height);


  }, [props.outfit, props.background, props.outfitcolor])
  
  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas



//   //set bg
//   if (props.background == null) {
//     let bg_default = new Image();
//     bg_default.src = Assets.backgrounds[0].image;
//     setBgImage(bg_default);
//   }
//   else {
//     let bg = new Image();
//     bg.src = props.background.image
//     setBgImage(bg);
//   }
//   //set base
//     if (props.base == null) {
//         let base_default = new Image();
//         base_default.src = Assets.bases[0].image;
//         setBaseImage(base_default);
//       }
//       else {
//         let base = new Image();
//         base.src = props.base.image;
//         setBaseImage(base);
//       }
// //set outfit
// if (props.outfit != null){
//     let outfit = new Image();
//     outfit.src = props.outfit.image;
//     setBaseImage(outfit);
// }
      

//   let base_default = new Image();
//   base_default.src = Assets.bases[0].image;
  