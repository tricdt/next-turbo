import hexToRgb from './hex-to-rgb';
function rgba(color: string, opacity: number): string {
   return `rgba(${hexToRgb(color)}, ${opacity})`;
}
export default rgba;
