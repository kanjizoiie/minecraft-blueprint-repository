export class ChartUtils {
    public static average(array: number[]): number {
        return array.reduce((prev, curr) => prev + curr, 0) / array.length;
    }
    public static culmulativeMovingAverage(array: number[]): number[] {
        return array.map((_value, index, array) => this.average(array.slice(null, index + 1)));
    }

    public static simpleMovingAverage(array: number[], elements?: number) {
        return array.map((_value, index, array) => this.average(array.slice(index - elements < 0 ? 0 : index - elements, index + 1)));
    }
}