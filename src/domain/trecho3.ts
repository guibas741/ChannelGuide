// O código a seguir é responsável por expor uma chamada de código nativo (Native Modules) como um módulo TypeScript. Como você acha
// que poderíamos melhorará-lo?

import { NativeModules } from "react-native";
const { CalendarModule } = NativeModules;
export default CalendarModule;
