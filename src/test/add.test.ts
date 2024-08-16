import { convertedDate } from "../index";
import {expect} from "@jest/globals";

describe("convertedDate", () => {
    it("should return the date in short format", () => {
        const date = "2022-01-01";
        const format = "short";
        const expected = "01 ม.ค. 2565";
        const result = convertedDate(date, format);
        expect(result).toEqual(expected);
    });

    it("should return the date in full format", () => {
        const date = "2022-01-01";
        const format = "full";
        const expected = "01 มกราคม 2565";
        const result = convertedDate(date, format);
        expect(result).toEqual(expected);
    });
});