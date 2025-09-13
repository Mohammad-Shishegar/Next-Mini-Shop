interface ITextOverFlow {
  text: string;
  charNum?:number
}

const TextOverFlow = ({ text ,charNum=15}: ITextOverFlow) => {
  return <>{text.toString().slice(0, charNum) + "..."}</>;
};

export default TextOverFlow;
