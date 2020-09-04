const getFontNameById = (fonts: any[] | undefined, fontId: number) => {
  const font = (fonts && fonts.length) ? fonts.find(item => item.id === fontId) : '';
  return font ? font.name : '';
};

export default getFontNameById;
