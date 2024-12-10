import convertDate from "../index";




describe("Convert Date", () => {
    test("Convert Date to Full Format", () => {
        const date = new Date("2021-01-01");
        const format = "full";
        expect(convertDate(date, format)).toBe("01 มกราคม 2564");
    });
    
    test("Convert Date to Short Format", () => {
        const date = new Date("2021-01-01");
        const format = "short";
        expect(convertDate(date, format)).toBe("01 ม.ค. 2564");
    });
    
    test("Invalid Date", () => {
        const date = null;
        const format = "full";
        expect(convertDate(date, format)).toBe("Invalid date or format");
    });
    
    test("Invalid Format", () => {
        const date = new Date("2021-01-01");
        const format = "invalid";
        expect(convertDate(date, format)).toBe("Invalid format");
    });
});