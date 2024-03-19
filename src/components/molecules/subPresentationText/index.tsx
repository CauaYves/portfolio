import { TypeAnimation } from "react-type-animation";

export default function SubPresentationText() {
  return (
    <TypeAnimation
      sequence={[
        "Construindo experiências digitais que inspiram e conectam.",
        1000,
        "Traduzindo requisitos em código eficiente, com paixão pela qualidade em cada camada do desenvolvimento.",
        1000,
        "Vamos construir juntos?",
        3000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "1.1em",
        color: "#9ca3af",
        maxWidth: "600px",
        lineHeight: "160%",
        margin: "40px 0px",
      }}
    />
  );
}
