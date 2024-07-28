export const customStyle = (e: number) => {
  return `
  .hierarchy-editor--ltr .TreeNode, .hierarchy-editor--ltr .TreeNode--list {
    padding-left: ${e}px !important;
  }
  .node-card-item::before {
    margin-left: -${e}px !important;
  }`;
};
