import * as XLSX from 'xlsx-js-style';
import { FONTS, FONT_SIZES, DEFAULT_CELL_STYLE, CELL_TYPE_STRING } from '../../constants/xlsxFormatConstants';

export interface CellBuilderInterface {
  createTextCell(v: string, style?: { size?: number; bold?: boolean }): XLSX.CellObject
  createLinkCell(v: string, link: string): XLSX.CellObject
}

export class CellBuilder implements CellBuilderInterface {
    public createTextCell(v: string, style?: { size?: number; bold?: boolean }): XLSX.CellObject {
        const {size, bold} = style || DEFAULT_CELL_STYLE;

        return {
            v,
            t: CELL_TYPE_STRING,
            s: {
                font: {
                    name: FONTS.TIMES,
                    sz: size,
                    bold,
                },
                alignment: {
                    wrapText: true,
                    vertical: 'top',
                },
            },
        };
    }

    public createLinkCell(v: string, link: string): XLSX.CellObject {
        return {
            v,
            t: CELL_TYPE_STRING,
            l: {Target: link},
            s: {
                font: {
                    name: FONTS.TIMES,
                    sz: FONT_SIZES.SMALL,
                    underline: true,
                    color: {
                        rgb: '0563c1',
                    },
                },
                alignment: {
                    wrapText: true,
                    vertical: 'top',
                },
            },
        };
    }
}
