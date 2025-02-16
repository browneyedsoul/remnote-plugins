export const rulerStyle = (e: number) => {
  return `
  #hierarchy-editor [data-rem-container-tags*="table1"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table2"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table3"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table4"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table5"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table6"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table7"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table8"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}
  #hierarchy-editor [data-rem-container-tags*="table9"] > div:first-child:focus-within .rn-editor__rem__body__text::after {opacity: ${e};}`;
};
