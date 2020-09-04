type AddNewFontParams = { fontFamilyName: string, url: string };

class FontFaceService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private addNewFontFontFaceRule = ({ fontFamilyName, url }: AddNewFontParams) => {};

  public async addFont({ fontFamilyName, url }: AddNewFontParams) {
    if (!fontFamilyName || !url) {
      return;
    }

    const fullLink = url;

    if (!FontFace) {
      this.addNewFontFontFaceRule({ fontFamilyName, url: fullLink });
      return;
    }

    try {
      const newFontFace = new FontFace(fontFamilyName, `url(${fullLink})`);
      await newFontFace.load();
      document.fonts.add(newFontFace);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new FontFaceService();
