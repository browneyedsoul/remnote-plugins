export const toggle = (url: string) => {
  return `[data-rem-tags~="rating"] {
    .EditorContainer {
        color: transparent;
        display: flex;
        justify-content: center;
        min-height: 10rem;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url('${url}');
         > span:nth-of-type(1) {
            font-size: 1.4rem;
            position: relative;
            left: -5rem;
            top: 1rem;
         }
    }
}`;
};
