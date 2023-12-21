// O trecho a seguir é de um componente que apresenta dados recebidos por props. Para uma informação específica, é necessário utilizar
// uma função auxiliar que faz um cálculo computacionalmente barato. Você faria alguma alteração nele?

import { useMemo } from "react";
import { cheapComputation } from "./computations";

type Props = {
  square: any;
};

const SquareData = ({ square }: Props) => {
  const info = useMemo(
    () => cheapCoputation(square.height, square.width),
    [cheapComputation]
  );
  // ...
};
